import "./Facilities.css";
import facto1 from "../assets/Facilities-1.png";
import facto2 from "../assets/Facilities-2.png";
import facto3 from "../assets/Facilities-3.png";
import facto4 from "../assets/Facilities-4.png";
import svg1 from "../assets/cullinary.svg"

const facilitiesData = [
  { img: facto1, label: "Meeting and Event space", svg: svg1 },
  { img: facto2, label: "Dining and Culinary options", svg: svg1 },
  { img: facto3, label: "Luxurious Rooms", svg: svg1 },
  { img: facto4, label: "Swimming Pool", svg: svg1 },
];

function Facilities() {
  return (
    <section className="fact" id="facilities">
      <div className="facilities-container">
        <div className="facilities-title">
          <h1>
            Facilities and <br /> Services
          </h1>
        </div>
        <div className="facilities-description">
          <p>
            Discover a realm where opulence meets tranquility, where every
            moment is a symphony of relaxation and refinement. Our sanctuary of
            luxury and comfort awaits your arrival.
          </p>
        </div>
      </div>
      <div className="facilities-carousel-wrapper">
        <div className="facilities-carousel">
          {[...facilitiesData, ...facilitiesData].map((facility, idx) => (
            <div className="facilities-image-card" key={idx}>
              <img
                src={facility.img}
                alt={facility.label}
                className="facilities-main-image"
              />
              <img src={facility.svg} alt="Facility icon" className="facilities-icon" />
              {/* <span className="facilities-icon">{facility.svg} &#128716;</span> */}
              <div className="facilities-label">{facility.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Facilities;
