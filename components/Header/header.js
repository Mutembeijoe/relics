import axios from "axios";
import cn from "classnames";
import Link from "next/link";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { cartItemsCount } from "../../redux/cart/selectors";
import { clearCart } from "../../redux/cart/actions";
import { useUser } from "../../utils/hooks";

import styles from "./header.module.scss";

const Header = ({ toggleCartOpen, cartOpen, cartItemsCount, clearCart }) => {
  const router = useRouter();
  const [user, { mutate }] = useUser();
  const path = router.asPath;

  return (
    <Navbar
      className={`border-bottom py-0 pr-0 ${styles.navbar}`}
      expand="lg"
      sticky="top"
    >
      <Link href="/" passHref>
        <Navbar.Brand className="font-weight-bold">Relics</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.toggler}/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/" passHref>
            <Nav.Link className={path == "/" ? "active" : ""}>Home</Nav.Link>
          </Link>
          <Link href="/category/[slug]" as="/category/tees" passHref>
            <Nav.Link className={path == "/category/tees" ? "active" : ""}>
              T-shirts
            </Nav.Link>
          </Link>
          <Link href="/category/[slug]" as="/category/hoodies" passHref>
            <Nav.Link className={path == "/category/hoodies" ? "active" : ""}>
              Hoodies
            </Nav.Link>
          </Link>
        </Nav>

        <Nav>
          {!user ? (
            <Link href="/auth/login" passHref>
              <Nav.Link className={path == "/auth/login" ? "active" : ""}>
                Login
              </Nav.Link>
            </Link>
          ) : (
            <NavDropdown title={user.username} id="basic-nav-dropdown">
              <Link href="/users/orders" passHref>
                <NavDropdown.Item>my orders</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <span
                className="dropdown-item"
                onClick={() => {
                  axios.delete("/api/users/logout").then((_res) => {
                    mutate(null);
                    clearCart();
                  });
                }}
              >
                Logout
              </span>
            </NavDropdown>
          )}
        </Nav>

        <Nav>
          {cartOpen ? (
            <div
              className={`${styles.closeIcon} text-primary p-3`}
              onClick={() => toggleCartOpen(!cartOpen)}
            >
              <i className="mdi mdi-close mdi-36px "></i>
            </div>
          ) : (
            <div
              className={`${styles.cartIcon} text-primary p-3`}
              onClick={() => toggleCartOpen(!cartOpen)}
            >
              <i className="mdi mdi-cart mdi-36px "></i>
              <span className={cn({ [styles.hidden]: cartItemsCount < 1 })}>
                {cartItemsCount}
              </span>
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  cartItemsCount: cartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
