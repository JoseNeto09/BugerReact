import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../../Styles/HeaderStyles.css";
import Logo from "../../Assets/assets/logo/logo.png";

function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className="custom-navlink">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="custom-navlink">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/menu" className="custom-navlink">
                Our Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/shop" className="custom-navlink">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className="custom-navlink">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="custom-navlink">
                Contact
              </Nav.Link>

              <Nav.Link as={Link} to="/" className="custom-navlink">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;