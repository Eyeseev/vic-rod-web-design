'use client';

import React, { useEffect, useState } from 'react';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ContactSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-headline mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="section-description mx-auto">
            Ready to transform your online presence? I'm here to help you create a website that converts visitors into customers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#1A2B4D] mb-6">Get Started Today</h3>
            
            {isClient ? (
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A2B4D] focus:border-transparent hover:border-gray-400 transition-all duration-200"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A2B4D] focus:border-transparent hover:border-gray-400 transition-all duration-200"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A2B4D] focus:border-transparent hover:border-gray-400 transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A2B4D] focus:border-transparent hover:border-gray-400 transition-all duration-200"
                  >
                    <option value="">Select a project type</option>
                    <option value="custom-website">Custom Website</option>
                    <option value="ecommerce">E-commerce Site</option>
                    <option value="portfolio">Portfolio Site</option>
                    <option value="maintenance">Website Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell me about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A2B4D] focus:border-transparent hover:border-gray-400 transition-all duration-200 resize-none"
                    placeholder="Describe your project, goals, and timeline..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full hover:scale-[1.02] transition-transform duration-200">
                  Send Message
                </button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                  <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>
                <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-24 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#1A2B4D] mb-6">Other Ways to Connect</h3>
              <p className="text-gray-600 mb-6">
                Prefer to talk directly? I'm always happy to discuss your project and answer any questions you might have.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#1A2B4D] rounded-lg flex items-center justify-center text-white group-hover:bg-[#2A3B5D] transition-colors">
                  📧
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A2B4D] group-hover:text-[#2A3B5D] transition-colors">Email</h4>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">hello@vicrodtech.com</p>
                  <p className="text-sm text-gray-500">I typically respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#1A2B4D] rounded-lg flex items-center justify-center text-white group-hover:bg-[#2A3B5D] transition-colors">
                  📱
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A2B4D] group-hover:text-[#2A3B5D] transition-colors">Phone</h4>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Available Mon-Fri, 9 AM - 6 PM EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-[#1A2B4D] rounded-lg flex items-center justify-center text-white group-hover:bg-[#2A3B5D] transition-colors">
                  💬
                </div>
                <div>
                  <h4 className="font-semibold text-[#1A2B4D] group-hover:text-[#2A3B5D] transition-colors">Video Call</h4>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Schedule a consultation</p>
                  <p className="text-sm text-gray-500">30-minute free consultation to discuss your project</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 hover:bg-blue-100 transition-colors duration-200">
              <h4 className="font-semibold text-[#1A2B4D] mb-2">What to expect:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Free 30-minute consultation</li>
                <li>• Detailed project proposal within 48 hours</li>
                <li>• Clear timeline and pricing</li>
                <li>• Ongoing communication throughout the process</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
