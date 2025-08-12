import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  delay = 200,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      if (triggerRef.current && tooltipRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        
        let x = 0;
        let y = 0;
        
        switch (position) {
          case 'top':
            x = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
            y = triggerRect.top - tooltipRect.height - 8;
            break;
          case 'bottom':
            x = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
            y = triggerRect.bottom + 8;
            break;
          case 'left':
            x = triggerRect.left - tooltipRect.width - 8;
            y = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
            break;
          case 'right':
            x = triggerRect.right + 8;
            y = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
            break;
        }
        
        setCoords({ x, y });
        setIsVisible(true);
      }
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
  };

  const arrowClasses = {
    top: 'top-full left-1/2 transform -translate-x-1/2 border-t-panel-alt',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-b-panel-alt',
    left: 'left-full top-1/2 transform -translate-y-1/2 border-l-panel-alt',
    right: 'right-full top-1/2 transform -translate-y-1/2 border-r-panel-alt',
  };

  return (
    <div
      ref={triggerRef}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      className="inline-block"
    >
      {children}
      
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`
            absolute z-50 px-3 py-2 text-sm
            bg-panel border border-panel-alt rounded-lg shadow-lg
            text-ink whitespace-nowrap
            transition-all duration-250 ease-in-out
            animate-in fade-in-0 zoom-in-95
            ${positionClasses[position]}
            ${className}
          `.replace(/\s+/g, ' ').trim()}
          style={{
            left: coords.x,
            top: coords.y,
          }}
        >
          {content}
          
          {/* Arrow */}
          <div
            className={`
              absolute w-0 h-0 border-4 border-transparent
              ${arrowClasses[position]}
            `.replace(/\s+/g, ' ').trim()}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
