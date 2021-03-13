import React from "react";
import { Button, Carousel, Container, Jumbotron } from "react-bootstrap";

const Home = (props: { handleShow: any }) => {
  const mapsIframe =
    '<iframe width="80%"frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBBV401KxB3kbXOzRUTI6yOK-rg6EGLJj8&q=Carsmart+Oxford+OX3+9SE" allowfullscreen></iframe>';

  return (
    <div>
      <Jumbotron
        className="bg-success"
        fluid
        style={{
          margin: "0px",
          padding: "0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src="images/info-24px.svg" alt="info icon" />
        <p style={{ margin: "0px 0px 0px 5px", color: "white" }}>
          Covid-19: We are open as usual!
        </p>
      </Jumbotron>
      <Carousel style={{ margin: "0px" }} fade>
        <Carousel.Item>
          <img
            className="d-block w-100 home-image"
            src="images/stockOne Cropped.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home-image"
            src="images/stockWheel Cropped.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home-image"
            src="images/stockRed Cropped.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Jumbotron style={{ margin: "0px", padding: "20px" }} fluid>
        <h1>Welcome to Carsmart Oxford</h1>
        <p>
          Established in 2007, we offer great rates on all aspects of car body
          repair. We are conveniently located just off the Headington roundabout
          in Oxford.
        </p>
        <p>
          If you would like to arrange a free quote, discuss a job or book
          something in with us then please click below to contact us:
        </p>
        <Button
          style={{
            backgroundColor: "rgba(31, 58, 147, 1)",
            borderRadius: "10px",
            color: "white",
            padding: "0.75em 0.5em",
            textDecoration: "none",
            textTransform: "uppercase",
            margin: "10px",
          }}
          onClick={props.handleShow}
        >
          Contact Us
        </Button>
      </Jumbotron>
      <Jumbotron style={{ margin: "0px", padding: "20px" }} fluid>
        <h4 className="contact-text">Where you can find us:</h4>
        <div className="address">
          <div
            className="maps-iframe"
            dangerouslySetInnerHTML={{ __html: mapsIframe }}
          />
          <address className="address-text">
            Carsmart Oxford
            <br />
            Workshop 3<br />
            Wick Farm, Barton Village Road
            <br />
            Headington
            <br />
            Oxford
            <br />
            OX3 9SE
          </address>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Home;
