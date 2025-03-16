import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Search from "./components/Search";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import partsData from "./data/parts.json";
import { Part } from "./types/Part";
import { CartItem } from "./types/CartItem";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [parts] = useState<Part[]>(partsData);

  const handleAddToCart = (part: Part) => {
    const existingItem = cartItems.find((item) => item.id === part.id);
    if (existingItem) {
      setCartItems(cartItems.map((item) =>
        item.id === part.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...part, quantity: 1 }]);
    }
  };

  const handleIncreaseQuantity = (itemId: number) => {
    setCartItems(cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleRemoveFromCart = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />

        <main className="pt-20 px-4 space-y-12 max-w-5xl mx-auto flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard onAddToCart={handleAddToCart} />} />
            <Route path="/search" element={<Search parts={parts} onAddToCart={handleAddToCart} />} />
            {/* ✅ Ensure Cart Route Exists */}
            <Route path="/cart" element={<ShoppingCart items={cartItems} onRemove={handleRemoveFromCart} onIncrease={handleIncreaseQuantity} />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
