import Spinner from "../spinner/Spinner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactForm = ({ setIsSubmitted }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (data) => {
    setLoading(true);

    emailjs.send("service_5lstdbn", "template_4dnu1d6", data, "user_bayYOv2Si9YQE89FPlssu").then(
      (result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setLoading(false);
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong... please try again");
      }
    );
  };

  return (
    <div className="form-container">
      <div className="typewriter">
        <h1 className="title animate-title">Say hello</h1>
      </div>
      <form onSubmit={handleSubmit(sendEmail)}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="left-form">
              <label>
                Name*
                <input type="text" id="name" placeholder="Name" {...register("name", { required: true })} />
                {errors.name && <p className="required">Required</p>}
              </label>
              <label>
                Company
                <input
                  type="text"
                  id="company"
                  placeholder="Company"
                  {...register("company", { required: false })}
                />
              </label>
              <label>
                Email*
                <input type="email" id="email" placeholder="Email" {...register("email", { required: true })} />
                {errors.email && <p className="required">Required</p>}
              </label>
              <label>
                Mobile
                <input
                  type="number"
                  id="mobile"
                  placeholder="Mobile"
                  {...register("mobile", { required: false })}
                />
              </label>
            </div>
            <div className="right-form">
              <label>
                Message*
                <textarea
                  type="text"
                  id="message"
                  placeholder="Type your message..."
                  {...register("message", { required: true })}
                />
                {errors.message && <p className="required">Required</p>}
              </label>
              <input className="submit-btn" type="submit" value="Send Message" />
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
