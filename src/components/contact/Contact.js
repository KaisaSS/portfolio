import { useState } from "react";
import ContactForm from "./ContactForm";
import SubmissionSuccess from "./SubmissionSuccess";
import "./contact.css";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="container">
      {!isSubmitted ? <ContactForm setIsSubmitted={setIsSubmitted} /> : <SubmissionSuccess />}
    </div>
  );
};

export default Contact;
