import { useForm } from "react-hook-form";

const ContactForm = ({ setIsSubmitted }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = () => {
    console.log("emailing");
  };

  const onSubmit = (data) => {
    console.log(data);
    sendEmail();
    setIsSubmitted(true);
  };

  return (
    <div className="form-container">
      <h1 className="title">Say hello</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="left-form">
          <label>
            Name*
            <input type="text" id="name" placeholder="Name" {...register("name", { required: true })} />
            {errors.name && <p className="required">Required</p>}
          </label>

          <label>
            Company
            <input type="text" id="company" placeholder="Company" {...register("company", { required: false })} />
          </label>
          <label>
            Email*
            <input type="email" id="email" placeholder="Email" {...register("email", { required: true })} />
            {errors.email && <p className="required">Required</p>}
          </label>
          <label>
            Mobile
            <input type="number" id="mobile" placeholder="Mobile" {...register("mobile", { required: false })} />
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
      </form>
    </div>
  );
};

export default ContactForm;
