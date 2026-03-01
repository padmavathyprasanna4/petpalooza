import React from "react";
import "./Dog.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Example images for the left side
import dog11 from "../assets/dog11.png";
import dog12 from "../assets/dog12.png";
import dog13 from "../assets/dog13.png";
import dog14 from "../assets/dog14.png";
import dog1 from "../assets/dog1.png";
import dog2 from "../assets/dog2.png";
import dog3 from "../assets/dog3.png";
import dog4 from "../assets/dog4.png";
import dog5 from "../assets/dog5.png";
import dog6 from "../assets/dog6.png";
import dog7 from "../assets/dog7.png";
import dog8 from "../assets/dog8.png";
import dog9 from "../assets/dog9.png";
import dog10 from "../assets/dog10.png";

// Example product data (9 products)
const products = [
  {
    img: dog2,
    description: "Turkey, Chickpea & Sweet Potato - Small Breed 2kg",
    rating: "⭐⭐⭐⭐",
    price: "₹ 1800",
    id: 1,
  },
  {
    img: dog3,
    description: "Cuddle Adult Dog Wet Foods - 100g",
    rating: "⭐⭐⭐⭐",
    price: "₹ 40",
    id: 2,
  },
  {
    img: dog4,
    description: "Kennel Kitchen Dry Dog Food Chicken Recipe - 2kg",
    rating: "⭐⭐⭐⭐",
    price: "₹ 390",
    id: 3,
  },
  {
    img: dog5,
    description: "Zoe Organic Small Breed Dog Food 2kg",
    rating: "⭐⭐⭐⭐",
    price: "₹ 1500",
    id: 4,
  },
  {
    img: dog6,
    description: "Cuddle Dog Food Wet Pouch 100g",
    rating: "⭐⭐⭐⭐",
    price: "₹ 50",
    id: 5,
  },
  {
    img: dog7,
    description: "Puppy Chicken & Rice - Small Breed 1kg",
    rating: "⭐⭐⭐⭐",
    price: "₹ 900",
    id: 6,
  },
  {
    img: dog8,
    description: "Chicken & Salmon Dog Food - 1kg",
    rating: "⭐⭐⭐⭐",
    price: "₹ 1000",
    id: 7,
  },
  {
    img: dog9,
    description: "Natural Dog Food with Gravy - 100g",
    rating: "⭐⭐⭐⭐",
    price: "₹ 60",
    id: 8,
  },
  {
    img: dog10,
    description: "High Protein Dog Food - 2kg",
    rating: "⭐⭐⭐⭐",
    price: "₹ 1200",
    id: 9,
  },
];

export default function Dog() {
  const navigate = useNavigate();

  // ✅ Use cart context (instead of local cart state)
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product); // ✅ add dynamically
    alert(`${product.description} added to cart!`);
    navigate("/cart"); // ✅ go to cart page
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
          <p className="dog-image-description">
            Taking them on a road trip, visiting dog-friendly beaches
          </p>
        </div>
        <div className="dog-image">
          <img src={dog13} alt="Dog Image 4" />
          <h4 className="dog-image-title text-bold">Training</h4>
          <p className="dog-image-description">All types of training are available</p>
        </div>
        <div className="dog-image">
          <img src={dog14} alt="Dog Image 5" />
          <h4 className="dog-image-title text-bold">Natural Food</h4>
          <p className="dog-image-description">Make your dog more healthy</p>
        </div>
      </div>

      {/* Right side with product cards */}
      <div className="dog-right">
        <h2>Dog</h2>
        <div className="product-cards">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.description} className="product-img" />
              <div className="product-description">{product.description}</div>
              <div className="product-rating">{product.rating}</div>
              <div className="product-price">{product.price}</div>

              <button
                onClick={() => handleAddToCart(product)}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}