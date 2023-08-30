import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
  <Navbar collapseOnSelect expand="lg" bg="warning" variant="light">
    <Container>
      <Navbar.Brand href="#/home/">Bad Bank</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#/createaccount/">Create Account</Nav.Link>
          <Nav.Link href="#/deposit/">Deposit</Nav.Link>
          <Nav.Link href="#/withdraw/">Withdraw</Nav.Link>
          <Nav.Link href="#/balance/">Balance</Nav.Link>
          <Nav.Link href="#/alldata/">All Data</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)};

export default NavBar;