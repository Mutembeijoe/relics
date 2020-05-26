import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {useRouter} from 'next/router'

const Header = () => {
  const router = useRouter()
  const path = router.asPath
  return(
  <Navbar bg="primary" variant="dark" expand="lg">
    <Link href="/" passHref>
    <Navbar.Brand>Relics</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link href="/" passHref>
          <Nav.Link className={path=="/"?"active":""}>Home</Nav.Link >
        </Link>
        <Link href="/category/t-shirts" passHref>
            <Nav.Link className={path=="/category/t-shirts"?"active":""}>T-shirts</Nav.Link>
        </Link>
        <Link href="/category/hoodies" passHref>
        <Nav.Link className={path=="/category/hoodies"?"active":""}>Hoodies</Nav.Link>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)};

export default Header;
