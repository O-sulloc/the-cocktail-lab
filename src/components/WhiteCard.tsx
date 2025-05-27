import React from 'react';

interface WhiteCardProps {
  title: string;
  description: string;
  className?: string;
  minHeight?: number | string;
  maxHeight?: number | string;
  children?: React.ReactNode;
}

const WhiteCard: React.FC<WhiteCardProps> = ({
  title,
  description,
  className = '',
  minHeight,
  maxHeight,
  children,
}) => {
  // 반응형 min/maxHeight 기본값
  // 모바일: minHeight 220, maxHeight 320 / 데스크탑: minHeight 300, maxHeight 420
  const defaultMinHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? 220 : 300;
  const defaultMaxHeight = typeof window !== 'undefined' && window.innerWidth < 768 ? 320 : 420;

  return (
    <div
      className={`bg-white rounded-[2.5rem] shadow-xl p-6 md:p-12 flex flex-col items-center justify-start ${className}`}
      style={{
        minHeight: minHeight ?? defaultMinHeight,
        maxHeight: maxHeight ?? defaultMaxHeight,
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