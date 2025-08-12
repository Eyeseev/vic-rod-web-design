import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon,
  iconPosition = 'left',
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium
    rounded-full
    transition-all duration-200 ease-in-out
    whitespace-nowrap
  `;

  const variantClasses = {
    default: `
      bg-panel-alt text-ink-2 border border-panel-alt
      hover:bg-panel hover:text-ink
    `,
    primary: `
      bg-primary text-white
      hover:bg-primary-light
    `,
    secondary: `
      bg-secondary text-white
      hover:bg-secondary-light
    `,
    accent: `
      bg-accent text-white
      hover:bg-accent-light
    `,
    success: `
      bg-success text-white
      hover:bg-success-light
    `,
    warning: `
      bg-warning text-white
      hover:bg-warning-light
    `,
    error: `
      bg-error text-white
      hover:bg-error-light
    `,
    outline: `
      bg-transparent text-primary border border-primary
      hover:bg-primary hover:text-white
    `,
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs gap-1',
    md: 'px-3 py-1.5 text-sm gap-1.5',
    lg: 'px-4 py-2 text-base gap-2',
  };

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  const renderContent = () => {
    if (!icon) return children;
    
    if (iconPosition === 'left') {
      return (
        <>
          <span className="flex-shrink-0">{icon}</span>
          {children}
        </>
      );
    }
    
    return (
      <>
        {children}
        <span className="flex-shrink-0">{icon}</span>
      </>
    );
  };

  return (
    <span className={classes}>
      {renderContent()}
    </span>
  );
};

export default Badge;
