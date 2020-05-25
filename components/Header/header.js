import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => (
  <Navbar bg="primary" variant="dark" expand="lg">
    <Link href="/" passHref>
    <Navbar.Brand>Relics</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link href="/" passHref>
          <Nav.Link>Home</Nav.Link >
        </Link>
        <Link href="/category/t-shirts" passHref>
            <Nav.Link>T-shirts</Nav.Link>
        </Link>
        <Link href="/category/hoodies" passHref>
        <Nav.Link>Hoodies</Nav.Link>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
