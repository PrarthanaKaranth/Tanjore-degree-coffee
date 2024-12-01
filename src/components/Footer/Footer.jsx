import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import FooterBg from "../../assets/website/coffee-footer.jpg";
import Logo from "../../assets/coffee_logo.png"; // Import the logo image

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Services", // Added Services link
    link: "/#services",
  },
  {
    title: "Order Now", // Added Order Now link
    link: "/order",
  },
];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          {/* Company details with logo */}
          <div className="py-8 px-4 flex flex-col items-center group">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive flex items-center gap-2 transition-transform duration-300 group-hover:translate-y-2"
            >
              {/* Logo next to the text */}
              <img
                src={Logo}
                alt="Logo"
                className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-110"
              />
              Tanjore Degree Coffee
            </a>
            {/* Caption with hover effect */}
            <p className="pt-4 text-center transition-transform duration-300 group-hover:translate-y-1">
              Sip the essence of Luxury!
            </p>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            {/* Quick Links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">Quick Links</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold sm:text-left mb-3">Contact Details</h1>
              <div>
                <p className="mb-3">Mail id: tanjoredegreecoffee@yahoo.in</p>
                <p className="mb-3">Ph No: +91 9003106755</p>
                <p className="mb-3">
                  Address: 364, 37th Street TVS Avenue, Anna Nagar West Extn.,
                  Chennai - 600101.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
