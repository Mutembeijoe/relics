import cn from "classnames";
import Table from "react-bootstrap/Table";

import styles from "./cart.module.scss";
import { cartItemsCount, cartItemsSelector } from "../../redux/cart/selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const Cart = ({ cartOpen, cartItemsCount, cartItems }) => {
  return (
    <div className={cn(styles.cart, { [styles.cartCollapsed]: !cartOpen })}>
      <div className={`${styles.content}`}>
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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr>
                  <td className={styles.product}>
                    <div>
                      <img src={item.image_url} alt="" className="img-fluid border "/>
                    </div>
                    <span className="pl-3 font-weight-bold">{item.product_name}</span>
                  </td>
                  <td>{item.quantity}</td>
                  <td>x</td>
                </tr>
              ))}
              <tr>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItemsCount: cartItemsCount,
  cartItems: cartItemsSelector,
});

export default connect(mapStateToProps)(Cart);
