import "./banner.css";

const Banner = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="description">
          <p>Hello!</p>
          <h1>I am Kaisa</h1>
          <p>a web developer</p>
        </div>
      </div>
      <div className="section">
        <div className="triangles">
          <div className="triangle triangle-up">
            <div className="triangle-up-front"></div>
            <div className="triangle-up-back"></div>
          </div>
          <div className="triangle triangle-down">
            <div className="triangle-down-front"></div>
            <div className="triangle-down-back"></div>
          </div>
        </div>
        <div className="quote-box">
          <p>
            <i className="fas fa-quote-left fa-2x" /> Love what you do,
          </p>
          <p>Do what you love</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
