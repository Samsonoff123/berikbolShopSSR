import React from "react";
import ContactForm from './ContactForm'
import Map from './Map'

export default function index () {
  return (
    <>
      <div className="contact__us">
        <h3>Contact us</h3>
        <div className="contact__us__flex">
          <Map />
          <ContactForm />
        </div>
      </div>
    </>
  );
}
