import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import { useCart } from "../context/CartContext";

import productImg from "../assets/cart1.png";
import pay1 from "../assets/cart2.png";
import pay2 from "../assets/cart3.png";
import pay3 from "../assets/cart4.png";
import pay4 from "../assets/cart5.png";
import pay5 from "../assets/cart6.png";

export default function Checkout() {
  const navigate = useNavigate();

  // ✅ get cart summary + store payment choice globally for Payment page
  const { cartItem, totals, setPaymentMethod } = useCart();

  // local UI state
  const [payment, setPayment] = useState("secure"); // secure | cod

  const handleOrderNow = () => {
    // ✅ save selected payment method for payment page
    setPaymentMethod(payment);

    // ✅ go to payment page
    navigate("/payment");
  };

  return (
    <section className="checkout-page">
      <div className="checkout-wrap">
        {/* LEFT FORM */}
        <div className="checkout-left">
          <h2 className="checkout-title">Checkout</h2>

          {/* Contact */}
          <div className="checkout-block">
            <h3 className="checkout-h3">Contact</h3>
            <input className="checkout-input" placeholder="Email (for order updates)" />
            <label className="checkout-check">
              <input type="checkbox" />
              <span>Send me order updates, news and offers on Email and WhatsApp</span>
            </label>
          </div>

          {/* Delivery */}
          <div className="checkout-block">
            <h3 className="checkout-h3">Delivery</h3>

            <input className="checkout-input" placeholder="Country/Region" />

            <div className="checkout-row2">
              <input className="checkout-input" placeholder="First name" />
              <input className="checkout-input" placeholder="Last name" />
            </div>

            <input className="checkout-input" placeholder="Address" />
            <input className="checkout-input" placeholder="Apartment, suite (Optional)" />

            <div className="checkout-row3">
              <input className="checkout-input" placeholder="City" />
              <input className="checkout-input" placeholder="State" />
              <input className="checkout-input" placeholder="Pincode" />
            </div>

            <input className="checkout-input" placeholder="Phone" />

            <label className="checkout-check">
              <input type="checkbox" />
              <span>Save this information for next time</span>
            </label>
          </div>

          {/* Payment method */}
          <div className="checkout-block">
            <h3 className="checkout-h3">Choose your payment method</h3>

            <label className="checkout-pay">
              <input
                type="radio"
                name="pay"
                checked={payment === "secure"}
                onChange={() => {
                  setPayment("secure");
                  setPaymentMethod("secure"); // ✅ keep context updated too
                }}
              />
              <div className="checkout-pay-box">
                <div className="checkout-pay-text">
                  Secure transaction(UPI, Cards, Wallets, Net banking
                </div>
                <div className="checkout-pay-icons">
                  <img src={pay1} alt="pay" />
                  <img src={pay2} alt="pay" />
                  <img src={pay3} alt="pay" />
                  <img src={pay4} alt="pay" />
                  <img src={pay5} alt="pay" />
                </div>
              </div>
            </label>

            <label className="checkout-pay">
              <input
                type="radio"
                name="pay"
                checked={payment === "cod"}
                onChange={() => {
                  setPayment("cod");
                  setPaymentMethod("cod"); // ✅ keep context updated too
                }}
              />
              <div className="checkout-pay-box">
                <div className="checkout-pay-text">Cash on Delivery</div>
              </div>
            </label>
          </div>

          <button
            className="checkout-order-btn"
            type="button"
            onClick={handleOrderNow}
            disabled={cartItem.qty === 0}
            title={cartItem.qty === 0 ? "Cart is empty" : "Proceed to Payment"}
          >
            Order Now
          </button>
        </div>

        {/* RIGHT SUMMARY */}
        <aside className="checkout-right">
          <div className="checkout-summary">
            <h3 className="checkout-summary-title">Order summary</h3>

            <div className="checkout-item">
              <img className="checkout-item-img" src={productImg} alt="product" />
              <div className="checkout-item-info">
                <div className="checkout-item-name">
                  {cartItem.name}
                  <br />
                  {cartItem.subtitle}
                </div>

                <div className="checkout-item-meta">
                  <div>MRP: ₹ {cartItem.mrp.toLocaleString("en-IN")}</div>
                  <div>Quantity {cartItem.qty || 0}</div>
                  <div>Size: {cartItem.size}</div>
                </div>
              </div>
            </div>

            <div className="checkout-discount">
              <input className="checkout-discount-input" placeholder="Discount code or gift card" />
              <button className="checkout-apply-btn" type="button">
                Apply
              </button>
            </div>

            <div className="checkout-lines">
              <div className="checkout-line">
                <span>Sub total</span>
                <span>₹ {totals.subTotal.toLocaleString("en-IN")}</span>
              </div>

              <div className="checkout-hr" />

              <div className="checkout-line">
                <span>Shipping</span>
                <span className="checkout-ship-right">
                  <span className="checkout-ship-note">
                    Shipping to {cartItem.shippingTo}.
                  </span>
                  <span className="checkout-flat">
                    Flat rate : <b>₹{cartItem.shippingFlat}.00</b>
                  </span>
                </span>
              </div>

              <div className="checkout-hr" />

              <div className="checkout-line checkout-total">
                <span>Total</span>
                <span>₹ {totals.total.toLocaleString("en-IN")}</span>
              </div>

              <div className="checkout-includes">
                includes ₹251.62 CGST, ₹251.62 SGST
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}