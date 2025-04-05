import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          alt="Industrial Equipment"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Your Trusted Partner in Industrial Solutions
            </h1>
            <p className="text-xl mb-8">
              Quality electrical and industrial components at competitive prices
            </p>
            <button className="bg-[#0052FF] px-6 py-3 rounded-md hover:bg-blue-700 flex items-center gap-2">
              Explore Products <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Product Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition duration-200">
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <button className="text-[#0052FF] flex items-center gap-1 hover:text-blue-800">
                View Products <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="bg-[#0052FF] text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample data
const categories = [
  {
    name: "Industrial Automation",
    description: "PLC, HMI, Sensors, and complete automation solutions"
  },
  {
    name: "Electrical Components",
    description: "Switches, Connectors, Cables, and Wiring Accessories"
  },
  {
    name: "Control & Switchgear",
    description: "Circuit Breakers, Contactors, and Protection Devices"
  },
  {
    name: "Motors & Drives",
    description: "AC/DC Motors, VFDs, and Motor Control Centers"
  },
  {
    name: "Tools & Instruments",
    description: "Testing Equipment, Hand Tools, and Measuring Instruments"
  },
  {
    name: "Safety Equipment",
    description: "Personal Protection, Safety Switches, and Emergency Systems"
  }
];

const featuredProducts = [
  {
    name: "Digital Multimeter",
    description: "Professional-grade digital multimeter with auto-ranging",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Industrial PLC",
    description: "Programmable Logic Controller for automation systems",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64926?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Circuit Breaker",
    description: "High-performance circuit protection device",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Safety Helmet",
    description: "Industrial safety helmet with advanced protection",
    image: "https://images.unsplash.com/photo-1581092192574-35c6ebd9f6fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default Home;