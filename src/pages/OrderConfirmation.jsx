import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderConfirmation.css";
import { useCart } from "../context/CartContext";

export default function OrderConfirmation() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const goHomeAndClear = () => {
    clearCart();           // ✅ clears cart items + badge
    navigate("/home");     // ✅ back to home
  };

  return (
    <section className="confirm-page">
      <div className="confirm-card">
        <h2 className="confirm-title">Thank you for your purchase!</h2>

        <p className="confirm-sub">
          Your order will be processed within 24 hours <br />
          during working days. we will notify you by email <br />
          once your has been shipped
        </p>

        <div className="confirm-bill">
          <div className="confirm-bill-title">Billing address</div>

          <div className="confirm-grid">
            <div className="confirm-left">
              <div>Name</div>
              <div>Address</div>
              <div></div>
              <div>Phone</div>
              <div>Email</div>
            </div>

            <div className="confirm-right">
              <div>Priya</div>
              <div>23/56, east street, chennai</div>
              <div>627800</div>
              <div>1234567890</div>
              <div>name@gmail.com</div>
            </div>
          </div>
        </div>

        <button className="confirm-back-btn" type="button" onClick={goHomeAndClear}>
          Back
        </button>
      </div>
    </section>
  );
}