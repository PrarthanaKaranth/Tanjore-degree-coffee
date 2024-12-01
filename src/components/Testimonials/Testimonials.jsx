import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Priya",
    text: "I've been a fan of Jayam rose milk & coffee for years, and their decoction maker has truly been a game-changer for me. As someone who values both authenticity and convenience, I am able to brew authentic South Indian filter coffee at home.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Rajesh",
    text: "Indulging in rose milk and filter coffee at this quaint café was an absolute delight. The flavors were rich, and the ambiance made it a perfect spot to relax and enjoy a cup of traditional South Indian coffee.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Meena",
    text: "The Jayam experience is all about the unique flavors and authenticity. From the first sip, I could tell the quality was exceptional. I highly recommend their filter coffee for any true coffee lover!",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Arjun",
    text: "Jayam’s coffee and rose milk have been a delightful discovery! Their filter coffee reminds me of my childhood visits to South India, and I am thrilled to enjoy the same taste at home now.",
    img: "https://picsum.photos/104/104",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Client Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.name}
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
