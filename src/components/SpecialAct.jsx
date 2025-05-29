import "./SpecialAct.css";
import special1 from "../assets/special-1.jpg";
import special2 from "../assets/special-2.jpg";

function SpecialAct() {
  return (
    <section className="specialact-hero">
      <div className="specialact-content">
        <h1 className="specialact-heading">
          Special Activities
          <br />
          in our Hotel
        </h1>
        <p className="specialact-desc">
          Discover a realm where opulence meets tranquility, where every moment
          is a symphony of relaxation and refinement. Our sanctuary of luxury
          and comfort awaits your arrival.
        </p>
        <button className="specialact-cta">Learn More</button>
      </div>
      <div className="specialact-img-bg">
        <img src={special2} alt="background" className="img-bg" />
        <img src={special1} alt="foreground" className="img-foreground" />
      </div>
    </section>
  );
}

export default SpecialAct;
