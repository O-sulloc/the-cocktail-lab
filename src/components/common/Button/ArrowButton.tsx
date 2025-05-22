import Link from 'next/link';

// Define the props interface
interface ButtonProps {
  text: string;
  href: string;
  className?: string;  // Optional: Allow additional custom classes
}

const ArrowButton = ({ text, href, className = '' }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`relative flex items-center h-[52px] bg-[#f5f4f3] rounded-[50px] text-[#090909] font-bold text-sm overflow-hidden shadow-[0_0_4px_0_rgba(0,0,0,0.05)_inset] cursor-pointer transition-colors duration-300 group p-[4px] inline-flex ${className}`}
    >
      {/* Expanding background */}
      <div className="absolute top-[4px] left-[4px] w-[44px] h-[44px] bg-[#0f3923] rounded-[50px] transition-all duration-300 group-hover:w-[calc(100%-8px)]" />
      
      {/* Circle with arrow */}
      <div className="relative flex items-center justify-center w-[44px] h-[44px] z-10">
        <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
      
      {/* Text */}
      <span className="relative z-10 pr-5 pl-2 text-sm transition-colors duration-300 group-hover:text-white">
        {text}
      </span>
    </Link>
  );
};

export default ArrowButton;