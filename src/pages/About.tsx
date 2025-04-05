import React from 'react';
import { Shield, Truck, Clock, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          alt="Industrial Equipment"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About AMAQ Enterprise</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-600 mb-8">
            AMAQ Enterprise is a leading supplier of electrical and industrial components in India. 
            Established with a vision to provide quality electrical products and exceptional service, 
            we have grown to become one of the most trusted names in the industry.
          </p>
          <p className="text-lg text-gray-600">
            Our extensive range of products includes industrial automation equipment, electrical components, 
            control panels, and much more. We pride ourselves on offering competitive prices while maintaining 
            the highest standards of quality and customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
            <p className="text-gray-600">All products undergo rigorous quality checks</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Truck className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick and reliable shipping across India</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock customer assistance</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
            <p className="text-gray-600">Competitive pricing for all products</p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our mission is to be the most trusted partner for businesses seeking quality electrical and 
            industrial components. We aim to provide innovative solutions, exceptional service, and 
            reliable products that help our customers succeed in their operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;