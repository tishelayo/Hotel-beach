// import React, { useState } from "react";
import { useState } from "react";
import "./OurHotel.css";
import image from "../assets/ourpageimg-1.jpg";
import imagee from "../assets/ourpageimg-2.jpg";

const data = [
  {
    title: "How can I make a reservation at your hotel?",
    content:
      "You can make a reservation directly through our website or by contacting our reservations team via phone or email. We also accept bookings through third-party booking platforms.",
  },
  {
    title: "What is your cancellation policy?",
    content:
      "Our cancellation policy varies depending on the type of reservation and the rate selected. Please refer to your booking confirmation or contact our reservations team for more information.",
  },
  {
    title: "What amenities are included with my stay?",
    content:
      "Our hotel offers a range of amenities, including complimentary Wi-Fi, access to our fitness center, concierge services, and daily housekeeping.",
  },
  {
    title: "Do you offer room service?",
    content:
      "Yes, we offer 24/7 room service for your convenience. Our menu is available in your room.",
  },
  {
    title: "What types of rooms do you offer?",
    content:
      "We offer a variety of rooms including standard, deluxe, suites, and penthouses to suit your needs.",
  },
  {
    title: "Do you offer smoking or non-smoking rooms?",
    content:
      "We offer both smoking and non-smoking rooms. Please specify your preference when booking.",
  },
];

function OurHotel() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  // Split data into two columns
  const mid = Math.ceil(data.length / 2);
  const leftColumn = data.slice(0, mid);
  const rightColumn = data.slice(mid);

  return (
    <section>
      <div className="our-sect">
        <div className="sec-overlay">
          <h1 className="sec-text">Our Hotel</h1>
        </div>
      </div>

      {/* content */}
      <div className="content">
        <p className="content-1">
          Welcome to <span className="spa">HotelBeach</span>, where every story
          begins with a journey, and every journey becomes an{" "}
          <span className="spa">unforgettable tale</span>. Our story is one of
          passion for travel, a love for exceptional destinations, and an
          unwavering commitment to providing you with the{" "}
          <span className="spa">ultimate hospitality experience.</span>
        </p>
        <div className="butt">
          <a href="#" className="link">
            <div className="link-1">
              <p>Reserve Luxury Today</p>
            </div>
            <div className="link-2">
              <i className="fa-solid fa-arrow-right "></i>
            </div>
          </a>
        </div>
      </div>

      {/* our story */}
      <div className="story">
        <div className="story-1">
          <div className="context">
            <h1>Our Story</h1>
            <p>
              Our story started decades ago, with a single boutique hotel
              nestled in a pristine coastal town. Over the years, we expanded
              our horizons, curating a collection of exceptional properties in
              some of the world's most sought-after destinations. Along the way,
              we've welcomed countless travelers, celebrated special moments,
              and created a legacy of warmth and hospitality.
            </p>
          </div>
          <img src={image} alt="image-1" className="img" />
        </div>
        <div className="story-2">
          <img src={imagee} alt="image-2" className="img" />
          <div className="context">
            <h1>Our Vision</h1>
            <p>
              At Paradise Hotel, our vision is to redefine the art of
              hospitality, setting new standards of excellence in the industry.
              We aspire to be more than just a place to stay; we aim to be a
              destination in itself, where every guest is embraced by the beauty
              of their surroundings and the warmth of our hospitality.
            </p>
          </div>
        </div>
      </div>

      {/* accordion section */}
      <div className="accord-1">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-columns">
          <div className="faq-col">
            {leftColumn.map((item, i) => (
              <div className="item" key={i}>
                <div className="title" onClick={() => toggle(i)}>
                  <h2>{item.title}</h2>
                  <span className="arrow-icon">&#x25BC;</span>
                </div>
                <div
                  className={selected === i ? "faq-answer show" : "faq-answer"}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
          <div className="faq-col">
            {rightColumn.map((item, i) => (
              <div className="item" key={i + mid}>
                <div className="title" onClick={() => toggle(i + mid)}>
                  <h2>{item.title}</h2>
                  <span className="arrow-icon">&#x25BC;</span>
                </div>
                <div
                  className={
                    selected === i + mid ? "faq-answer show" : "faq-answer"
                  }
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurHotel;
