import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../../Styles/HeaderStyles.css";
import Logo from "../../Assets/assets/logo/logo.png";

function Header() {
  const [nav, setNav] = useState(false);

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    setNav(scrollValue > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeValueOnScroll);
    return () => window.removeEventListener("scroll", changeValueOnScroll);
  }, []);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`navbar ${nav ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="logo">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link as={Link} to="/" className="nav-link">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/Burgers" className="nav-link">Burgers</Nav.Link>
              <Nav.Link as={Link} to="/menu" className="nav-link">Combos</Nav.Link>
              <Nav.Link as={Link} to="/shop" className="nav-link">Família</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link">Contato</Nav.Link>

              <Nav.Link as={Link} to="/" className="nav-link">
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
