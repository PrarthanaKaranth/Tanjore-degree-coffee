import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components from react-router-dom
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
import OrderPage from "./components/OrderPage/OrderPage.jsx"; // Import the OrderPage component
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router> {/* Wrap the entire app in BrowserRouter to enable routing */}
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
        <Navbar /> {/* This Navbar will be present across all pages */}
        
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<><Hero /><Services /><Banner /><AppStore /><Testimonials /><Footer /></>} /> {/* Home Route */}
          <Route path="/order" element={<OrderPage />} /> {/* Order Route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
