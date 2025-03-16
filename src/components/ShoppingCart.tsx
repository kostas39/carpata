import React from "react";
import { CartItem } from "../types/CartItem";

interface ShoppingCartProps {
  items: CartItem[];
  onIncrease: (id: number) => void;
  onRemove: (id: number) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ items, onIncrease, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-lg mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Shopping Cart 🛒</h2>

      {items.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-4"
            >
              {/* ✅ Product Image */}
              <img src={item.image} alt={item.name} className="h-16 w-16 rounded-lg shadow-md" />

              {/* ✅ Name and Quantity */}
              <div className="flex flex-col flex-grow ml-4">
                <span className="font-medium text-lg">{item.name}</span>
                <span className="text-gray-500 text-sm">Qty: {item.quantity}</span>
              </div>

              {/* ✅ Price with More Space */}
              <div className="text-lg font-semibold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</div>

              {/* ✅ Increase & Decrease Buttons with More Spacing */}
              <div className="flex space-x-3 ml-4"> {/* ✅ Adjusted spacing */}
                <button
                  onClick={() => onRemove(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  -
                </button>
                <button
                  onClick={() => onIncrease(item.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 text-xl font-bold text-right">
            Total: <span className="text-green-600">${total.toFixed(2)}</span>
          </div>

          <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
