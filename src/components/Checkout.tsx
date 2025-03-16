import React from "react";
import { CartItem } from "../types/CartItem";
import { Link } from "react-router-dom";

interface CheckoutProps {
  cartItems: CartItem[];
}

const Checkout: React.FC<CheckoutProps> = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Checkout</h2>

      {cartItems.length === 0 ? (
        <p className="text-red-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b pb-3">
              <img src={item.image} alt={item.name} className="h-16 w-16 rounded-lg shadow-md" />
              <div className="flex-grow ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500">Qty: {item.quantity}</p>
              </div>
              <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}

          <div className="text-xl font-bold text-right mt-6">
            Total: <span className="text-green-600">${total.toFixed(2)}</span>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Place Order
          </button>

          <Link to="/cart" className="block text-center text-blue-500 mt-4 hover:underline">
            Back to Cart
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
