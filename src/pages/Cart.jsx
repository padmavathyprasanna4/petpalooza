import React, { useEffect, useMemo, useState } from "react";
import "./Cart.css";

import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

import productImg from "../assets/cart1.png";

// payment icons
import pay1 from "../assets/cart2.png";
import pay2 from "../assets/cart3.png";
import pay3 from "../assets/cart4.png";
import pay4 from "../assets/cart5.png";
import pay5 from "../assets/cart6.png";

export default function Cart() {
  const navigate = useNavigate();

  // ✅ from context (navbar badge + checkout summary)
  const { setCartQty, setCartItem } = useCart();

  const [qty, setQty] = useState(1);
  const [removed, setRemoved] = useState(false);
  const [coupon, setCoupon] = useState("");

  const price = 1899;

  // ✅ Keep navbar badge + checkout page summary in sync
  useEffect(() => {
    const q = removed ? 0 : qty;

    // navbar badge
    setCartQty(q);

    // checkout order summary data
    setCartItem((prev) => ({
      ...prev,
      name: "Turkey, Chickpea & Sweet Potato",
      subtitle: "Small Breed 2Kg",
      mrp: price,
      qty: q,
      size: "1kg",
      shippingFlat: 99,
      shippingTo: "Madhya Pradesh",
    }));
  }, [qty, removed, setCartQty, setCartItem]);

  const subTotal = useMemo(() => (removed ? 0 : price * qty), [removed, qty]);
  const total = useMemo(() => (removed ? 0 : subTotal + 99), [removed, subTotal]);

  const decQty = () => setQty((q) => Math.max(1, q - 1));
  const incQty = () => setQty((q) => q + 1);

  const removeItem = () => {
    setRemoved(true);
    setQty(1);
    setCartQty(0);
  };

  const restoreItem = () => {
    setRemoved(false);
    setQty(1);
    setCartQty(1);
  };

  return (
    <section className="cart-page">
      <div className="cart-wrap">
        {/* LEFT */}
        <div className="cart-left">
          <div className="cart-free-ship">
            <p className="cart-free-ship-text">Your order qualifies for free shipping!</p>
            <div className="cart-free-ship-bar">
              <div className="cart-free-ship-bar-fill" />
            </div>
          </div>

          <div className="cart-table">
            <div className="cart-table-head">
              <div className="c-remove">Remove</div>
              <div className="c-product">Product</div>
              <div className="c-price">Price</div>
              <div className="c-qty">Quantity</div>
              <div className="c-subtotal">Sub Total</div>
            </div>

            {!removed ? (
              <div className="cart-row">
                <div className="c-remove">
                  <button
                    className="cart-remove-btn"
                    onClick={removeItem}
                    aria-label="Remove item"
                    type="button"
                  >
                    X
                  </button>
                </div>

                <div className="c-product cart-product">
                  <img className="cart-product-img" src={productImg} alt="Product" />
                  <div className="cart-product-info">
                    <div className="cart-product-name">
                      Turkey, Chickpea &amp; Sweet Potato <br />
                      Small Breed 2Kg
                    </div>
                  </div>
                </div>

                <div className="c-price cart-cell-money">
                  ₹ {price.toLocaleString("en-IN")}
                </div>

                <div className="c-qty">
                  <div className="cart-qty-box">
                    <button className="cart-qty-btn" onClick={decQty} type="button">
                      -
                    </button>
                    <div className="cart-qty-num">{qty}</div>
                    <button className="cart-qty-btn" onClick={incQty} type="button">
                      +
                    </button>
                  </div>
                </div>

                <div className="c-subtotal cart-cell-money">
                  ₹ {subTotal.toLocaleString("en-IN")}
                </div>
              </div>
            ) : (
              <div className="cart-empty-row">
                Your cart is empty.
                <button className="cart-restore-btn" onClick={restoreItem} type="button">
                  Restore item
                </button>
              </div>
            )}
          </div>

          <div className="cart-coupon-row">
            <input
              className="cart-coupon-input"
              placeholder="Coupon code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button className="cart-coupon-btn" type="button">
              Apply coupon
            </button>
          </div>

          <div className="cart-free-products">
            <div className="cart-free-box">
              Free products<br />dog food combo 5 kg,<br />turkey
            </div>
            <div className="cart-free-box">
              Free products<br />dog food 2 kg turkey
            </div>
            <div className="cart-free-box">
              Free products<br />dog food 2 kg chicken
            </div>
          </div>

          <div className="cart-trust-row">
            <div className="cart-trust">
              <div className="cart-trust-icon">📞</div>
              <div>
                <div className="cart-trust-title">Have a question?</div>
                <div className="cart-trust-text">
                  Our experts are here <br />
                  to call: <span className="cart-link">call us</span>
                </div>
              </div>
            </div>

            <div className="cart-trust">
              <div className="cart-trust-icon">🔒</div>
              <div>
                <div className="cart-trust-title">Secure shopping</div>
                <div className="cart-trust-text">
                  All transactions are <br />
                  protected by SSL
                </div>
              </div>
            </div>

            <div className="cart-trust">
              <div className="cart-trust-icon">🛡️</div>
              <div>
                <div className="cart-trust-title">Privacy protection</div>
                <div className="cart-trust-text">
                  Your privacy is always <br />
                  our top priority.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <aside className="cart-right">
          <h2 className="cart-totals-title">Card Totals</h2>

          <div className="cart-totals">
            <div className="cart-line">
              <span>Sub total</span>
              <span>₹ {subTotal.toLocaleString("en-IN")}</span>
            </div>

            <div className="cart-ship-row">
              <div className="cart-ship-left">
                <div className="cart-ship-label">Shipping</div>
                <div className="cart-ship-note">Shipping to Madhya Pradesh.</div>
                <button className="cart-ship-change" type="button">
                  Change address
                </button>
              </div>

              <div className="cart-ship-right">
                <div className="cart-flat">
                  Flat rate : <span className="cart-flat-price">₹99.00</span>
                </div>
              </div>
            </div>

            <div className="cart-hr" />

            <div className="cart-line cart-total">
              <span>Total</span>
              <span>₹ {total.toLocaleString("en-IN")}</span>
            </div>

            <div className="cart-includes">(includes ₹251.62 CGST, ₹251.62 SGST)</div>

            {/* ✅ Navigate to checkout */}
            <button
              className="cart-checkout-btn"
              type="button"
              onClick={() => navigate("/checkout")}
              disabled={removed}
              title={removed ? "Cart is empty" : "Proceed to Checkout"}
            >
              Proceed to Checkout
            </button>
          </div>

          <h3 className="cart-pay-title">Payment methods</h3>

          <div className="cart-pay-logos">
            <img src={pay1} alt="Payment method" />
            <img src={pay2} alt="Payment method" />
            <img src={pay3} alt="Payment method" />
            <img src={pay4} alt="Payment method" />
            <img src={pay5} alt="Payment method" />
          </div>

          <div className="cart-info">
            <div className="cart-info-title">Delivery information:</div>
            <div className="cart-info-text">
              Although we don’t think you’ll ever want one, we’ll gladly provide a refund if it’s
              requested within 14 days of purchase.
            </div>

            <div className="cart-info-title">14 Days Money Back Guarantee:</div>
            <div className="cart-info-text">
              Although we don’t think you’ll ever want one, we’ll gladly provide a refund if it’s
              requested within 14 days of purchase.
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}