import React, { useState } from "react";
import Img2 from "../../assets/filtercoffee.jpeg"; // Ensure the image path is correct
import Img3 from "../../assets/coffeesyrup.png"; // Ensure you have an image for the syrup
import Img4 from "../../assets/rosemilk.jpg"; // Ensure you have an image for Rose Milk
import { FaStar, FaCartPlus, FaShoppingCart } from "react-icons/fa";

const OrderPage = () => {
  // State for quantity
  const [coffeeQuantity, setCoffeeQuantity] = useState(1);
  const [syrupQuantity, setSyrupQuantity] = useState(1);
  const [roseMilkQuantity, setRoseMilkQuantity] = useState(1);

  // Coffee Details (can later be fetched from an API)
  const coffeeDetails = {
    name: "Authentic South Indian Filter Coffee",
    description:
      "Experience the rich, bold flavor of authentic South Indian Filter Coffee. Made from carefully selected coffee beans roasted to perfection, this traditional coffee is brewed using the classic filter method, offering a smooth and aromatic taste. Perfectly balanced with the right amount of strength and flavor, it's a cup of coffee that brings the essence of South Indian coffee culture to your home.",
    price: 30, // Price in INR
    img: Img2,
    rating: 4.5, // Average rating
    reviews: 100, // Number of reviews
  };

  // Syrup Details
  const syrupDetails = {
    name: "Tanjore Degree Coffee Syrup",
    description:
      "The perfect syrup to enhance your coffee experience. Just add it to your coffee for that rich, aromatic taste. It's a must-have for coffee lovers looking for an extra kick!",
    price: 150, // Price in INR
    img: Img3,
    rating: 4.7, // Average rating
    reviews: 120, // Number of reviews
  };

  // Rose Milk Details
  const roseMilkDetails = {
    name: "Refreshing Rose Milk",
    description:
      "A classic favorite, our Rose Milk is made with the finest rose syrup and fresh milk, offering a sweet, aromatic, and creamy experience that will leave you refreshed and energized.",
    price: 100, // Price in INR
    img: Img4, // Add the image for Rose Milk here
    rating: 4.8, // Average rating
    reviews: 150, // Number of reviews
  };

  // Function to handle quantity change
  const handleCoffeeQuantityChange = (e) => {
    const newQuantity = Math.max(1, parseInt(e.target.value));
    setCoffeeQuantity(newQuantity);
  };

  const handleSyrupQuantityChange = (e) => {
    const newQuantity = Math.max(1, parseInt(e.target.value));
    setSyrupQuantity(newQuantity);
  };

  const handleRoseMilkQuantityChange = (e) => {
    const newQuantity = Math.max(1, parseInt(e.target.value));
    setRoseMilkQuantity(newQuantity);
  };

  return (
    <div className="py-10">
      <div className="container">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold font-cursive text-gray-800">
            Order Your Coffee, Syrup & Rose Milk
          </h1>
        </div>

        {/* Coffee Details Section */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
          <div className="w-full sm:w-[350px]">
            <img
              src={coffeeDetails.img}
              alt={coffeeDetails.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full sm:w-[500px]">
            <h2 className="text-3xl font-semibold">{coffeeDetails.name}</h2>
            <div className="flex items-center mt-2">
              {/* Rating Stars */}
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-yellow-500 ${
                    index < coffeeDetails.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-500">
                {coffeeDetails.rating} ({coffeeDetails.reviews} reviews)
              </span>
            </div>

            <p className="text-gray-700 mt-4">{coffeeDetails.description}</p>

            <div className="mt-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <span className="font-semibold text-lg">₹{coffeeDetails.price}</span>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-300 rounded-lg px-2">
                  <button
                    onClick={() => setCoffeeQuantity(Math.max(1, coffeeQuantity - 1))}
                    className="px-2 py-1 text-xl font-semibold bg-gray-200 rounded-l-lg"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={coffeeQuantity}
                    onChange={handleCoffeeQuantityChange}
                    className="w-12 text-center border-none focus:ring-0"
                  />
                  <button
                    onClick={() => setCoffeeQuantity(coffeeQuantity + 1)}
                    className="px-2 py-1 text-xl font-semibold bg-gray-200 rounded-r-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="mt-6 flex gap-4">
              {/* Add to Cart Button */}
              <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/80 flex items-center gap-2">
                <FaCartPlus /> Add to Cart
              </button>

              {/* Buy Now Button */}
              <button className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 flex items-center gap-2">
                <FaShoppingCart /> Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Syrup Details Section */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
          <div className="w-full sm:w-[350px]">
            <img
              src={syrupDetails.img}
              alt={syrupDetails.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full sm:w-[500px]">
            <h2 className="text-3xl font-semibold">{syrupDetails.name}</h2>
            <div className="flex items-center mt-2">
              {/* Rating Stars */}
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-yellow-500 ${
                    index < syrupDetails.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-500">
                {syrupDetails.rating} ({syrupDetails.reviews} reviews)
              </span>
            </div>

            <p className="text-gray-700 mt-4">{syrupDetails.description}</p>

            <div className="mt-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <span className="font-semibold text-lg">₹{syrupDetails.price}</span>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-300 rounded-lg px-2">
                  <button
                    onClick={() => setSyrupQuantity(Math.max(1, syrupQuantity - 1))}
                    className="px-2 py-1 text-xl font-semibold bg-gray-200 rounded-l-lg"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={syrupQuantity}
                    onChange={handleSyrupQuantityChange}
                    className="w-12 text-center border-none focus:ring-0"
                  />
                  <button
                    onClick={() => setSyrupQuantity(syrupQuantity + 1)}
                    className="px-2 py-1 text-xl font-semibold bg-gray-200 rounded-r-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="mt-6 flex gap-4">
              {/* Add to Cart Button */}
              <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/80 flex items-center gap-2">
                <FaCartPlus /> Add to Cart
              </button>

              {/* Buy Now Button */}
              <button className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 flex items-center gap-2">
                <FaShoppingCart /> Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Rose Milk Details Section */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
          <div className="w-full sm:w-[350px]">
            <img
              src={roseMilkDetails.img}
              alt={roseMilkDetails.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full sm:w-[500px]">
            <h2 className="text-3xl font-semibold">{roseMilkDetails.name}</h2>
            <div className="flex items-center mt-2">
              {/* Rating Stars */}
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={`text-yellow-500 ${
                    index < roseMilkDetails.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-500">
                {roseMilkDetails.rating} ({roseMilkDetails.reviews} reviews)
              </span>
            </div>

            <p className="text-gray-700 mt-4">{roseMilkDetails.description}</p>

            <div className="mt-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <span className="font-semibold text-lg">₹{roseMilkDetails.price}</span>
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-300 rounded-lg px-2">
                  <button
                    onClick={() => setRoseMilkQuantity(Math.max(1, roseMilkQuantity - 1))}
                    className="px-2 py-1 text-xl font-semibold bg-gray-200 rounded-l-lg"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={roseMilkQuantity}
                    onChange={handleRoseMilkQuantityChange}
                    className="w-12 text-center border-none focus:ring-0"
                  />
                  <button
                    onClick={() => setRoseMilkQuantity(roseMilkQuantity + 1)}
                    className="px-2 py-1 text-xl font-semibold bg-gray-200 rounded-r-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="mt-6 flex gap-4">
              {/* Add to Cart Button */}
              <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/80 flex items-center gap-2">
                <FaCartPlus /> Add to Cart
              </button>

              {/* Buy Now Button */}
              <button className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 flex items-center gap-2">
                <FaShoppingCart /> Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
