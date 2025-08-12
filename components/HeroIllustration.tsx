import React from 'react';

export default function HeroIllustration() {
  return (
    <div className="w-48 h-48 mx-auto mb-12 relative">
      {/* Main container */}
      <div className="w-full h-full border-2 border-[#1A2B4D] rounded-xl relative bg-white shadow-lg">
        {/* Close button circle (top left) */}
        <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#1A2B4D] rounded-full shadow-md"></div>
        
        {/* Inner nested rectangles */}
        <div className="absolute top-4 left-4 right-4 bottom-4 border border-[#1A2B4D] rounded-lg"></div>
        <div className="absolute top-8 left-8 right-8 bottom-8 border border-[#1A2B4D] rounded-md"></div>
        
        {/* Connection circle (bottom right) */}
        <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#1A2B4D] rounded-full shadow-md"></div>
        
        {/* Dashed connection line */}
        <div className="absolute -bottom-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-dashed border-[#1A2B4D] rounded-tr-xl"></div>
        
        {/* Additional detail lines */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#1A2B4D] rounded-tl-sm"></div>
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#1A2B4D] rounded-br-sm"></div>
        
        {/* Content placeholder */}
        <div className="absolute top-12 left-12 right-12 bottom-12 bg-gray-50 rounded flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 bg-[#1A2B4D] rounded mb-2"></div>
            <div className="w-16 h-2 bg-[#1A2B4D] rounded mb-1"></div>
            <div className="w-12 h-2 bg-[#1A2B4D] rounded"></div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute -top-8 right-8 w-4 h-4 bg-blue-500 rounded-full opacity-60"></div>
        <div className="absolute -bottom-8 left-8 w-3 h-3 bg-green-500 rounded-full opacity-60"></div>
        <div className="absolute top-8 -right-8 w-2 h-2 bg-purple-500 rounded-full opacity-60"></div>
      </div>
    </div>
  )
}
