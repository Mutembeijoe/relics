import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useRouter } from "next/router";
import cn from "classnames";
import styles from "./header.module.scss";
import { connect } from "react-redux";
import { cartItemsCount } from "../../redux/cart/selectors";
import { userSelector } from "../../redux/user/selectors";
import { logout } from "../../redux/user/actions";
import { clearCart } from "../../redux/cart/actions";

const Header = ({
  toggleCartOpen,
  cartOpen,
  cartItemsCount,
  user,
  logout,
  clearCart,
}) => {
  const router = useRouter();
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
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
          {!user.token ? (
            <Link href="/auth/login" passHref>
              <Nav.Link className={path == "/auth/login" ? "active" : ""}>
                Login
              </Nav.Link>
            </Link>
          ) : (
            <NavDropdown title={user.username} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">my orders</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Saved Cart</NavDropdown.Item>
              <NavDropdown.Divider />
              <span
                className="dropdown-item"
                onClick={() => {
                  logout();
                  clearCart();
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
  user: userSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
