import React, { useState } from "react";
import { Part } from "../types/Part";
import PartModal from "./PartModal"; // ✅ Import the modal

interface SearchProps {
  parts: Part[];
  onAddToCart: (part: Part) => void;
}

const Search: React.FC<SearchProps> = ({ parts, onAddToCart }) => {
  const [query, setQuery] = useState("");
  const [selectedPart, setSelectedPart] = useState<Part | null>(null);

  // 🔎 Filter parts based on user input
  const filteredParts = parts.filter((part) =>
    part.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="search" className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-4xl mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-4">Search Parts</h2>
      <div className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for parts..."
          className="border p-2 flex-grow"
        />
      </div>

      {/* 🔎 Show search results dynamically */}
      {query && (
        <div className="mt-4">
          {filteredParts.length > 0 ? (
            <ul className="space-y-2">
              {filteredParts.map((part) => (
                <li
                  key={part.id}
                  className="p-2 border rounded bg-gray-100 flex items-center cursor-pointer hover:bg-gray-200 transition"
                  onClick={() => setSelectedPart(part)}
                >
                  <img src={part.image} alt={part.name} className="h-10 w-10 mr-3 rounded" />
                  <div className="flex-1">
                    {part.name} - <span className="text-green-600">${part.price.toFixed(2)}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-red-500 mt-2">No matching parts found.</p>
          )}
        </div>
      )}

      {/* Render the modal when a part is selected */}
      {selectedPart && (
        <PartModal
          part={selectedPart}
          onClose={() => setSelectedPart(null)}
          onAddToCart={onAddToCart}
        />
      )}
    </section>
  );
};

export default Search;
