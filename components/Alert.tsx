import React from 'react';
import Icon from './Icon';

interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  children,
  onClose,
  className = '',
}) => {
  const typeConfig = {
    info: {
      icon: 'info',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      textColor: 'text-primary',
      iconColor: 'text-primary',
    },
    success: {
      icon: 'check-circle',
      bgColor: 'bg-success/10',
      borderColor: 'border-success/20',
      textColor: 'text-success',
      iconColor: 'text-success',
    },
    warning: {
      icon: 'alert-triangle',
      bgColor: 'bg-warning/10',
      borderColor: 'border-warning/20',
      textColor: 'text-warning',
      iconColor: 'text-warning',
    },
    error: {
      icon: 'x-circle',
      bgColor: 'bg-error/10',
      borderColor: 'border-error/20',
      textColor: 'text-error',
      iconColor: 'text-error',
    },
  };

  const config = typeConfig[type];

  return (
    <div
      className={`
        relative p-4 border rounded-lg
        ${config.bgColor} ${config.borderColor}
        transition-all duration-250 ease-in-out
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <Icon
          name={config.icon}
          size="md"
          className={`flex-shrink-0 mt-0.5 ${config.iconColor}`}
        />
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className={`font-semibold mb-1 ${config.textColor}`}>
              {title}
            </h4>
          )}
          <div className={`text-sm ${config.textColor}`}>
            {children}
          </div>
        </div>
        
        {/* Close Button */}
        {onClose && (
          <button
            onClick={onClose}
            className={`
              flex-shrink-0 p-1 rounded-md
              hover:bg-white/20 transition-colors duration-150
              ${config.textColor}
            `.replace(/\s+/g, ' ').trim()}
            aria-label="Close alert"
          >
            <Icon name="x" size="sm" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
