import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import HeroSec from "./components/HeroSec";
import Welcome from "./components/WelcomeSec";
import FactSec from "./components/Facilities";
import Special from "./components/SpecialAct";
import Testimonial from "./components/Testimonial";
import Luxroom from "./components/LuxRoom";
import BookStay from "./components/BookStay";
import Footer from "./components/Footer";

import OurHotel from "./pages/OurHotel";
import RoomsPage from "./pages/RoomsPage"

// This component represents your home page content
function HomePage() {
  return (
    <>
      {/* <Nav /> */}
      <HeroSec />
      <Welcome />
      <FactSec />
      <Special />
      <Testimonial />
      <Luxroom />
      {/* <BookStay /> */}
      {/* <Footer /> */}
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/OurHotel" element={<OurHotel />} />
        <Route path="/RoomsPage" element={<RoomsPage />} />
        {/* Optional: catch-all route for 404 */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <BookStay />
      <Footer />
    </>
  );
}

export default App;
