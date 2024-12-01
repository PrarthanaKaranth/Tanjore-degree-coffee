import React, { useState } from "react";
import Img2 from "../../assets/org_authentic_img.png"; // Image for "Authenticity"
import Img3 from "../../assets/org_quality_img.png"; // Image for "Quality"

const ServicesData = [
  {
    id: 1,
    img: Img2, // Image for "Authenticity"
    name: "Authenticity",
    description:
      "Our commitment to preserving the authentic taste and aroma of South Indian filter coffee sets us apart from the rest. With Tanjore Degree Coffee, you can enjoy the true essence of this beloved beverage in the comfort of your own home.",
    aosDelay: "300",
  },
  {
    id: 2,
    img: Img3, // Image for "Quality"
    name: "Quality",
    description:
      "At Tanjore Degree Coffee, we uphold uncompromising standards to deliver a superior coffee experience. From carefully selected beans to meticulous brewing techniques, we ensure that every cup meets our stringent quality benchmarks. Experience excellence with every sip of Tanjore Degree Coffee.",
    aosDelay: "500",
  },
];

const Services = () => {
  // Track which service descriptions are expanded
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img} // This will use the image for each service
                    alt={service.name}
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm">
                    {expanded[service.id]
                      ? service.description
                      : service.description.slice(0, 70) + "..."}

                  </p>
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="text-blue-500 hover:text-blue-700 focus:outline-none"
                  >
                    {expanded[service.id] ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
