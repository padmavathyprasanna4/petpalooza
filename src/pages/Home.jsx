import React from "react";
import "./Home.css";

// Import images for the original carousel
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";

// Import images for the new carousel
import home4 from "../assets/home4.png";
import home5 from "../assets/home5.png";
import home6 from "../assets/home6.png";
import home7 from "../assets/home7.png";
import home8 from "../assets/home8.png";
import home9 from "../assets/home9.png";
import home10 from "../assets/home10.png";

// Import images for the Top Rated Calming Products section
import home15 from "../assets/home15.png";  // Update with the correct image path
import home11 from "../assets/home11.png";
import home12 from "../assets/home12.png";
import home13 from "../assets/home13.png";
import home14 from "../assets/home14.png";
import home16 from "../assets/home16.png";  // New promotional image
import home17 from "../assets/home17.png";  // New promotional image

// Import images for the service cards
import home18 from "../assets/home18.png";  // Grooming image path
import dog13 from "../assets/dog13.png";  // Example image
import home19 from "../assets/home19.png";  // Example image
import home20 from "../assets/home20.png";  // Example image

// Swiper (React)
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";  // Removed Autoplay
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: { clickable: true },
    grabCursor: true,
    modules: [Pagination],
  };

  const petSwiperConfig = {
    slidesPerView: 5, // Display 5 images at a time
    spaceBetween: 20, // Spacing between slides
    loop: true,
    pagination: { clickable: false }, // Disabled pagination for the pet carousel
    navigation: true, // Keep navigation buttons if needed
    grabCursor: true,
    modules: [Pagination, Navigation],
  };

  return (
    <>
      {/* Original Project Slider */}
      <section className="container my-5">
        <Swiper className="mySwiper" {...swiperConfig}>
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="card project-card">
              <img
                src={home1} // Using the imported image
                className="project-img"
                alt="Muttukadu ECR"
              />
              <div className="project-info d-flex justify-content-between align-items-center"></div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="card project-card">
              <img
                src={home2} // Using the imported image
                className="project-img"
                alt="ECR Villas"
              />
              <div className="project-info d-flex justify-content-between align-items-center"></div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="card project-card">
              <img
                src={home3} // Using the imported image
                className="project-img"
                alt="Beachfront Properties"
              />
              <div className="project-info d-flex justify-content-between align-items-center"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Shop by Pet Title */}
      <section className="product-title-container text-center my-4">
        <h2>Shop by Pet</h2>
      </section>

      {/* New Pet Image Carousel */}
      <section className="product-slider-container">
        <Swiper {...petSwiperConfig}>
          {/* Dog */}
          <SwiperSlide>
            <div className="product-box">
              <img src={home4} alt="Dog" className="product-img" />
              <div className="pet-name">Dog</div>
            </div>
          </SwiperSlide>

          {/* Cat */}
          <SwiperSlide>
            <div className="product-box">
              <img src={home5} alt="Cat" className="product-img" />
              <div className="pet-name">Cat</div>
            </div>
          </SwiperSlide>

          {/* Hamsters */}
          <SwiperSlide>
            <div className="product-box">
              <img src={home6} alt="Hamsters" className="product-img" />
              <div className="pet-name">Hamsters</div>
            </div>
          </SwiperSlide>

          {/* Guinea Pigs */}
          <SwiperSlide>
            <div className="product-box">
              <img src={home7} alt="Guinea Pigs" className="product-img" />
              <div className="pet-name">Guinea Pigs</div>
            </div>
          </SwiperSlide>

          {/* Fish */}
          <SwiperSlide>
            <div className="product-box">
              <img src={home8} alt="Fish" className="product-img" />
              <div className="pet-name">Fish</div>
            </div>
          </SwiperSlide>

          {/* Rats */}
          <SwiperSlide>
            <div className="product-box">
              <img src={home9} alt="Rats" className="product-img" />
              <div className="pet-name">Rats</div>
            </div>
          </SwiperSlide>

          {/* Rabbits */}
          <SwiperSlide>
            <div className="product-box">
              <img src={home10} alt="Rabbits" className="product-img" />
              <div className="pet-name">Rabbits</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
            {/* Shop by Pet Title */}
      <section className="product-title-container text-center my-4">
        <h2>Top Rated Calming Products</h2>
      </section>

      {/* Top Rated Calming Products */}
      <section className="top-rated-calming">    
        <div className="calming-left">
          <img
            src={home15}
            alt="Stress-Free Summer"
            className="calming-image"
          />
          <p className="calming-subtitle">
            Stress-Free Summer<br />
            Keep your pup calm along all season
          </p>
        </div>
        <div className="calming-right">
          <div className="calming-cards">
            {/* Card 1 */}
            <div className="calming-card">
              <img src={home11} alt="Native Pet Calm Chews" />
              <p className="product-name">
                Native Pet Calm Chews for Dogs - Anxiety & Calming Supplement
              </p>
              <p className="product-price">₹ 299</p>
              <div className="product-rating">★★★★☆</div>
            </div>

            {/* Card 2 */}
            <div className="calming-card">
              <img src={home12} alt="Zesty Paws" />
              <p className="product-name">
                Zesty Paws Advanced Calming Bites for Dogs
              </p>
              <p className="product-price">₹ 309</p>
              <div className="product-rating">★★★☆☆</div>
            </div>

            {/* Card 3 */}
            <div className="calming-card">
              <img src={home13} alt="VetIQ Calming" />
              <p className="product-name">VetIQ Calming - 60 Count</p>
              <p className="product-price">₹ 459</p>
              <div className="product-rating">★★★★☆</div>
            </div>

            {/* Card 4 */}
            <div className="calming-card">
              <img src={home14} alt="Pet Honesty Hemp" />
              <p className="product-name">Pet Honesty Hemp Calming Soft Chews</p>
              <p className="product-price">₹ 599</p>
              <div className="product-rating">★★★☆☆</div>
            </div>
          </div>
        </div>
      </section>


       {/* Promotional Section: Store Door Savings */}
      <section className="promotional-section">
        <div className="promo-left">
          <h2>Store - Door savings with Autoship</h2>
          <p>
            SAVE 35% on first order plus stack limited-time deals<br /> on top
            Autoship-items, see terms.
          </p>
          <button className="promo-btn">Shop & Save</button>
        </div>
        <div className="promo-right">
          <img src={home16} alt="Promotional Image" className="promo-img" />
          <div className="save-badge">Save 35%</div>
        </div>
      </section>

       {/* Promotional Section */}
      <section className="promo-container">
        <div className="promo-notes">
          <p className="promo-text">
            Buy 1 blue wilderness dry dog food, 13-28lbs, <br />
            get 2 free wild cut Toppers*
          </p>
        </div>
        <div className="food-image">
          <img src={home17} alt="Dog food promotion" className="promo-img" />
        </div>
        <div className="promo-btn-container">
          <button className="food-btn">Shop Now</button>
        </div>
      </section>


      {/* Pet Services Section */}
      <section className="pet-services">
        <h2>Pet Services</h2>
        <p>Treats Rewards members earn points on every service</p>

        <div className="service-cards">
          {/* Card 1 - Grooming */}
          <div className="service-card">
            <img src={home18} alt="Grooming" className="service-img" />
            <button className="service-btn">Grooming</button>
            <div className="service-details">
              <p>
                Summer Salon Special<br />
                Bandana, toy & more plus 2X points
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <img src={dog13} alt="Training" className="service-img" />
            <button className="service-btn">Training</button>
            <div className="service-details">
              <p>
                Any 6-wk Training Class<br />
                ONLY $129 (that’s $21.50 a week)
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <img src={home19} alt="Pet Hotel" className="service-img" />
            <button className="service-btn">Pet Hotel</button>
            <div className="service-details">
              <p>
                Stay 4 nights<br />
                get the 5th night FREE
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="service-card">
            <img src={home20} alt="Diggy Day Camp" className="service-img" />
            <button className="service-btn">Diggy Day Camp</button>
            <div className="service-details">
              <p>
                New Camper Special<br />
                SAVE 50% on 1st day of play
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}