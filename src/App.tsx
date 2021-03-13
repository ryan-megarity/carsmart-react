import React, { useState } from "react";
import "./App.css";
import { ContactModal } from "./components/ContactModal";
import { Footer } from "./components/Footer";
import Home from "./components/Home";
import { TopNav } from "./components/TopNav";

export const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <TopNav handleShow={handleShow} />
      <ContactModal show={show} handleClose={handleClose} />
      <Home handleShow={handleShow} />
      <Footer />
    </div>
  );
};
