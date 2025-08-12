import React from 'react';
import Icon from './Icon';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'textarea' | 'select';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  options?: Array<{ value: string; label: string }>;
  rows?: number;
  icon?: string;
  iconPosition?: 'left' | 'right';
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  value = '',
  onChange,
  onBlur,
  error,
  required = false,
  disabled = false,
  className = '',
  options = [],
  rows = 4,
  icon,
  iconPosition = 'left',
}) => {
  const baseInputClasses = `
    w-full px-4 py-3
    border border-panel-alt
    rounded-lg
    bg-panel
    text-ink
    placeholder:text-ink-3
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
    disabled:opacity-50 disabled:cursor-not-allowed
    ${error ? 'border-error focus:ring-error focus:border-error' : ''}
  `;

  const iconClasses = icon ? 'pl-12' : '';

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            onBlur={onBlur}
            disabled={disabled}
            rows={rows}
            className={`${baseInputClasses} ${iconClasses} resize-vertical`}
          />
        );

      case 'select':
        return (
          <select
            name={name}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            onBlur={onBlur}
            disabled={disabled}
            className={`${baseInputClasses} ${iconClasses} cursor-pointer`}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      default:
        return (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            onBlur={onBlur}
            disabled={disabled}
            className={`${baseInputClasses} ${iconClasses}`}
          />
        );
    }
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Label */}
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label}
        {required && <span className="text-error ml-1">*</span>}
      </label>

      {/* Input Container */}
      <div className="relative">
        {/* Icon */}
        {icon && (
          <div className={`absolute top-1/2 transform -translate-y-1/2 ${
            iconPosition === 'left' ? 'left-4' : 'right-4'
          }`}>
            <Icon name={icon} size="md" color="var(--ink-3)" />
          </div>
        )}

        {/* Input */}
        {renderInput()}
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2 text-sm text-error">
          <Icon name="error" size="sm" color="var(--error)" />
          {error}
        </div>
      )}
    </div>
  );
};

export default FormField;
