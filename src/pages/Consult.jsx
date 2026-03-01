import React from "react";
import "./Consult.css";

import consultImg from "../assets/consultavet1.png";

export default function Consult() {
  const reviews = [
    {
      name: "Ajith Kumar Ak",
      date: "31/01/2025",
      text: "Very very good\nVery very good experience doctors\nConsolation",
    },
    {
      name: "p.",
      date: "24/06/2024",
      text: "good\nThe doctors are knowledgeable, compassionate,\nand really take the time to listen to my concerns.",
    },
    {
      name: "p.",
      date: "24/06/2024",
      text: "good\nThe doctors are knowledgeable, compassionate,\nand really take the time to listen to my concerns.",
    },
    {
      name: "Prem Singh",
      date: "12/04/2024",
      text: "Talking to the doctor, was like talking to a well\nwisher, very good at diagnosing the issue.",
    },
    {
      name: "priya",
      date: "31/05/2024",
      text: "fine\ngood doctor",
    },
    {
      name: "Aby Varghese",
      date: "05/06/2024",
      text: "Very Friendly\nVery Friendly . Was able to find issue very quickly",
    },
  ];

  return (
    <section className="consult-page">
      <div className="consult-top">
        {/* LEFT: Image + steps */}
        <div className="consult-left">
          <div className="consult-steps">
            <div className="consult-step">
              <div className="consult-step-icon">₹</div>
              <div className="consult-step-text">Pay &amp; book the consultant</div>
            </div>
            <div className="consult-step">
              <div className="consult-step-icon">🛡️</div>
              <div className="consult-step-text">
                Choose video or<br />Teleconsultation
              </div>
            </div>
            <div className="consult-step">
              <div className="consult-step-icon">🧾</div>
              <div className="consult-step-text">
                Receive prescription<br />after the call
              </div>
            </div>
          </div>

          <div className="consult-image-wrap">
            <img className="consult-image" src={consultImg} alt="Consult a vet" />
          </div>
        </div>

        {/* RIGHT: Services */}
        <aside className="consult-right">
          <div className="consult-services-head">
            <div>
              <h2 className="consult-services-title">Services</h2>
              <p className="consult-services-sub">
                Instant Consultation (10 AM to 7 PM)
              </p>
            </div>

            <div className="consult-rating">
              <span className="consult-rating-box">5★</span>
            </div>
          </div>

          <div className="consult-book-card">
            <button className="consult-book-btn">Book consultation</button>

            <div className="consult-price-row">
              <span className="consult-price">₹299</span>
              <span className="consult-mrp">MRP ₹499</span>
            </div>

            <div className="consult-offer">40% OFF</div>
          </div>

          <div className="consult-offers-row">
            <div className="consult-offers-left">
              <span className="consult-offers-icon">🏷️</span>
              <span>Bank offers and coupons</span>
            </div>
            <button className="consult-offers-link">Check offers ›</button>
          </div>

          <div className="consult-points">
            <div className="consult-point">
              <span className="consult-point-icon">ⓘ</span>
              <span>Currently, cash on delivery is not available on this product.</span>
            </div>
            <div className="consult-point">
              <span className="consult-point-icon">🚚</span>
              <span>Free delivery on orders above ₹599</span>
            </div>
          </div>

          <button className="consult-addcart">Add to cart</button>
        </aside>
      </div>

      <hr className="consult-divider" />

      {/* Reviews */}
      <div className="consult-reviews">
        <h3 className="consult-reviews-title">Customer Reviews</h3>

        <div className="consult-reviews-grid">
          {reviews.map((r, idx) => (
            <div className="consult-review-card" key={idx}>
              <div className="consult-review-top">
                <div className="consult-user">
                  <div className="consult-avatar">👤</div>
                  <div className="consult-user-meta">
                    <div className="consult-user-name">{r.name}</div>
                    <div className="consult-user-date">{r.date}</div>
                  </div>
                </div>
              </div>

              <div className="consult-stars">★★★★★</div>

              <p className="consult-review-text">
                {r.text.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>

              <div className="consult-review-bottom">
                <div className="consult-social">
                  <span>f</span>
                  <span>𝕏</span>
                </div>
                <div className="consult-actions">
                  <span>👍</span>
                  <span>0</span>
                  <span>👎</span>
                  <span>0</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}