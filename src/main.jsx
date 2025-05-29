// index.jsx or main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);




// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter, createBrowserRouter } from "react-router-dom";
// import App from "./App.jsx";
// import NotFoundPage from "./pages/NotFoundPage.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//     errorElement: <NotFoundPage />
//   },
//   {
//     path: "OurHotel",
//     element: <OurHotel />
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
