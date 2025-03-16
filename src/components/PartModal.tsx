import React from "react";
import { Part } from "../types/Part";

interface PartModalProps {
  part: Part | null;
  onClose: () => void;
  onAddToCart: (part: Part) => void;
}

const PartModal: React.FC<PartModalProps> = ({ part, onClose, onAddToCart }) => {
  if (!part) return null; // Don't render if no part is selected

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">{part.name}</h2>
        <img src={part.image} alt={part.name} className="w-full h-40 object-contain mb-4" />
        <p className="text-lg font-semibold">Price: <span className="text-green-600">${part.price.toFixed(2)}</span></p>
        <div className="mt-4 flex justify-between">
          <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" onClick={onClose}>
            Close
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={() => onAddToCart(part)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartModal;
