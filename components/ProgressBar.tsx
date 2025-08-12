import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'accent';
  showLabel?: boolean;
  labelPosition?: 'top' | 'bottom' | 'left' | 'right';
  animated?: boolean;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  size = 'md',
  variant = 'primary',
  showLabel = false,
  labelPosition = 'top',
  animated = true,
  className = '',
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  };
  
  const variantClasses = {
    primary: 'bg-primary',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',
    accent: 'bg-accent',
  };
  
  const labelPositionClasses = {
    top: 'mb-2',
    bottom: 'mt-2',
    left: 'mr-3',
    right: 'ml-3',
  };

  return (
    <div className={`${className}`}>
      {/* Label */}
      {showLabel && labelPosition === 'top' && (
        <div className={`flex justify-between text-sm text-ink-2 ${labelPositionClasses.top}`}>
          <span>Progress</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
      
      {/* Progress Bar Container */}
      <div className="flex items-center">
        {/* Left Label */}
        {showLabel && labelPosition === 'left' && (
          <div className={`text-sm text-ink-2 ${labelPositionClasses.left}`}>
            {Math.round(percentage)}%
          </div>
        )}
        
        {/* Progress Bar */}
        <div className={`flex-1 bg-panel-alt rounded-full overflow-hidden ${sizeClasses[size]}`}>
          <div
            className={`
              h-full ${variantClasses[variant]} rounded-full
              transition-all duration-500 ease-out
              ${animated ? 'animate-pulse' : ''}
            `.replace(/\s+/g, ' ').trim()}
            style={{ width: `${percentage}%` }}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={max}
            aria-label={`Progress: ${Math.round(percentage)}%`}
          />
        </div>
        
        {/* Right Label */}
        {showLabel && labelPosition === 'right' && (
          <div className={`text-sm text-ink-2 ${labelPositionClasses.right}`}>
            {Math.round(percentage)}%
          </div>
        )}
      </div>
      
      {/* Bottom Label */}
      {showLabel && labelPosition === 'bottom' && (
        <div className={`flex justify-between text-sm text-ink-2 ${labelPositionClasses.bottom}`}>
          <span>Progress</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
