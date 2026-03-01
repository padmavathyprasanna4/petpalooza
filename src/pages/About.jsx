import React from "react";
import "./About.css";
import aboutImage from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import about4 from "../assets/about4.png";
import about5 from "../assets/about5.png";

function About() {
  return (
    <>
      {/* Existing Hero Section */}
      <div className="about-container">
        <img src={aboutImage} alt="About Petpalooza" className="about-image" />
        <div className="about-overlay"></div>

        <div className="about-content">
          <div className="red-line"></div>
          <h1>Our Mission</h1>
          <p>
            Every day with every connection, Petpalooza passionate associates
            help bring pet parents closer to their pets so they can live more
            fulfilled life.
          </p>
        </div>
      </div>

      {/* ✅ NEW GREEN SECTION ADDED BELOW */}
      <div className="anything-section">
        <h2>ANYTHING for PETS®</h2>
        <p>
          We love pets, and we believe loving pets makes us better people.
          That’s one of the many reasons we do Anything for Pets – because they
          will do anything for us. Anything for Pets is our commitment to pet
          parents, it’s how we do business and who we are as pet lovers. As the
          leader in pet care, we make our decisions based on how we can bring
          pet parents closer to their pets. From dressing in matching costumes,
          to finding the perfect treats and toys, we innovate solutions and
          unique, must-have products to create more ways for pets to be a part
          of our everyday lives. Our trusted and skilled associates share the
          same passion for pets as the pet parents we serve, helping pet parents
          choose from our offering of the largest variety of pet products and
          services in one convenient place – in your neighborhood or the palm
          of your hand. With more than 1,660 locations in North America, we
          pride ourselves on our unrivaled variety of pet food, treats, toys,
          and apparel, as well as our services including training, grooming,
          boarding and more.
        </p>
      </div>

      {/* ================= NEW CARD SECTION ================= */}

<div className="about-cards-section">
  <div className="about-card">
    <img src={about2} alt="Our Story" />
    <button>Our story</button>
  </div>

  <div className="about-card">
    <img src={about3} alt="Media Resources" />
    <button>Media resources</button>
  </div>

  <div className="about-card">
    <img src={about4} alt="Charities" />
    <button>Charities</button>
  </div>
</div>


{/* ================= LOVE PETS SECTION ================= */}

<div className="love-section">
  <div className="love-text">
    <h3>10 Reasons to Love #LifeAtPetSmart</h3>
    <p>
      Since 2020, we’ve committed over $250 million to increased wages and
      benefits to help ensure the health, safety, and well-being of associates.
      Our associates come to PetSmart because they love pets, and we want them
      to stay because they feel a deep sense of belonging and support in building
      a future for themselves here. Here are just ten reasons why
      #LifeAtPetSmart is so doggone great!
    </p>
  </div>

  <div className="love-image">
    <img src={about5} alt="Love Pets" />
  </div>
</div>
    </>
  );
}

export default About;