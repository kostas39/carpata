import React, { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Search from "./components/Search";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "./components/Footer";
import partsData from "./data/parts.json";
import { Part } from "./types/Part";
import { CartItem } from "./types/CartItem";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [parts] = useState<Part[]>(partsData); // Store parts in state

  // 🛒 Handle Add to Cart
  const handleAddToCart = (part: Part) => {
    const existingItem = cartItems.find((item) => item.id === part.id);
    if (existingItem) {
      setCartItems(cartItems.map((item) =>
        item.id === part.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...part, quantity: 1, image: part.image }]); // ✅ Store image in the cart
    }
  };


  // 🔼 Handle Increase Quantity
  const handleIncreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ❌ Handle Decrease Quantity / Remove Item
  const handleRemoveFromCart = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Removes item only when quantity reaches 0
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />

      <main className="pt-20 px-4 space-y-12 max-w-5xl mx-auto flex-grow">
        <section id="dashboard">
          <Dashboard onAddToCart={handleAddToCart} />
        </section>

        {/* ✅ Pass handleAddToCart to Search */}
        <section id="search">
          <Search parts={parts} onAddToCart={handleAddToCart} />
        </section>

        <section id="cart">
          <ShoppingCart
            items={cartItems}
            onRemove={handleRemoveFromCart}
            onIncrease={handleIncreaseQuantity}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
