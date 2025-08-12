import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'featured' | 'outlined' | 'success' | 'warning' | 'error';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
  hoverEffect?: 'none' | 'lift' | 'glow' | 'border';
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  onClick,
  interactive = false,
  hoverEffect = 'lift',
}) => {
  const baseClasses = `
    bg-panel border border-panel-alt
    rounded-lg
    transition-all duration-250 ease-in-out
    ${interactive ? 'cursor-pointer' : ''}
  `;

  const variantClasses = {
    default: `
      shadow-sm
      ${interactive ? 'hover:shadow-md hover:border-primary-light' : ''}
    `,
    elevated: `
      shadow-md
      ${interactive ? 'hover:shadow-lg hover:translate-y-[-2px]' : ''}
    `,
    featured: `
      shadow-lg border-primary
      ${interactive ? 'hover:shadow-xl hover:border-primary-dark' : ''}
    `,
    outlined: `
      shadow-none border-2 border-ink-3
      ${interactive ? 'hover:border-primary hover:shadow-sm' : ''}
    `,
    success: `
      shadow-md border-success
      ${interactive ? 'hover:shadow-lg hover:border-success-light' : ''}
    `,
    warning: `
      shadow-md border-warning
      ${interactive ? 'hover:shadow-lg hover:border-warning-light' : ''}
    `,
    error: `
      shadow-md border-error
      ${interactive ? 'hover:shadow-lg hover:border-error-light' : ''}
    `,
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const hoverEffectClasses = {
    none: '',
    lift: interactive ? 'hover:translate-y-[-2px]' : '',
    glow: interactive ? 'hover:shadow-lg hover:shadow-primary/20' : '',
    border: interactive ? 'hover:border-primary hover:border-2' : '',
  };

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${paddingClasses[padding]}
    ${hoverEffectClasses[hoverEffect]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  if (onClick || interactive) {
    return (
      <button 
        className={classes} 
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    );
  }

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;
