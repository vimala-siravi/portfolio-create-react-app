import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import pageLinks from "../constants/pageLinks";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="light">
      <Navbar.Brand as={Link} to="/" style={{ fontWeight: "500" }}>
        Vimala Siravi
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {pageLinks.map((link) => (
            <li key={link.id}>
              <Nav.Link as={Link} to={link.url}>
                {link.text}
              </Nav.Link>
            </li>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
