import Link from 'next/link';

// Define the props interface
interface ButtonProps {
  text: string;
  href: string;
  className?: string; // Optional: Allow additional custom classes
}

const Button2 = ({ text, href, className = '' }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-transform duration-300 hover:scale-105 group ${className}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#059669_0%,#065f46_10%,#065f46_90%,#059669_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-bold text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:shadow-[0_0_2rem_-0.5rem_#059669]">
        {text}
      </span>
    </Link>
  );
};

export default Button2;