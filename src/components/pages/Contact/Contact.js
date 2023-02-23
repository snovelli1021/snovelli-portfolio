import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Contact.css";

// Need to validate form and style.

//Adding citation for YouTube video I used to build form

//Chaoo Charles. (March 23, 2022). React: Send email from contact form without server code - Email.js Tutorial
//[Video]. YouTube. https://www.youtube.com/watch?v=bMq2riFCF90

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Form
      className="contactForm"
      style={{ width: "20rem" }}
      ref={form}
      onSubmit={sendEmail}
    >
      <Form.Label>Name</Form.Label>
      <input
        className="mb-3"
        placeholder="First and last name"
        type="text"
        name="user_name"
      />
      <Form.Label>Email</Form.Label>
      <input
        className="mb-3"
        placeholder="example@email.com"
        type="email"
        name="user_email"
      />
      <div>
        <Form.Text className="text-muted">
          Your information is private and never sharaed.
        </Form.Text>
      </div>
      <Form.Label>Message</Form.Label>
      <textarea
        id="messageInput"
        maxLength={500}
        placeholder="Type your message here."
        name="message"
      />
      <div>
        <Form.Text className="text-muted">Maximum 500 characters.</Form.Text>
      </div>
      <Button id="formBtn" variant="primary" type="submit">
        Submit!
      </Button>
    </Form>
  );
};

export default Contact;
