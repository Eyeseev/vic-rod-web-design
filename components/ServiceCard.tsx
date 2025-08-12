import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
}

export default function ServiceCard({ title, description, features, price, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="text-4xl mb-6 text-center">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
        {title}
      </h3>
      
      <p className="text-gray-600 text-center mb-6 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="text-center">
        <p className="text-2xl font-bold text-slate-900 mb-4">
          {price}
        </p>
        <button className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-700 hover:bg-blue-50 font-semibold py-3 px-6 rounded-xl transition-all duration-200 w-full">
          Get Started
        </button>
      </div>
    </div>
  );
}
