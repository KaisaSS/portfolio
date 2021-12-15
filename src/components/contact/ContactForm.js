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
    <div>
      <h1 className="title">Say hello</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <p className="required">Required</p>}
        </label>
        <label>
          Last Name
          <input type="text" id="lastName" placeholder="Last Name" {...register("lastName", { required: true })} />
          {errors.lastName && <p className="required">Required</p>}
        </label>
        <label>
          Company
          <input type="text" id="company" placeholder="Company" {...register("company", { required: false })} />
        </label>
        <label>
          Email
          <input type="email" id="email" placeholder="Email" {...register("email", { required: true })} />
          {errors.email && <p className="required">Required</p>}
        </label>

        <label>
          Mobile
          <input type="number" id="mobile" placeholder="Mobile" {...register("mobile", { required: true })} />
          {errors.mobile && <p className="required">Required</p>}
        </label>
        <label>
          Message
          <textarea
            type="text"
            id="message"
            rows="6"
            placeholder="Type your message..."
            {...register("message", { required: true })}
          />
          {errors.message && <p className="required">Required</p>}
        </label>
        <input className="submit-btn" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;
