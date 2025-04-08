import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, User } from 'lucide-react';
import CartDrawer from './CartDrawer';
import AuthModal from './AuthModal';
import { useCartStore } from '../stores/cartStore';
import { useAuthStore } from '../stores/authStore';

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const { user, signOut } = useAuthStore();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleAuthClick = () => {
    if (user) {
      signOut();
    } else {
      setIsAuthOpen(true);
    }
  };

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <img 
                  src="/amaq-enterprise/logo.png" 
                  alt="AMAQ Logo" 
                  className="h-10 w-auto"
                />
                <h1 className="text-2xl font-bold text-[#0052FF]">AMAQ ENTERPRISES</h1>
              </Link>
            </div>

            <div className="hidden md:block flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/products" className="text-gray-600 hover:text-blue-600">Products</Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
              <button 
                className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
                onClick={handleAuthClick}
              >
                <User size={24} />
                {user && <span className="text-sm">Sign Out</span>}
              </button>
              <button 
                className="text-gray-600 hover:text-blue-600 relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart size={24} />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            <div className="md:hidden">
              <button className="text-gray-600">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Navbar