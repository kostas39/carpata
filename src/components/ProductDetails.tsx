import React from 'react';

interface ProductDetailsProps {
  part: {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ part }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md w-full">
      <h2 className="text-2xl font-bold mb-2">{part.name}</h2>
      <p className="text-gray-700 mb-2">{part.description}</p>
      <p className="text-gray-900 font-bold mb-2">Price: ${part.price}</p>
      <p className="text-gray-600">Stock: {part.stock}</p>
    </div>
  );
}

export default ProductDetails;
