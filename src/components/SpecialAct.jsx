import "./SpecialAct.css";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

import special1 from "../assets/special-1.jpg";
import special2 from "../assets/special-2.jpg";

function SpecialAct() {
  return (
    <section className="specialact-hero">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="specialact-content"
      >
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
      </motion.div>
      <div className="specialact-img-bg">
        <img src={special2} alt="background" className="img-bg" />

        <img src={special1} alt="foreground" className="img-foreground" />
      </div>
    </section>
  );
}

export default SpecialAct;
