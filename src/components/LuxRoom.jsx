import "./LuxRoom.css";
import image1 from "../assets/luxroom1.jpg";
import image2 from "../assets/luxroom2.jpg";

function LuxRoom() {
  return (
    <section className="lux-sec">
      <div className="lux-container">
        <h2 className="lux-title">Our Luxury Rooms</h2>
        <button className="lux-btn">View All Rooms</button>
      </div>
      <div className="room-card">
        <a href="#" className="image1">
          <img src={image1} alt="Royal Penthouse" className="room-img" />
          <div className="room-overlay">
            <div className="room-info">
              <h2>Royal Penthouse</h2>
              <div className="room-icons">
                <span>🛏 3 King Beds</span>
                <span>👤 6 Person</span>
              </div>
            </div>
            <div className="room-hover">
              <p>Indulge in the pinnacle of luxury with our Royal Penthouse.</p>
              <span className="arrow">➔</span>
            </div>
          </div>
        </a>

        <a href="#" className="image1">
          <img src={image2} alt="Royal Penthouse" className="room-img" />
          <div className="room-overlay">
            <div className="room-info">
              <h2>Presidential Suite</h2>
              <div className="room-icons">
                <span>🛏 2 King Beds</span>
                <span>👤 4 Person</span>
              </div>
            </div>
            <div className="room-hover">
              <p>
                Experience unparalleled luxury in our Presidential Suite,
                designed for the discerning traveler.{" "}
              </p>
              <span className="arrow">➔</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default LuxRoom;