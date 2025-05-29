import "./HeroSec.css";

function HeroSec() {
  return (
    <div className="HeroSection">
      <div className="hero-overlay" />
      <div className="hero-content fade-in">
        <div className="hero-main">
          <div className="hero-heading">
            <h1 className="hero-heading-bottom">
              Your Gateway to <br /> Unforgettable <br /> Memories{""}
            </h1>
          </div>
          <a href="#" className="book-button">
            <span className="text">Book Your Stay</span>
            <span className="round"></span>
          </a>

          {/* <a href="#rooms" className="book-btn">
            <span className="ring"></span>
            <span className="bookie">
              <p>Book Your Stay</p>
            </span>
          </a> */}
        </div>
        <span className="line"></span>
        <div className="hero-line">
          <p className="hero-desc">
            Experience exquisite accommodations, world-class amenities, and
            personalized service tailored to exceed your expectations.
          </p>
          <div className="hero-secondary-link">
            <a href="#" className="view-rooms-link">
              View Rooms <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSec;
