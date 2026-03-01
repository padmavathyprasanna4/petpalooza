import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartQty, setCartQty] = useState(0);

  const [cartItem, setCartItem] = useState({
    name: "Turkey, Chickpea & Sweet Potato",
    subtitle: "Small Breed 2Kg",
    mrp: 1899,
    qty: 0,
    size: "1kg",
    shippingFlat: 99,
    shippingTo: "Madhya Pradesh",
  });

  // store chosen payment from checkout
  const [paymentMethod, setPaymentMethod] = useState("secure"); // secure | cod

  const totals = useMemo(() => {
    const subTotal = cartItem.qty > 0 ? cartItem.mrp * cartItem.qty : 0;
    const total = subTotal > 0 ? subTotal + cartItem.shippingFlat : 0;
    return { subTotal, total };
  }, [cartItem]);

  const clearCart = () => {
    setCartQty(0);
    setCartItem((prev) => ({ ...prev, qty: 0 }));
    setPaymentMethod("secure");
  };

  return (
    <CartContext.Provider
      value={{
        cartQty,
        setCartQty,
        cartItem,
        setCartItem,
        totals,
        paymentMethod,
        setPaymentMethod,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}