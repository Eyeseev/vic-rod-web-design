import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  icon,
  iconPosition = 'left',
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium text-center
    border border-transparent
    rounded-lg
    transition-all duration-250 ease-in-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    active:transform active:translate-y-0
    shadow-md hover:shadow-lg
  `;

  const variantClasses = {
    primary: `
      bg-primary text-white
      hover:bg-primary-light hover:shadow-lg
      focus-visible:ring-primary
      active:bg-primary-dark
    `,
    secondary: `
      bg-secondary text-white
      hover:bg-secondary-light hover:shadow-lg
      focus-visible:ring-secondary
      active:bg-secondary-dark
    `,
    accent: `
      bg-accent text-white
      hover:bg-accent-light hover:shadow-lg
      focus-visible:ring-accent
      active:bg-accent-dark
    `,
    outline: `
      bg-transparent text-primary border-primary
      hover:bg-primary hover:text-white hover:shadow-md
      focus-visible:ring-primary
      active:bg-primary-dark
    `,
    ghost: `
      bg-transparent text-ink hover:bg-panel-alt
      hover:shadow-sm
      focus-visible:ring-ink
      active:bg-panel
    `,
    success: `
      bg-success text-white
      hover:bg-success-light hover:shadow-lg
      focus-visible:ring-success
      active:bg-success
    `,
    warning: `
      bg-warning text-white
      hover:bg-warning-light hover:shadow-lg
      focus-visible:ring-warning
      active:bg-warning
    `,
    error: `
      bg-error text-white
      hover:bg-error-light hover:shadow-lg
      focus-visible:ring-error
      active:bg-error
    `,
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm gap-2',
    md: 'px-4 py-2.5 text-base gap-2.5',
    lg: 'px-6 py-3 text-lg gap-3',
    xl: 'px-8 py-4 text-xl gap-4',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${widthClass}
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
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
