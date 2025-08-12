import Hero from '@/components/Hero';
import { Services, Testimonials, Projects, ContactSection, Footer } from '@/components';

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Services Section */}
      <Services />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
