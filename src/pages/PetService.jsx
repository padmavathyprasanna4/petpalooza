import React from "react";
import "./PetService.css";

// HERO IMAGES
import leftDog from "../assets/petservice1.png";   // change if needed
import rightDog from "../assets/petservice2.png";  // change if needed
import logo from "../assets/logo.png";             // your PetPalooza logo

// PROMO IMAGE
import petservice3 from "../assets/petservice3.png";

const services = [
  { title: "Grooming", icon: "✂️" },
  { title: "PetsHotel", icon: "🏨" },
  { title: "Doggie Day Camp", icon: "🦴" },
  { title: "Training", icon: "🎓" },
  { title: "Veterinary Care", icon: "🩺" },
  { title: "Adoption", icon: "💚" },
];

export default function Petservice() {
  return (
    <div className="petservice-page">
      
      {/* ================= HERO SECTION ================= */}
      <section className="petservice-hero">
        <div className="petservice-heroRow">
          <img className="heroImg" src={leftDog} alt="Dog left" />
          <img className="heroImg" src={rightDog} alt="Dog right" />
        </div>

        <div className="heroLogoWrap">
          <div className="heroLogoCircle">
            <img className="heroLogo" src={logo} alt="PetPalooza logo" />
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="petservice-servicesSection">
        <div className="servicesCard">
          <div className="servicesGrid">
            {services.map((service) => (
              <div className="serviceItem" key={service.title}>
                <div className="serviceIcon">{service.icon}</div>
                <div className="serviceTitle">{service.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROMO SECTION ================= */}
      <section className="petservice-promos">
        
        {/* Green Header */}
        <div className="promoHeader">
          <h2>Pet Services</h2>
          <p>
            Whether it’s a pamper day, playdate, sleepover, training class or
            veterinary visit, we provide the best in pet services with highly
            trained, passionate associates. From our pet hotel & doggie day
            camp as an alternative to pet sitting, to our dog training and
            grooming as an alternative to DIY, our services are conveniently
            located inside most of our PetSmart stores.
          </p>
        </div>

        {/* Top Promo Row */}
        <div className="promoRow">
          
          {/* Left Blue Box */}
          <div className="promoBox promoBlue">
            <h3>Summer Special</h3>
            <p>
              Upgrade a salon visit or overnight stay with a strawberry ice
              cream spritz, $350+ in coupon savings & more
            </p>
            <button className="promoBtn promoBtnWhite">
              Book Now
            </button>
          </div>

          {/* Center Image */}
          <div className="promoImageWrap">
            <img
              src={petservice3}
              alt="Pet Promo"
              className="promoImage"
            />
          </div>

          {/* Right Green Box */}
          <div className="promoBox promoGreen">
            <h3>Monthly specials</h3>
            <p>
              Check out deals, offers & events in grooming, boarding,
              day camp & training
            </p>
            <button className="promoBtn promoBtnBlue">
              Get Details
            </button>
          </div>

        </div>

        {/* Bottom 3 Cards */}
        <div className="promoBottomGrid">

          <div className="bottomCard">
            <p>
              Yappy Hour <br />
              $5 OFF on salon walk-in services <br />
              Monday Thru Friday
            </p>
            <button className="bottomBtn">Learn more</button>
          </div>

          <div className="bottomCard">
            <p>
              ONLY $129 any 6-wk. Training Class <br />
              (that's $21.50 a class) valid thru 7/6^
            </p>
            <button className="bottomBtn">Enroll Now</button>
          </div>

          <div className="bottomCard">
            <p>
              Traveling without your pet this summer? <br />
              Suite upgrades and fun add-ons make their stay even more special.
            </p>
            <button className="bottomBtn">Book Stay</button>
          </div>

        </div>

      </section>

    </div>
  );
}
