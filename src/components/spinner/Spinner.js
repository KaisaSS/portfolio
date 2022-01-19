import "./spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p className="spinner-text">Sending...</p>
    </div>
  );
};

export default Spinner;
