import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export const Footer = () => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="/">
        <img
          className="footer-logo"
          src="images/headerLogo.webp"
          alt="carsmart logo"
        />
      </Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Nav>
        {/*         <Nav.Link
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
        >
          Contact Us
        </Nav.Link> */}
        <div>
          <a href="tel:447799038355" target="blank">
            <div className="phone">
              <img
                className="phone-icon-footer"
                src="images/phone-24px.svg"
                alt="phone icon"
              ></img>
              <h2 className="phone-number-footer">07799038355</h2>
            </div>
          </a>
        </div>
      </Nav>
    </Navbar>
  );
};
