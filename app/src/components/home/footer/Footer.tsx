import React, { BaseSyntheticEvent, useRef, useState } from "react";
import Links from "../links/Links";
import emailjs from "@emailjs/browser";
import Error from "./Error";

type UserContactDetails = {
  name: {
    isValid: boolean;
    name: string;
    error_msg: string;
  };
  email: {
    isValid: boolean;
    email: string;
    error_msg: string;
  };
  message: {
    isValid: boolean;
    message: string;
    error_msg: string;
  };
};

const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<UserContactDetails>({
    name: {
      isValid: true,
      name: "",
      error_msg: "",
    },
    email: {
      isValid: true,
      email: "",
      error_msg: "",
    },
    message: {
      isValid: true,
      message: "",
      error_msg: "",
    },
  });

  const handleChange = (e: any) => {
    const val = e.target.value;
    const input = e.target.id;

    if (input === "name") {
      setFormData((prevData) => {
        return {
          ...prevData,
          name: {
            isValid: true,
            name: val,
            error_msg: "",
          },
        };
      });
    } else if (input === "email") {
      setFormData((prevData) => {
        const emailValid = val.indexOf("@") !== -1;
        return {
          ...prevData,
          email: {
            isValid: emailValid ? true : false,
            email: val,
            error_msg:
              prevData.email.isValid && emailValid
                ? "Sorry, invalid format here."
                : "",
          },
        };
      });
    } else {
      setFormData((prevData) => {
        return {
          ...prevData,
          message: {
            isValid: true,
            message: val,
            error_msg: "",
          },
        };
      });
    }
  };

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    const name = formData.name.name;
    const email = formData.email.email;
    const message = formData.message.message;

    if (!name) {
      console.log("hello");
      setFormData({
        ...formData,
        name: {
          ...formData.name,
          isValid: false,
          error_msg: "Please enter your name.",
        },
      });
      return;
    }

    if (!email || email.indexOf("@") === -1) {
      console.log("hello!");
      setFormData({
        ...formData,
        email: {
          ...formData.email,
          isValid: false,
          error_msg: "Sorry, invalid format here.",
        },
      });
      return;
    }

    if (!message) {
      console.log("hello!!");
      setFormData({
        ...formData,
        message: {
          ...formData.message,
          isValid: false,
          error_msg: "Please enter a message.",
        },
      });
      return;
    }

    const serviceID = process.env.EMAILJS_SERVICE_ID;
    const templateID = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    const templateVars = {
      name: formData.name.name,
      email: formData.email.email,
      message: formData.message.message,
    };

    emailjs
      .send(serviceID, templateID, templateVars, publicKey)
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
                value={formData?.name.name}
                onChange={handleChange}
              />
              {!formData?.name?.isValid ? (
                <Error message={formData.name.error_msg} />
              ) : (
                ""
              )}
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
                value={formData?.email.email}
                onChange={handleChange}
              />
              {!formData?.email?.isValid ? (
                <Error message={formData.email.error_msg} />
              ) : (
                ""
              )}
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
                value={formData?.message.message}
                onChange={handleChange}
              ></textarea>
              {!formData?.message?.isValid ? (
                <Error message={formData.message.error_msg} />
              ) : (
                ""
              )}
            </div>
            <div className="form-submit">
              <button
                type="submit"
                className="submit-btn offset-colored-underline"
                formNoValidate={true}
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
