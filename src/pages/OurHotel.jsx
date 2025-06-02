import React, { useState } from "react";
import "./OurHotel.css";
import image from "../assets/ourpageimg-1.jpg";
import imagee from "../assets/ourpageimg-2.jpg";

// const AccordionItem = ({ title, content }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => setIsOpen(!isOpen);

//   return (
//     <div className="accord">
//       <div className="accordion-item">
//         <div onClick={toggleAccordion} className="accordion-title">
//           <h3>{title}</h3>
//           <span>{isOpen ? "-" : "+"}</span>
//         </div>
//         {isOpen && <div className="accordion-content">{content}</div>}
//       </div>
      
//     </div>
//   );
// };

// const Accordion = () => {
//   const data = [
//     {
//       title: "How can I make a reservation at your hotel?",
//       content: "You can make a reservation directly through our website or by contacting our reservations team via phone or email. We also accept bookings through third-party booking platforms."
//     },
//     {
//       title: "What is your cancellation policy?",
//       content: "Our cancellation policy varies depending on the type of reservation and the rate selected. Please refer to your booking confirmation or contact our reservations team for more information.",
//     },
//     {
//       title: "What amenities are included with my stay?",
//       content: "Our hotel offers a range of amenities, including complimentary Wi-Fi, access to our fitness center, concierge services, and daily housekeeping.",
//     },
//   ];

//   return (
//     <div className="accordion">
//       {data.map((item, index) => (
//         <AccordionItem key={index} title={item.title} content={item.content} />
//       ))}
//     </div>
//   );
// };

function OurHotel() {
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
        <div className="story-1">
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
      {/* <Accordion /> */}
    </section>
  );
}

export default OurHotel;
