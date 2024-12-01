import React, { useState, useEffect } from "react";
import BannerImg from "../../assets/coffee-white.jpeg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import BgImg from "../../assets/website/coffee-texture.jpg";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  position: "relative",
};

const Banner = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Tracking the cursor position
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  // Add event listener for mouse movement
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate faster movement based on cursor position
  const getMovementStyle = (offset) => {
    return {
      transform: `translate(${(cursorPosition.x - window.innerWidth / 2) / offset}px, ${
        (cursorPosition.y - window.innerHeight / 2) / offset
      }px)`,
    };
  };

  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        {/* Dark Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 relative z-10">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image Section */}
              <div
                data-aos="zoom-in"
                className="transition-transform duration-300"
                style={getMovementStyle(8)} // Increased movement speed by lowering the offset
              >
                <img
                  src={BannerImg}
                  alt="coffee img"
                  className="max-w-full w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]"
                  style={{ width: "100%", maxWidth: "600px", height: "auto" }} // Adjusted for larger size
                />
              </div>

              {/* Text Content Section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-4xl sm:text-5xl font-bold font-cursive text-white shadow-md transition-transform duration-300"
                  style={getMovementStyle(10)} // Increased movement speed
                >
                  Welcome to Tanjore
                </h1>

                <p
                  data-aos="fade-up"
                  className="text-lg text-gray-300 tracking-wide leading-7 mb-6"
                  style={getMovementStyle(12)} // Increased movement speed
                >
                  In January 22, 2013, Shri C. Saminathan, with over 35 years of
                  experience in the FMCG industry, laid the foundation for his
                  coffee decoction venture under the brand name 'TANJORE Degree
                  Coffee'.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div
                      data-aos="fade-up"
                      className="flex items-center gap-3 transition-transform duration-300"
                      style={getMovementStyle(7)} // Increased movement speed
                    >
                      <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 transform hover:scale-110" />
                      <span className="text-white">Filter Coffee</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3 transition-transform duration-300"
                      style={getMovementStyle(7)} // Increased movement speed
                    >
                      <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 transform hover:scale-110" />
                      <span className="text-white">Coffee Syrup</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3 transition-transform duration-300"
                      style={getMovementStyle(7)} // Increased movement speed
                    >
                      <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100 transform hover:scale-110" />
                      <span className="text-white">Rose Milk</span>
                    </div>
                  </div>

                  {/* Coffee Lover Section */}
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                    style={getMovementStyle(10)} // Increased movement speed
                  >
                    <h1 className="text-2xl font-semibold font-cursive text-white">
                      Coffee Lover
                    </h1>
                    <p className="text-sm text-gray-300">
                      Much like writing code, brewing the perfect cup of coffee
                      requires patience, precision, and a dash of passion to
                      create a comforting blend of flavors.
                    </p>
                  </div>
                </div>

                {/* Call to Action Button */}
                <div data-aos="fade-up" data-aos-delay="600">
                  <a
                    href="#learn-more"
                    className="text-xl bg-primary py-3 px-6 rounded-md text-white font-semibold transition-transform duration-300 transform hover:scale-110 hover:translate-y-2"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
