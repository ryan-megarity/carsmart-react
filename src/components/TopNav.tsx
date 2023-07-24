import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export const TopNav = (props: { handleShow: any }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">
          <img
            className="header-logo"
            src="images/headerLogo.webp"
            alt="carsmart logo"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            {/* 
            <Nav.Link
              style={{
                backgroundColor: "rgba(137, 196, 244, 1)",
                borderRadius: "10px",
                color: "white",
                padding: "0.75em 0.5em",
                textDecoration: "none",
                textTransform: "uppercase",
                margin: "10px",
              }}
              href="#quote"
            >
              Get a Quote
            </Nav.Link>
            */}
            <Nav.Link
              style={{
                backgroundColor: "rgba(31, 58, 147, 1)",
                borderRadius: "10px",
                color: "white",
                padding: "0.75em 0.5em",
                textDecoration: "none",
                textTransform: "uppercase",
                margin: "10px",
              }}
              eventKey={2}
              onClick={props.handleShow}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
