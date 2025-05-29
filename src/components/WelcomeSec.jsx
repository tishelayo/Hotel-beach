import "./WelcomeSec.css";
import welcomeImage from "../assets/welcome-1.png";
import welcomeImage1 from "../assets/welcome-2.png";

function WelcomeSec() {
  return (
    <section className="welcome-section">
      <div className="welcome">
        <div className="welcome-text  animate__animated animate__fadeInUp">
          <h1>
            Welcome to The World of <br className="desktop-only" /> Luxury and Comfort
          </h1>
          <p className="welcome-description">
            Experience a stay like no other, where indulgence knows no bounds
            and your every desire is our priority. Join us in redefining the art
            of hospitality, and let us pamper you in a world where luxury and
            comfort intertwine seamlessly. Welcome to a journey of elegance,
            welcome to your extraordinary escape.
          </p>
        </div>
      </div>
      <div className="welcome-images">
        <img src={welcomeImage} alt="Luxury Hotel Interior" className="image-1 animate__animated animate__slideInLeft" />
        <img src={welcomeImage1} alt="hotel-interior" className="image-2 animate__animated animate__slideInRight" />
      </div>
    </section>
  );
}

export default WelcomeSec;
 