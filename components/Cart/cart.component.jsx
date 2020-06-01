import cn from "classnames";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  cartItemsCount,
  cartItemsSelector,
  cartTotalPrice,
} from "../../redux/cart/selectors";

import {
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../redux/cart/actions";

import styles from "./cart.module.scss";

const Cart = (props) => {
  const {
    cartOpen,
    toggleCartOpen,
    cartItemsCount,
    cartItems,
    removeItem,
    cartTotalPrice,
    increaseItem,
    decreaseItem,
  } = props;
  return (
    <div className={cn(styles.cart, { [styles.cartCollapsed]: !cartOpen })}>
      <div
        className={`${styles.header} sticky-top bg-white border-bottom border-left mb-4`}
      >
        <h2>Your Cart</h2>
        <div className={`${styles.cartBadgeContainer}`}>
          <span>Items in Cart</span>
          <div
            className={`${styles.cartBadge} mx-2 text-primary font-weight-bold`}
          >
            {cartItemsCount}
          </div>
        </div>
      </div>

      <div className={`${styles.content} mx-2`}>
        {cartItemsCount > 0 ? (
          <>
            <div className={styles.cartItems}>
              <div
                className={`${styles.cartItemsHeader} border-bottom font-weight-bold`}
              >
                <div className={styles.productCol}>Product</div>
                <div className={styles.qtyCol}>Qty</div>
                <div className={styles.rmvCol}>Remove</div>
              </div>
              <div className={styles.allItems}>
                {cartItems.map((item) => {
                  return (
                    <div
                      key={`${item.id}${item.size}`}
                      className={`${styles.item} py-3 border-bottom border-light`}
                    >
                      <div className={`${styles.productCell}`}>
                        <div className={styles.itemImage}>
                          <img
                            src={item.img_url}
                            alt=""
                            className="img-fluid border"
                          />
                        </div>
                        <div className="px-3 d-flex flex-column">
                          <span>{item.product_name}</span>
                          <div className="d-flex flex-row text-muted">
                            <span className="text-uppercase">{item.size}</span>
                            <span className="px-2">Ksh {item.price}</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles.qtyCell}>
                        <i
                          onClick={() => increaseItem(item.id, item.size)}
                          className={`mdi mdi-chevron-up mdi-24px ${styles.chevron}`}
                        ></i>
                        {item.quantity}
                        <i
                          onClick={() => decreaseItem(item.id, item.size)}
                          className={`mdi mdi-chevron-down mdi-24px ${styles.chevron}`}
                        ></i>
                      </div>
                      <div className={styles.rmvCell}>
                        <span
                          className="px-2 py-1 text-secondary"
                          onClick={() => removeItem(item.id, item.size)}
                        >
                          <i className="mdi mdi-close" />
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="d-flex flex-column border-bottom py-3">
                <div className="d-flex flex-row justify-content-end">
                  <div className="w-50">Sub Total</div>
                  <div className="text-primary font-weight-bold">
                    KSh {cartTotalPrice}
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-end">
                  <div className="w-50">Taxes</div>
                  <div className="text-primary font-weight-bold">0.00</div>
                </div>
                <div className="d-flex flex-row justify-content-end">
                  <div className="w-50">Shipping</div>
                  <div className="text-primary font-weight-bold">Ksh 200</div>
                </div>
                <div className="d-flex flex-row"></div>
              </div>
              <div>
                <div className="d-flex flex-row justify-content-end py-2">
                  <div className="w-50 text-primary font-weight-bold h5">
                    Total
                  </div>
                  <div className="text-primary font-weight-bold h5">
                    KSh {cartTotalPrice + 200}
                  </div>
                </div>
              </div>
            </div>
            <div className="my-3">
              <Button className="rounded" variant="primary" size="lg" block>
                CheckOut
                <i className="mdi mdi-arrow-right-bold mx-1" />
              </Button>

              <Button
                onClick={() => toggleCartOpen(!cartOpen)}
                className="rounded mx-1"
                variant="outline-primary"
                size="lg"
                block
              >
                <i className="mdi mdi-arrow-left-bold mx-1" />
                Continue shopping
              </Button>
            </div>
          </>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center">
          <i className="mdi mdi-emoticon-sad mdi-48px"/>
          <p className="mt-3">Your Cart has no Items</p>
          <Button
                onClick={() => toggleCartOpen(!cartOpen)}
                className="rounded mx-1"
                variant="outline-primary"
                size="lg"
                block
              >
                <i className="mdi mdi-arrow-left-bold mx-1" />
                Start shopping
              </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemsCount: cartItemsCount,
  cartItems: cartItemsSelector,
  cartTotalPrice: cartTotalPrice,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemID, size) => dispatch(removeItemFromCart(itemID, size)),
  increaseItem: (itemID, size) => dispatch(increaseItemQuantity(itemID, size)),
  decreaseItem: (itemID, size) => dispatch(decreaseItemQuantity(itemID, size)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
