import React from "react";
import Links from "../links/Links";

const Footer = () => {
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
          <form action="#">
            <div className="form-group">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input type="text" name="name" id="name" placeholder="NAME" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input type="email" name="email" id="email" placeholder="EMAIL" />
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
