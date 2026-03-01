import React, { useState } from "react";
import "./Cat.css";

// Example images for the left side
import dog11 from "../assets/dog11.png";
import dog12 from "../assets/dog12.png";
import dog13 from "../assets/dog13.png";
import cat14 from "../assets/cat14.png";
import dog1 from "../assets/dog1.png";
import cat2 from "../assets/cat2.png";
import cat3 from "../assets/cat3.png";
import cat4 from "../assets/cat4.png";
import cat5 from "../assets/cat5.png";
import cat6 from "../assets/cat6.png";
import cat7 from "../assets/cat7.png";
import cat8 from "../assets/cat8.png";
import cat9 from "../assets/cat9.png";
import cat10 from "../assets/cat10.png";
// Example product data (9 products)
const products = [
  {
    img: cat2,
    description: "Turkey, Chickpea & Sweet Potato - Small Breed 2kg",
    rating: "⭐⭐⭐⭐",
    price: "₹ 1800",
    id: 1,
  },
  {
    img: cat3,
    description: "Cuddle Adult Cat Wet Foods - 100g",
    rating: "⭐⭐⭐⭐",
    price: "₹ 40",
    id: 2,
  },
  {
    img: cat4,
    description: "Kennel Kitchen Dry Cat Food Chicken Recipe - 2kg",
    rating: "⭐⭐⭐⭐",
    price: "₹ 390",
    id: 3,
  },
  {
    img: cat5,
    description: "Zoe Organic Small Breed Cat Food 2kg",
    rating: "⭐⭐⭐⭐",
    price: "₹ 1500",
    id: 4,
  },
  {
    img: cat6,
    description: "Cuddle Cat Food Wet Pouch 100g",
    rating: "⭐⭐⭐⭐",
    price: "₹ 50",
    id: 5,
  },
  {
    img: cat7,
    description: "Puppy Chicken & Rice - Small Breed 1kg",
    rating: "⭐⭐⭐⭐",
    price: "₹ 900",
    id: 6,
  },
  {
    img: cat8,
    description: "Chicken & Salmon Cat Food - 1kg",
    rating: "⭐⭐⭐⭐",
    price: "₹ 1000",
    id: 7,
  },
  {
    img: cat9,
    description: "Natural Cat Food with Gravy - 100g",
    rating: "⭐⭐⭐⭐",
    price: "₹ 60",
    id: 8,
  },
  {
    img: cat10,
    description: "High Protein Cat Food - 2kg",
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
          <img src={dog1} alt="Dog Image 1" />
          <h4 className="dog-image-title text-bold">Stress-Free Summer</h4>
          <p className="dog-image-description">Keep your pup calm along all seasons</p>
        </div>
        <div className="dog-image">
          <img src={dog11} alt="Dog Image 2" />
         <h4 className="dog-image-title text-bold">Toys</h4>
          <p className="dog-image-description">All types of toys are available</p>
        </div>
        <div className="dog-image">
          <img src={dog12} alt="Dog Image 3" />
          <h4 className="dog-image-title text-bold">Dog & cat Camb</h4>
          <p className="dog-image-description">Taking them on a road trip, visiting dog-friendly beaches</p>
        </div>
        <div className="dog-image">
          <img src={dog13} alt="Dog Image 4" />
         <h4 className="dog-image-title text-bold">Training</h4>
          <p className="dog-image-description">All types of training are available</p>
        </div>
        <div className="dog-image">
          <img src={cat14} alt="Cat Image 5" />
          <h4 className="dog-image-title text-bold">Natural Food</h4>
          <p className="dog-image-description">Make your dog more healthy</p>  
        </div>
      </div>

      {/* Right side with product cards */}
      <div className="dog-right">
        <h2>Cat</h2>
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