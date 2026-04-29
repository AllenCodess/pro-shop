import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../logo/logo.png";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="ProShop logo" /> ProShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/*opening tag */}
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <FaShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUser /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/*closing tag*/}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
