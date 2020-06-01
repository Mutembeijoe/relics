import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useRouter } from "next/router";
import styles from './header.module.scss'
import { connect } from "react-redux";
import { cartItemsCount } from "../../redux/cart/selectors";

const Header = ({toggleCartOpen, cartOpen, cartItemsCount}) => {
  const router = useRouter();
  const path = router.asPath;
  return (
    <Navbar className="border-bottom py-0 pr-0" bg="white" expand="lg" sticky="top">
      <Link href="/" passHref>
        <Navbar.Brand>Relics</Navbar.Brand>
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
        {cartOpen ?
          <div className={`${styles.closeIcon} text-primary p-3`} onClick={()=>toggleCartOpen(!cartOpen)}>
            <i className="mdi mdi-close mdi-36px "></i>
          </div>
          :
          <div className={`${styles.cartIcon} text-primary p-3`} onClick={()=>toggleCartOpen(!cartOpen)}>
            <i className="mdi mdi-cart mdi-36px "></i>
            <span className="">{cartItemsCount}</span>
          </div>
        }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  cartItemsCount: cartItemsCount(state)
})

export default connect(mapStateToProps)(Header);
