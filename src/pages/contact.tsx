import ContactForm from "@/components/contact/contact-form";
import Head from "next/head";
import React from "react";

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Blog App - Contact</title>
        <meta name="description" content="Contact page of the blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactForm />
    </>
  );
};

export default Contact;
