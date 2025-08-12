import React from 'react';
import SectionHeader from './SectionHeader';
import PricingCard from './PricingCard';

interface PricingPlan {
  id: string;
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  featured?: boolean;
  popular?: boolean;
}

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  plans: PricingPlan[];
  className?: string;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  title = "Simple, Transparent Pricing",
  subtitle = "Choose the plan that's right for your business. All plans include hosting, maintenance, and support.",
  plans,
  className = '',
}) => {
  const handlePlanSelect = (plan: PricingPlan) => {
    // Handle plan selection - could open contact form, redirect to checkout, etc.
    console.log('Plan selected:', plan.title);
    // You could implement analytics tracking here
    // analytics.track('pricing_plan_selected', { plan: plan.title, price: plan.price });
  };

  return (
    <div className={`space-y-12 ${className}`}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        alignment="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            title={plan.title}
            price={plan.price}
            period={plan.period}
            description={plan.description}
            features={plan.features}
            ctaText={plan.ctaText}
            ctaAction={() => handlePlanSelect(plan)}
            featured={plan.featured}
            popular={plan.popular}
          />
        ))}
      </div>

      {/* Additional Information */}
      <div className="text-center space-y-4">
        <p className="text-ink-2 text-sm">
          Need a custom solution? <a href="#contact" className="text-primary hover:text-primary-dark underline">Get in touch</a> for a personalized quote.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 text-xs text-ink-3">
          <span>✓ 30-day money-back guarantee</span>
          <span>✓ Free consultation call</span>
          <span>✓ Ongoing support included</span>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
