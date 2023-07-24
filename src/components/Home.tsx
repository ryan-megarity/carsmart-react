import React from "react";
import { Button, Carousel, Jumbotron } from "react-bootstrap";

const Home = (props: { handleShow: any }) => {
  const mapsIframe =
    '<iframe width="80%"frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBBV401KxB3kbXOzRUTI6yOK-rg6EGLJj8&q=Unit+2+Frogs+Island+Old+Didcot+Road+OX10+0SW" allowfullscreen></iframe>';

  return (
    <div>
      <Jumbotron
        className="bg-primary"
        fluid
        style={{
          margin: "0px",
          padding: "0.25em",
          display: "flex",
          justifyContent: "center",
          fontSize: "1em",
        }}
      >
        <a href="#address-text">
          <p style={{ margin: "0px 0px 0px 5px", color: "white" }}>
            <img src="images/info-24px.svg" alt="info icon" /> We have relocated
            - click to see our new address below
          </p>
        </a>
      </Jumbotron>
      <Carousel style={{ margin: "0px" }} fade>
        <Carousel.Item>
          <img
            className="d-block w-100 home-image"
            src="images/stockOne Cropped.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home-image"
            src="images/stockWheel Cropped.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home-image"
            src="images/stockRed Cropped.webp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Jumbotron style={{ margin: "0px", padding: "20px" }} fluid>
        <h1>Welcome to Carsmart Oxford</h1>
        <p>
          Established in 2007, we offer great rates on all aspects of car body
          repair.
        </p>
        <p>
          If you would like to arrange a free quote, discuss a job or book
          something in with us then please click below to contact us:
        </p>
        <Button onClick={props.handleShow} variant="primary" className="btn-lg">
          Contact Us
        </Button>
      </Jumbotron>
      <Jumbotron style={{ margin: "0px", padding: "20px" }} fluid>
        <h4
          className="contact-text"
          style={{
            fontWeight: "bold",
          }}
        >
          Where you can find us:
        </h4>
        <div className="address">
          <div
            className="maps-iframe"
            dangerouslySetInnerHTML={{ __html: mapsIframe }}
          />
          <address id="address-text" className="address-text">
            Carsmart Oxford
            <br />
            Unit 2, Frogs Island
            <br />
            Old Didcot Road
            <br />
            Brightwell Cum Sotwell
            <br />
            Oxon
            <br />
            OX10 0SW
          </address>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Home;
