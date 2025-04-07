import React from 'react';
import { useCartStore } from '../stores/cartStore';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  stock: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price, image_url, stock }) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ id, name, price, image_url, quantity: 1 });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img
        src={image_url}
        alt={name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">₹{price}</span>
          <button 
            onClick={handleAddToCart}
            disabled={stock === 0}
            className={`px-4 py-2 rounded-md ${
              stock > 0 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {stock > 0 ? `${stock} in stock` : 'Currently unavailable'}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;