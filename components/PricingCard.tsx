import React from 'react';
import Card from './Card';
import Button from './Button';

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  ctaText: string;
  ctaAction: () => void;
  featured?: boolean;
  popular?: boolean;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period = '/month',
  description,
  features,
  ctaText,
  ctaAction,
  featured = false,
  popular = false,
  className = '',
}) => {
  return (
    <Card
      variant={featured ? 'featured' : 'elevated'}
      padding="lg"
      className={`relative ${className}`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-ink">{title}</h3>
          {description && (
            <p className="text-ink-2 text-sm">{description}</p>
          )}
        </div>
        
        <div className="space-y-1">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-4xl font-bold text-primary">{price}</span>
            <span className="text-ink-2 text-base">{period}</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <ul className="space-y-2 text-left">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-success mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-ink-2 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button
          variant={featured ? 'primary' : 'outline'}
          size="lg"
          fullWidth
          onClick={ctaAction}
          className="mt-6"
        >
          {ctaText}
        </Button>
      </div>
    </Card>
  );
};

export default PricingCard;
