import cn from "classnames";
import Table from 'react-bootstrap/Table'

import styles from "./cart.module.scss";
import { cartItemsCount } from "../../redux/cart/selectors";
import { connect } from "react-redux";

const Cart = ({ cartOpen, cartItemsCount }) => {
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
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
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

const mapStateToProps = (state) => ({
    cartItemsCount: cartItemsCount(state)
})

export default connect(mapStateToProps)(Cart);
