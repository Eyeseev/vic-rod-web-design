import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Custom Website Design',
    description: 'Unique, professional designs that reflect your brand and convert visitors into customers.',
    features: ['Responsive design', 'SEO optimized', 'Fast loading', 'Custom branding'],
    price: 'From $2,500',
    icon: '🎨'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Full online stores with secure payment processing and inventory management.',
    features: ['Payment integration', 'Product management', 'Order tracking', 'Mobile optimized'],
    price: 'From $4,500',
    icon: '🛒'
  },
  {
    title: 'Website Maintenance',
    description: 'Keep your site secure, updated, and performing at its best with ongoing support.',
    features: ['Security updates', 'Performance monitoring', 'Content updates', '24/7 support'],
    price: 'From $150/month',
    icon: '🔧'
  }
];

export default function Services() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
            Professional Web Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From custom designs to e-commerce platforms, I build websites that help your business grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to get started? Let's discuss your project.
          </p>
          <button className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02]">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
