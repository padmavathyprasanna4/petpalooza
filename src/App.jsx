import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Dog from "./pages/Dog";
import Cat from "./pages/Cat";
import Petservice from "./pages/PetService";
import Consultavet from "./pages/Consultavet";
import Footer from "./components/Footer";
import Consult from "./pages/Consult";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import OrderConfirmation from "./pages/OrderConfirmation";
import Smallpets from "./pages/Smallpets";

import Swiper from "swiper";
function App() {
  return (
    <Router>
      <div style={{ width: "100%" }}>
        <Navbar />

        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/petservice" element={<Petservice />} />
          <Route path="/consultavet" element={<Consultavet />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/smallpets" element={<Smallpets />} />
        </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;