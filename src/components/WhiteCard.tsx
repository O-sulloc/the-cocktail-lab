import React from 'react';

interface WhiteCardProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

const WhiteCard: React.FC<WhiteCardProps> = ({
  title,
  description,
  className = '',
  children,
}) => {
  // Remove window.innerWidth logic and use Tailwind classes instead
  return (
    <div
      className={`bg-white rounded-[2.5rem] shadow-xl p-6 md:p-12 flex flex-col items-center justify-start min-h-[220px] md:min-h-[300px] max-h-[320px] md:max-h-[420px] ${className}`}
      style={{
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      {children && (
        <div className="w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-6 flex items-center justify-center">
          {children}
        </div>
      )}
      <h4 className="text-lg md:text-2xl font-extrabold text-[#184C36] text-center mb-2 md:mb-3">{title}</h4>
      <p className="text-black text-center text-sm md:text-lg">
        {description}
      </p>
    </div>
  );
};

export default WhiteCard; 