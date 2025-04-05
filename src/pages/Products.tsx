import React, { useState } from 'react';
import { Filter, Search, ChevronDown } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
          <p className="mt-2 text-gray-600">Browse our wide range of industrial and electrical components</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Filter size={20} className="text-gray-500" />
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-600">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="flex gap-4">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            </div>

            {/* Brands */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Brands</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <label key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-600">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Apply Filters
            </button>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Search and Sort */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border rounded-md"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
              <div className="relative">
                <select className="appearance-none bg-white border rounded-md px-4 py-2 pr-8 w-full md:w-48">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center gap-2">
                <button className="px-3 py-1 border rounded-md">Previous</button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-md">1</button>
                <button className="px-3 py-1 border rounded-md">2</button>
                <button className="px-3 py-1 border rounded-md">3</button>
                <button className="px-3 py-1 border rounded-md">Next</button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample data
const categories = [
  { id: 1, name: 'Industrial Automation' },
  { id: 2, name: 'Electrical Components' },
  { id: 3, name: 'Control & Switchgear' },
  { id: 4, name: 'Motors & Drives' },
  { id: 5, name: 'Tools & Instruments' },
  { id: 6, name: 'Safety Equipment' },
];

const brands = [
  'Siemens',
  'ABB',
  'Schneider Electric',
  'Allen-Bradley',
  'Phoenix Contact',
];

const products = [
  {
    id: 1,
    name: 'Digital Multimeter',
    description: 'Professional-grade digital multimeter with auto-ranging capability',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Industrial PLC',
    description: 'Programmable Logic Controller for industrial automation',
    price: 24999,
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64926?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Circuit Breaker',
    description: 'High-performance circuit protection device',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: 'Safety Helmet',
    description: 'Industrial safety helmet with advanced protection features',
    price: 899,
    image: 'https://images.unsplash.com/photo-1581092192574-35c6ebd9f6fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: 'Power Supply Unit',
    description: '24V DC power supply for industrial applications',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1581092218827-b5f71a63e2b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: 'Control Panel',
    description: 'Custom-built industrial control panel',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1581092160562-7d25d9f8e1f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export default Products;