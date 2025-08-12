import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  alignment = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const classes = `
    space-y-4
    ${alignmentClasses[alignment]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={classes}>
      <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-ink-2 leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
