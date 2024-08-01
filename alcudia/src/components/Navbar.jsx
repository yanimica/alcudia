import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

import { CartWidget } from "./CartWidget";
import Home from "./Home";

export const NavBar = () => (
  <Navbar expand="lg" className="bg-body-tertiary mx-4">
    <Navbar.Brand as={NavLink} to="/">
      Alcudia
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/category/mujer">
          Mujer
        </Nav.Link>
        <Nav.Link as={NavLink} to="/category/hombre">
          Hombre
        </Nav.Link>
        <NavDropdown title="Temporada verano" id="basic-nav-dropdown">
          <NavDropdown.Item as={NavLink} to="/category/temporada de verano">
            Verano
          </NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/category/lo-nuevo">
            Lo nuevo
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
