import React from "react";
import Footer from "../components/Footer";
import "./ShopbyBrand.css";

const ShopbyBrand = () => {
  return (
    <div className="shop-by-brand">
      <h1>Shop by Brand</h1>
      <p>Select your favorite brand and browse their products.</p>

      <div className="brand-list">
        {/* Brand 1 */}
        <div className="brand-item">
          <img src="https://via.placeholder.com/150" alt="Brand 1" />
          <p>Brand 1</p>
          <button className="shop-now">Shop Now</button>
        </div>

        {/* Brand 2 */}
        <div className="brand-item">
          <img src="https://via.placeholder.com/150" alt="Brand 2" />
          <p>Brand 2</p>
          <button className="shop-now">Shop Now</button>
        </div>

        {/* Brand 3 */}
        <div className="brand-item">
          <img src="https://via.placeholder.com/150" alt="Brand 3" />
          <p>Brand 3</p>
          <button className="shop-now">Shop Now</button>
        </div>

        {/* Brand 4 */}
        <div className="brand-item">
          <img src="https://via.placeholder.com/150" alt="Brand 4" />
          <p>Brand 4</p>
          <button className="shop-now">Shop Now</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopbyBrand;