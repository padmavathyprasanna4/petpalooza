import React from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";
import { useCart } from "../context/CartContext";

export default function Payment() {
  const navigate = useNavigate();
  const { paymentMethod, cartItem, totals } = useCart();

  const isCOD = paymentMethod === "cod";

  return (
    <section className="payment-page">
      <div className="payment-card">
        <h2 className="payment-title">Payment</h2>

        <div className="payment-summary">
          <div className="payment-row">
            <span>Item</span>
            <span>{cartItem.subtitle}</span>
          </div>
          <div className="payment-row">
            <span>Qty</span>
            <span>{cartItem.qty}</span>
          </div>
          <div className="payment-row">
            <span>Total</span>
            <span>₹ {totals.total.toLocaleString("en-IN")}</span>
          </div>
        </div>

        <div className="payment-method-box">
          <div className="payment-method-title">Selected method</div>
          <div className="payment-method-value">
            {isCOD ? "Cash on Delivery" : "Secure Payment (UPI / Card / Wallet / Netbanking)"}
          </div>
        </div>

        {!isCOD && (
          <div className="payment-form">
            <input className="payment-input" placeholder="UPI ID (example@upi)" />
            <div className="payment-or">OR</div>
            <input className="payment-input" placeholder="Card Number" />
            <div className="payment-mini">
              <input className="payment-input" placeholder="MM/YY" />
              <input className="payment-input" placeholder="CVV" />
            </div>
          </div>
        )}

        <button
          className="payment-paybtn"
          type="button"
          onClick={() => navigate("/order-confirmation")}
          disabled={cartItem.qty === 0}
        >
          {isCOD ? "Place Order" : "Pay Now"}
        </button>

        <button className="payment-back" type="button" onClick={() => navigate("/checkout")}>
          Back to Checkout
        </button>
      </div>
    </section>
  );
}