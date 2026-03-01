import React from "react";
import { useNavigate } from "react-router-dom";
import "./Consultavet.css";

// ✅ Update path if your images are in a different folder
import banner from "../assets/consultavet1.png";

import icon1 from "../assets/consultavet2.png";
import icon2 from "../assets/consultavet3.png";
import icon3 from "../assets/consultavet4.png";
import icon4 from "../assets/consultavet5.png";
import icon5 from "../assets/consultavet6.png";
import icon6 from "../assets/consultavet7.png";
import icon7 from "../assets/consultavet8.png";
import icon8 from "../assets/consultavet9.png";
import consultavet10 from "../assets/consultavet10.png";
import vet1 from "../assets/consultavet11.png";
import vet2 from "../assets/consultavet12.png";
import vet3 from "../assets/consultavet13.png";

export default function Consultavet() {
  const navigate = useNavigate();

  const cards = [
    { img: icon1, label: "General\nCheckup" },
    { img: icon2, label: "Skin\nissues" },
    { img: icon3, label: "Digestive\nissues" },
    { img: icon4, label: "Paws &\nLimbs" },
    { img: icon5, label: "Dental\nissues" },
    { img: icon6, label: "Ear\nissues" },
    { img: icon7, label: "Eye\nissues" },
    { img: icon8, label: "Nutrition" },
  ];

  return (
    <section className="consultavet-page">
      {/* Banner */}
      <div className="consultavet-banner">
        <img className="consultavet-banner-img" src={banner} alt="Consult a vet" />

        {/* Text box + button (right side like your image) */}
        <div className="consultavet-overlay">
          <p className="consultavet-overlay-text">
            Instant and complete vet care
            <br />
            Wherever you are
            <br />
            At only <b>299</b>, get end-to-end
            <br />
            support from our vets
          </p>

          <button
            className="consultavet-btn"
            onClick={() => navigate("/consult")}
          >
            Consult Now
          </button>
        </div>
      </div>

      {/* Blue strip */}
      <div className="consultavet-strip">
        <div className="consultavet-strip-item">
          <span className="consultavet-strip-icon">🛡️</span>
          <span>Verified Doctors</span>
        </div>

        <div className="consultavet-strip-item">
          <span className="consultavet-strip-icon">👨‍⚕️</span>
          <span>Free follow-up</span>
        </div>

        <div className="consultavet-strip-item">
          <span className="consultavet-strip-icon">🚚</span>
          <span>Medicine delivery</span>
        </div>
      </div>

      {/* 8 round cards */}
      <div className="consultavet-cards">
        {cards.map((c, idx) => (
          <div className="consultavet-card" key={idx}>
            <div className="consultavet-circle">
              <img className="consultavet-icon" src={c.img} alt={c.label} />
            </div>
            <p className="consultavet-label">
              {c.label.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>

      {/* ===== Overlapping Promo Section ===== */}
<div className="consultavet-promo-wrapper">
  
  {/* White Top */}
  <div className="consultavet-promo-top"></div>

  {/* Green Bottom */}
  <div className="consultavet-promo-bottom"></div>

  {/* Center Image Card */}
  <div className="consultavet-promo-card">
    <img
      src={consultavet10}
      alt="Stress-free pet care"
      className="consultavet-promo-img"
    />
  </div>

  {/* Text + Button (inside green area) */}
  <div className="consultavet-promo-content">
    <p className="consultavet-promo-text">
      Get Stress-Free Pet Care from the comfort of your home
    </p>

    <button
      className="consultavet-promo-btn"
      onClick={() => navigate("/consult")}
    >
      Consult Now
    </button>
  </div>
</div>

{/* ===== Expert Vets Section (Below Green Section) ===== */}
<div className="consultavet-vets-section">
  <h2 className="consultavet-vets-title">Access our expert vets from anywhere</h2>

  <div className="consultavet-vets-grid">
    <div className="consultavet-vet-card">
      <div className="consultavet-vet-avatar">
        <img src={vet1} alt="Dr. Ashitha Suresh" />
      </div>
      <p className="consultavet-vet-text">
        Dr. Ashitha Suresh <br />
        Gynaecology &amp; Obstetrics | 8+ Years <br />
        Veterinarian, MVSc PhD
      </p>
    </div>

    <div className="consultavet-vet-card">
      <div className="consultavet-vet-avatar">
        <img src={vet2} alt="Dr. Rashmi S" />
      </div>
      <p className="consultavet-vet-text">
        Dr. Rashmi S <br />
        Gynaecology &amp; Obstetrics | 6+ Years <br />
        MVSc PhD
      </p>
    </div>

    <div className="consultavet-vet-card">
      <div className="consultavet-vet-avatar">
        <img src={vet3} alt="Dr. Anu GS" />
      </div>
      <p className="consultavet-vet-text">
        Dr. Anu GS <br />
        General Medicine | 3+ Years <br />
        Associate Veterinarian, MVSc
      </p>
    </div>
  </div>
</div>

    </section>
  );
}