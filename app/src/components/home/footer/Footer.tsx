import React, { BaseSyntheticEvent, useRef } from "react";
import Links from "../links/Links";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const formData = e.target;
    const name = formData.name.value;
    const email = formData.email.value;
    const message = formData.message.value;

    if (!name) {
      console.log("Name invalid.");
    }

    if (!email || email.indexOf("@") === -1) {
      console.log("Email invalid");
    }

    if (!message) {
      console.log("message invalid");
    }

    const serviceID = process.env.EMAILJS_SERVICE_ID;
    const templateID = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="contact-section__container">
      <div className="contact-section__wrapper">
        <div className="contact-section__content">
          <h2>Contact</h2>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <div className="contact-section__form">
          <form action="#" onSubmit={handleSubmit} ref={formRef}>
            <div className="form-group">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="NAME"
                formNoValidate={true}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="EMAIL"
                formNoValidate={true}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                placeholder="MESSAGE"
              ></textarea>
            </div>
            <div className="form-submit">
              <button
                type="submit"
                className="submit-btn offset-colored-underline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <Links classOne="footer-links" classTwo="footer--positioned" />
    </div>
  );
};

export default Footer;
