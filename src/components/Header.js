import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import pageLinks from "../constants/pageLinks";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="light">
      <Navbar.Brand href="/">Vimala Siravi</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {pageLinks.map((link) => (
            <li key={link.id}>
              <Nav.Link href={link.url}>{link.text}</Nav.Link>
            </li>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
