import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Contact.css";

//Adding citation for YouTube video I used to build form

//Chaoo Charles. (March 23, 2022). React: Send email from contact form without server code - Email.js Tutorial
//[Video]. YouTube. https://www.youtube.com/watch?v=bMq2riFCF90

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  console.log(values);

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const form = useRef();

  const sendEmail = (e) => {
    setValues({
      name: "",
      email: "",
      message: "",
    });
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
          alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    // Contact form that validates and alerts input.
    <Form
      className="contactForm"
      style={{ width: "22rem" }}
      ref={form}
      onSubmit={sendEmail}
    >
      <Form.Label>Name</Form.Label>
      <input
        required
        className="mb-3"
        maxLength={50}
        placeholder="First and last name"
        type="text"
        name="user_name"
        value={values.name}
        onChange={set("name")}
      />
      <Form.Label>Email</Form.Label>
      <input
        required
        className="mb-3"
        maxLength={50}
        placeholder="example@email.com"
        type="email"
        name="user_email"
        value={values.email}
        onChange={set("email")}
      />
      <div>
        <Form.Text className="text-muted">
          Your information is private and never sharaed.
        </Form.Text>
      </div>
      <Form.Label>Message</Form.Label>
      <textarea
        required
        id="messageInput"
        maxLength={500}
        placeholder="Type your message here."
        name="message"
        value={values.message}
        onChange={set("message")}
      />
      <div>
        <Form.Text className="text-muted">Maximum 500 characters.</Form.Text>
      </div>
      <Button
        onChange={set("name", "email", "message")}
        id="formBtn"
        variant="primary"
        type="submit"
      >
        Submit!
      </Button>
    </Form>
  );
};

export default Contact;
