import "./Testimonial.css";
import trustpilot from "../assets/rating-test.png";
import { useEffect, useState } from "react";

const testimonialsData = [
  {
    text: "Our stay at HotelBeach was nothing short of extraordinary. From the moment we arrived, we were greeted with warmth and professionalism. The room was impeccably clean, the bed was incredibly comfortable,and the view from our window was breathtaking.",
    name: "John and Mary P. from New York",
  },
  {
    text: "The staff went above and beyond to make our anniversary special. We will definitely be coming back!",
    name: "Emily R. from London",
  },
  {
    text: "Beautiful location, excellent service, and delicious food. Highly recommended!",
    name: "Carlos M. from Madrid",
  },
  {
    text: "A perfect getaway for our family. The kids loved the pool and activities!",
    name: "The Smith Family from Toronto",
  },
];

function Testimonial() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 15000); // 20 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-hero">
      <div className="testimonial-overlay" />
      <div className="testimonial-content">
        <div className="testimonial-carousel">
          {testimonialsData.map((testimonial, idx) => (
            <div
              className={`testimonial-left testimonial-slide${
                idx === current ? " active" : ""
              }`}
              key={idx}
              style={{ display: idx === current ? "flex" : "none" }}
            >
              <div className="testimonial-quote">&#10099;&#10099;</div>
              <div className="testimonial-text"> {testimonial.text} </div>
              <div className="testimonial-author">{testimonial.name} </div>
            </div>
          ))}
        </div>
        <div className="testimonial-right">
          <img src={trustpilot} alt="Trustpilot" className="trustpilot-logo" />
          <div className="trustpilot-label">Top-Rated Excellence</div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
