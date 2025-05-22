import { ButtonBaseProps } from './types';

// Style props type
type StyleProps = Omit<ButtonBaseProps, 'text'>;

// 모든 버튼의 공통 스타일
const baseStyles = `
  relative 
  inline-flex 
  items-center 
  justify-center 
  rounded-full 
  font-bold 
  transition-all 
  duration-300 
  will-change-transform
  hover:scale-[1.02]
`;

// 크기별 스타일
const sizeStyles = {
  sm: 'h-[40px] text-sm px-4',
  md: 'h-[52px] text-sm px-6',
  lg: 'h-[64px] text-base px-8'
};

// 종류별 스타일
const variantStyles = {
  primary: `
    bg-[#f5f4f3] 
    text-[#090909]
    shadow-[0_0_4px_0_rgba(0,0,0,0.05)_inset]
  `,
  secondary: `
    bg-[#0f3923] 
    text-white
    hover:bg-[#256d4a]
  `,
  outline: `
    border-2 
    border-[#0f3923] 
    text-[#0f3923]
    hover:bg-[#0f3923]
    hover:text-white
  `
};

export const getButtonStyles = ({
  variant = 'primary',
  size = 'md',
  className = ''
}: StyleProps) => {
  return `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${className}
  `.trim();
}; 