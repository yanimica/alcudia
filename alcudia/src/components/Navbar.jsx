import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";

export const NavBar = () => (
  <Navbar
    expand="lg"
    style={{
      backgroundColor: "white",
      marginLeft: "1cm",
      marginRight: "1cm",
    }}
  >
    <Navbar.Brand
      as={NavLink}
      to="/"
      style={{ fontFamily: "'Playfair Display', serif", fontSize: "60px" }}
    >
      ALCUDIA
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/category/Mujer">
          Mujer
        </Nav.Link>
        <Nav.Link as={NavLink} to="/category/Hombre">
          Hombre
        </Nav.Link>
        <Nav.Link as={NavLink} to="/category/Niños">
          Niños
        </Nav.Link>
        <NavDropdown id="basic-nav-dropdown">
          <NavDropdown.Item as={NavLink} to="/category/temporada de verano">
            Verano
          </NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/category/invierno">
            Invierno
          </NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/category/tendencias">
            Tendencias
          </NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/category/rebajas">
            Rebajas
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={NavLink} to="/category/sustentabilidad">
            Sustentabilidad
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav className="ml-auto">
        <CartWidget />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
