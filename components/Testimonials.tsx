import TestimonialCard from './TestimonialCard'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      company: "Studio Bloom",
      content: "Vicrod built our portfolio site in record time. The design perfectly captures our creative vision and the performance is incredible.",
      rating: 5,
      avatar: "👩‍🎨"
    },
    {
      name: "Mike Chen",
      role: "Founder",
      company: "TechFlow Solutions",
      content: "Professional, responsive, and delivered exactly what we needed. Our new website has already increased our lead generation by 40%.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Emily Rodriguez",
      role: "Owner",
      company: "Wellness Collective",
      content: "The attention to detail and user experience is outstanding. Our clients love how easy it is to book appointments online.",
      rating: 5,
      avatar: "🧘‍♀️"
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-headline mb-6">
            What Clients Say
          </h2>
          <p className="section-description mx-auto">
            Don't just take my word for it. Here's what clients have to say about working together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Trusted by professionals across industries</p>
          <div className="flex justify-center items-center gap-8 text-gray-400">
            <span className="text-sm">✓ 100% Satisfaction</span>
            <span className="text-sm">✓ On-time Delivery</span>
            <span className="text-sm">✓ Ongoing Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
