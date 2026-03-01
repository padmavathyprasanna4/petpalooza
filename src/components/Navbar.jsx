import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.png";
// Brand Images
import brand1 from "../assets/brands1.png";
import brand2 from "../assets/brands2.png";
import brand3 from "../assets/brands3.png";
import brand4 from "../assets/brands4.png";
import brand5 from "../assets/brands5.png";
import brand6 from "../assets/brands6.png";
import brand7 from "../assets/brands7.png";
import brand8 from "../assets/brands8.png";
import brand9 from "../assets/brands9.png";
import brand10 from "../assets/brands10.png";
import brand11 from "../assets/brands11.png";
import brand12 from "../assets/brands12.png";

import "./Navbar.css";


const Navbar = () => {
  const { cartQty } = useCart();

  const [showDropdown, setShowDropdown] = useState({
    dog: false,
    cat: false,
    smallPets: false,
    petService: false,
    shopByBrand: false,
    shopByBreed: false,
  });

  const [activeLink, setActiveLink] = useState("home");

  // ✅ only one open at a time
  const toggleDropdown = (category) => {
    setShowDropdown((prev) => ({
      dog: false,
      cat: false,
      smallPets: false,
      petService: false,
      shopByBrand: false,
      shopByBreed: false,
      [category]: !prev[category],
    }));
  };

  const closeAllDropdowns = () => {
    setShowDropdown({
      dog: false,
      cat: false,
      smallPets: false,
      petService: false,
      shopByBrand: false,
      shopByBreed: false,
    });
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeAllDropdowns();
  };

  return (
    <nav className="navbar">
      {/* First Line */}
      <div className="navbar-top">
        <div className="navbar-left">
          <img className="logo" src={logo} alt="PetPalooza" />
        </div>

        <div className="navbar-center">
          <input type="text" className="search-bar" placeholder="Search for products" />
        </div>

        <div className="navbar-right">
          <ul className="navbar-links">
            <li>
              <Link
                to="/home"
                onClick={() => handleLinkClick("home")}
                className={activeLink === "home" ? "active-link" : ""}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => handleLinkClick("about")}
                className={activeLink === "about" ? "active-link" : ""}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => handleLinkClick("contact")}
                className={activeLink === "contact" ? "active-link" : ""}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                onClick={() => handleLinkClick("login")}
                className={activeLink === "login" ? "active-link" : ""}
              >
                <i className="bi bi-person"></i> Login
              </Link>
            </li>

            <li className="cart-icon">
              <Link
                to="/cart"
                onClick={() => handleLinkClick("cart")}
                className={activeLink === "cart" ? "active-link" : ""}
              >
                <i className="bi bi-cart"></i> Cart
                {cartQty > 0 && <span className="cart-count">{cartQty}</span>}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Second Line Dropdown */}
      <div className="navbar-dropdown">
        <ul className="dropdown-menu">

          {/* ✅ DOG */}
          <li className="dropdown-item">
            {/* Dog text -> navigate */}
            <Link
              to="/dog"
              onClick={() => handleLinkClick("dog")}
              className={activeLink === "dog" ? "active-link" : ""}
            >
              Dog
            </Link>

            {/* caret -> only open dropdown */}
            <span
              className="caret-btn"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown("dog");
              }}
            >
              <FaCaretDown className="dropdown-icon" />
            </span>

            {showDropdown.dog && (
              <div className="dropdown-columns mega-menu">
                <div className="dropdown-column">
                  <h3>Dry &amp; wet food</h3>
                  <ul>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Dry Dog Food</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Wet Dog Food</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Veg Dog Food</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Grain Free Dog Food</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Human Grade Food</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Low Grain Dog Food</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Prescription Dog Food</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Puppy Food</Link></li>
                  </ul>
                </div>

                <div className="dropdown-column">
                  <h3>Clothing</h3>
                  <ul>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>T-shirts</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Raincoat</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Sweaters</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Special Occasion Wear</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Hoodies &amp; Sweatshirts</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Jackets</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Socks</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Dresses</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Shoes</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Bandana</Link></li>
                  </ul>
                </div>

                <div className="dropdown-column">
                  <h3>Dog toys</h3>
                  <ul>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Rope Toys</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Tough Chew Toys</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Chew Toys</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Plush Toys</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Interactive Toys</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Squeaky Toys</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Ball Toys</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Fetch Toys</Link></li>
                  </ul>
                </div>

                <div className="dropdown-column">
                  <h3>Health care</h3>
                  <ul>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Skin Care</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Eye Care</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Digestion And Immunity</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Hip And Joint Care</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Dental Care</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Calcium Supplements</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Ear Care</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Deworming</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Tick And Flea Solutions</Link></li>
                    <li><Link to="/dog" onClick={closeAllDropdowns}>Antibiotics</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          {/* ✅ CAT */}
          <li className="dropdown-item">
            <Link
              to="/cat"
              onClick={() => handleLinkClick("cat")}
              className={activeLink === "cat" ? "active-link" : ""}
            >
              Cat
            </Link>

            <span
              className="caret-btn"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown("cat");
              }}
            >
              <FaCaretDown className="dropdown-icon" />
            </span>

            {showDropdown.cat && (
              <div className="dropdown-columns mega-menu">
                <div className="dropdown-column">
                  <h3>Dry &amp; wet food</h3>
                  <ul>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Kitten Food</Link></li>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Canned Cat Food</Link></li>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Dry Cat Food</Link></li>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Gravy Cat Food</Link></li>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Prescription Cat Food</Link></li>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Grain Free Cat Food</Link></li>
                  </ul>
                </div>

                <div className="dropdown-column">
                  <h3>Creamy &amp; natural treats</h3>
                  <ul>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Creamy Cat Treats</Link></li>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Natural Cat Treats</Link></li>
                  </ul>
                </div>

                <div className="dropdown-column">
                  <h3>Cat toys</h3>
                  <ul>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Cat Interactive Toys</Link></li>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Catnip</Link></li>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Plush Toy</Link></li>
                  </ul>
                </div>

                <div className="dropdown-column">
                  <h3>Grooming</h3>
                  <ul>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Brushes And Combs</Link></li>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Cat Shampoos And Conditioners</Link></li>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Paw And Nail Care</Link></li>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Trimmers And Tools</Link></li>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Waterless Care</Link></li>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Bathing Supplies</Link></li>
                  </ul>
                </div>

                <div className="dropdown-column">
                  <h3>Cleaning &amp; odor control</h3>
                  <ul>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Wipes And Stain Removers</Link></li>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Diapers And Lint Rollers</Link></li>
                    <li><Link to="/cat" onClick={closeAllDropdowns}>Cat Deodorizers</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          {/* ✅ SMALL PETS */}
          <li className="dropdown-item">
            <Link
              to="/smallpets"
              onClick={() => handleLinkClick("smallPets")}
              className={activeLink === "smallPets" ? "active-link" : ""}
            >
              Small pets
            </Link>

            <span
              className="caret-btn"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown("smallPets");
              }}
            >
              <FaCaretDown className="dropdown-icon" />
            </span>

            {showDropdown.smallPets && (
              <div className="dropdown-columns mega-menu smallpets-menu">
                <div className="dropdown-column">
                  <h3>Small Pets</h3>
                  <ul>
                    <li><Link to="/smallpets" onClick={closeAllDropdowns}>Hamsters</Link></li>
                    <li><Link to="/smallpets" onClick={closeAllDropdowns}>Guinea pigs</Link></li>
                    <li><Link to="/smallpets" onClick={closeAllDropdowns}>Rabbits</Link></li>
                    <li><Link to="/smallpets" onClick={closeAllDropdowns}>Rats</Link></li>
                    <li><Link to="/smallpets" onClick={closeAllDropdowns}>Fish</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </li>

          {/* Other links keep same */}
          <li>
            <Link to="/petservice" onClick={() => handleLinkClick("petService")}
              className={activeLink === "petService" ? "active-link" : ""}>
              Pet Service <FaCaretDown className="dropdown-icon" />
            </Link>
          </li>

          {/* ✅ SHOP BY BRAND (text no navigation, caret opens dropdown) */}
<li className="dropdown-item">

  {/* Text only (NO navigation) */}
  <span
    className={`brand-text ${
      activeLink === "shopByBrand" ? "active-link" : ""
    }`}
  >
    Shop by Brand
  </span>

  {/* Caret opens dropdown */}
  <span
    className="caret-btn"
    onClick={(e) => {
      e.stopPropagation();
      toggleDropdown("shopByBrand");
    }}
  >
    <FaCaretDown className="dropdown-icon" />
  </span>

  {/* Dropdown content */}
  {showDropdown.shopByBrand && (
    <div className="dropdown-columns mega-menu brand-mega-menu">
      <div className="brand-grid">
        <img src={brand1} alt="brand1" />
        <img src={brand2} alt="brand2" />
        <img src={brand3} alt="brand3" />
        <img src={brand4} alt="brand4" />
        <img src={brand5} alt="brand5" />
        <img src={brand6} alt="brand6" />
        <img src={brand7} alt="brand7" />
        <img src={brand8} alt="brand8" />
        <img src={brand9} alt="brand9" />
        <img src={brand10} alt="brand10" />
        <img src={brand11} alt="brand11" />
        <img src={brand12} alt="brand12" />
      </div>
    </div>
  )}

</li>

  <span
    className={`brand-text ${
      activeLink === "shopByBreed" ? "active-link" : ""
    }`}
  >
    Shop by Breed
  </span>

          <li>
            <Link to="/consultavet" onClick={() => handleLinkClick("consultavet")}
              className={activeLink === "consultavet" ? "active-link" : ""}>
              Consult a Vet
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;