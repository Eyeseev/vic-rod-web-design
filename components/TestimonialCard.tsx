import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export default function TestimonialCard({ name, role, company, content, rating, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 card-hover group">
      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(rating)].map((_, index) => (
          <svg
            key={index}
            className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-200"
            style={{ transitionDelay: `${index * 50}ms` }}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-gray-700 mb-6 leading-relaxed italic group-hover:text-gray-800 transition-colors">
        "{content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl group-hover:bg-gray-200 transition-colors">
          {avatar}
        </div>
        <div>
          <p className="font-semibold text-[#1A2B4D] group-hover:text-[#2A3B5D] transition-colors">{name}</p>
          <p className="text-sm text-gray-600">{role} at {company}</p>
        </div>
      </div>
    </div>
  )
}
