import React from "react";
import { Button, Modal } from "react-bootstrap";

export const ContactModal = (props: { handleClose: any; show: any }) => {
  return (
    <>
      <Modal
        className="text-center"
        show={props.show}
        onHide={props.handleClose}
      >
        <Modal.Header className="contact-header" closeButton>
          <Modal.Title>CONTACT US</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          <p className="contact-text">Call us on: </p>
          <a href="tel:447799038355" target="blank">
            <div className="phone">
              <img
                className="phone-icon"
                src="images/phone-24px.svg"
                alt="phone icon"
              ></img>
              <h2 className="phone-number">07799038355</h2>
            </div>
          </a>
          <p className="contact-text">
            Alternatively, you can WhatsApp, Email or Facebook us:
          </p>
          <div className="contact-icon-layout">
            <a href="https://wa.me/447799038355" target="blank">
              <img
                src="images/whatsapp_logo2.webp"
                height="50px"
                alt="whatsapp logo"
                className="contact-icon"
              ></img>
            </a>
            <br />
            <a href="mailto:car.smart@live.com">
              <img
                src="images/email-icon.webp"
                height="50px"
                alt="email icon"
                className="contact-icon"
              ></img>
            </a>
            <br />
            <a href="https://www.facebook.com/carsmartoxford" target="blank">
              <img
                src="images/FindUsOnFb.webp"
                height="50px"
                alt="find us on fb"
                className="contact-icon"
              ></img>
            </a>
          </div>
        </Modal.Body>
        <Modal.Footer className="contact-header">
          <Button variant="light" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
