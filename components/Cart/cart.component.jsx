import cn from "classnames";
import styles from "./cart.module.scss";
import { cartItemsCount, cartItemsSelector } from "../../redux/cart/selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { removeItemFromCart } from "../../redux/cart/actions";

const Cart = ({ cartOpen, cartItemsCount, cartItems, removeItem }) => {
  return (
    <div className={cn(styles.cart, { [styles.cartCollapsed]: !cartOpen })}>
      <div className={`${styles.content} mx-2`}>
        <div className={styles.header}>
          <h2>Your Cart</h2>
          <div className={`${styles.cartBadgeContainer} py-4`}>
            <span>Items in Cart</span>
            <div
              className={`${styles.cartBadge} mx-2 text-primary font-weight-bold`}
            >
              {cartItemsCount}
            </div>
          </div>
        </div>
        <div className={styles.cartItems}>
          <div className={styles.cartItemsHeader}>
            <div className={styles.productCol}>Product</div>
            <div className={styles.qtyCol}>Qty</div>
            <div className={styles.rmvCol}>Remove</div>
          </div>
          <div className={styles.allItems}>
            {cartItems.map((item) => {
              return (
                <div className={`${styles.item} my-3 border-bottom`}>
                  <div className={`${styles.productCell}`}>
                    <div className={styles.itemImage}>
                      <img
                        src={item.image_url}
                        alt=""
                        className="img-fluid border border-bottom-0"
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
                      className={`mdi mdi-chevron-up mdi-24px ${styles.chevron}`}
                    ></i>
                    {item.quantity}
                    <i
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
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemsCount: cartItemsCount,
  cartItems: cartItemsSelector,
});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemID,size) => dispatch(removeItemFromCart(itemID,size)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
