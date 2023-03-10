import React from "react";
import classes from "./contact-form.module.css";

const ContactForm: React.FC = () => {
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your e-mail</label>
            <input type="email" id="email" required></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" required></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your message</label>
            <textarea rows={5} id="message" required></textarea>
          </div>
        </div>
        <div className={classes.actions}>
          <button>Send message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
