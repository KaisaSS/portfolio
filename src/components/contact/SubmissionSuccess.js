import { Link } from "react-router-dom";

const SubmissionSuccess = () => {
  return (
    <div className="section success-message">
      <h1 className="title">
        <i className="fas fa-check-circle" /> Success
      </h1>
      <p>Thank you for your message!</p>
      <p>I will be in touch shortly</p>
      <p>
        Return to <Link to="/">HOME</Link>
      </p>
    </div>
  );
};

export default SubmissionSuccess;
