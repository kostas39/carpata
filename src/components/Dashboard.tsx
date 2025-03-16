import React, { useEffect, useState } from "react";
import partsData from "../data/parts.json";
import { Part } from "../types/Part";
import PartModal from "./PartModal";

type DashboardProps = {
  onAddToCart: (part: Part) => void;
};

const Dashboard: React.FC<DashboardProps> = ({ onAddToCart }) => {
  const [parts, setParts] = useState<Part[]>([]);
  const [selectedPart, setSelectedPart] = useState<Part | null>(null);

  useEffect(() => {
    setParts(partsData);
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Car Parts</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-3 text-left">Image</th>
            <th className="p-3 text-left">Part Name</th>
            <th className="p-3 text-center">Stock</th>
            <th className="p-3 text-center">Price</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part) => (
            <tr key={part.id} className="border-t hover:bg-gray-100 transition">
              <td className="p-3 text-center">
                <img src={part.image} alt={part.name} className="h-16 w-16 rounded-lg shadow-md" />
              </td>
              <td className="p-3">{part.name}</td>
              <td className={`p-3 text-center ${part.stock === 0 ? "text-red-500" : "text-green-600"}`}>
                {part.stock}
              </td>
              <td className="p-3 text-center">${part.price.toFixed(2)}</td>
              <td className="p-3 text-center">
                <button className="text-blue-600 hover:underline mr-3" onClick={() => setSelectedPart(part)}>
                  View
                </button>
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                  onClick={() => onAddToCart(part)}
                >
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render the modal when a part is selected */}
      {selectedPart && <PartModal part={selectedPart} onClose={() => setSelectedPart(null)} onAddToCart={onAddToCart} />}
    </div>
  );
};

export default Dashboard;
