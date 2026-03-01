import React, { useState } from "react";
import "./Smallpets.css";

// Example images for the left side
import smallpet11 from "../assets/smallpet11.png";
import smallpet12 from "../assets/smallpet12.png";
import smallpet13 from "../assets/smallpet13.png";
import smallpet14 from "../assets/smallpet14.png";
import smallpet1 from "../assets/smallpet1.png";
import smallpet2 from "../assets/smallpet2.png";
import smallpet3 from "../assets/smallpet3.png";
import smallpet4 from "../assets/smallpet4.png";
import smallpet5 from "../assets/smallpet5.png";
import smallpet6 from "../assets/smallpet6.png";
import smallpet7 from "../assets/smallpet7.png";
import smallpet8 from "../assets/smallpet8.png";
import smallpet9 from "../assets/smallpet9.png";
import smallpet10 from "../assets/smallpet10.png";
// Example product data (9 products)
const products = [
  {
    img: smallpet2,
    description: "Turkey, Chickpea & Sweet Potato - Small Breed 2kg",
    rating: "⭐⭐⭐⭐",
    price: "₹ 1800",
    id: 1,
  },
  {
    img: smallpet3,
    description: "Cuddle Adult Small Pet Wet Foods - 100g",
    rating: "⭐⭐⭐⭐",
    price: "₹ 40",
    id: 2,
  },
  {
    img: smallpet4,
    description: "Kennel Kitchen Dry Small Pet Food Chicken Recipe - 2kg",
    rating: "⭐⭐⭐⭐",
    price: "₹ 390",
    id: 3,
  },
  {
    img: smallpet5,
    description: "Zoe Organic Small Breed Small Pet Food 2kg",
    rating: "⭐⭐⭐⭐",
    price: "₹ 1500",
    id: 4,
  },
  {
    img: smallpet6,
    description: "Cuddle Small Pet Food Wet Pouch 100g",
    rating: "⭐⭐⭐⭐",
    price: "₹ 50",
    id: 5,
  },
  {
    img: smallpet7,
    description: "Puppy Chicken & Rice - Small Breed 1kg",
    rating: "⭐⭐⭐⭐",
    price: "₹ 900",
    id: 6,
  },
  {
    img: smallpet8,
    description: "Chicken & Salmon Small Pet Food - 1kg",
    rating: "⭐⭐⭐⭐",
    price: "₹ 1000",
    id: 7,
  },
  {
    img: smallpet9,
    description: "Natural Small Pet Food with Gravy - 100g",
    rating: "⭐⭐⭐⭐",
    price: "₹ 60",
    id: 8,
  },
  {
    img: smallpet10,
    description: "High Protein Small Pet Food - 2kg",
    rating: "⭐⭐⭐⭐",
    price: "₹ 1200",
    id: 9,
  },
];

export default function Dog() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.description} added to cart!`);
  };

  return (
    <div className="dog-container">
      {/* Left side with images */}
      <div className="dog-left">
        <div className="dog-image">
          <img src={smallpet1} alt="Dog Image 1" />
         <h4 className="dog-image-title text-bold">Hamsters</h4>
          <p className="dog-image-description">Food and box</p>
        </div>
        <div className="dog-image">
          <img src={smallpet11} alt="Small Pet Image 2" />
         <h4 className="dog-image-title text-bold">Rabbits</h4>
          <p className="dog-image-description">Food and box</p>
        </div>
        <div className="dog-image">
          <img src={smallpet12} alt="Small Pet Image 3" />
          <h4 className="dog-image-title text-bold">Rat</h4>
          <p className="dog-image-description">Rats foods are available</p>
          
        </div>
        <div className="dog-image">
          <img src={smallpet13} alt="Small Pet Image 4" />
          <h4 className="dog-image-title text-bold">Fish</h4>
          <p className="dog-image-description">All types of fish food are available</p>
        </div>
        <div className="dog-image">
          <img src={smallpet14} alt="Small Pet Image 5" />
         <h4 className="dog-image-title text-bold">Guineo pigs</h4>
          <p className="dog-image-description">Guineo pig food and water bottle</p>
        </div>
      </div>

      {/* Right side with product cards */}
      <div className="dog-right">
        <h2>Small animals</h2>
        <div className="product-cards">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.description} className="product-img" />
              <div className="product-description">{product.description}</div>
              <div className="product-rating">{product.rating}</div>
              <div className="product-price">{product.price}</div>
              <button onClick={() => addToCart(product)} className="add-to-cart-btn">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}