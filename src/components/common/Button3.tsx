import Link from 'next/link';

interface ButtonProps {
  text: string;
  href: string;
  className?: string; // Optional: Allow additional custom classes
}

const Button3 = ({ text, href, className = '' }:ButtonProps) => {
  return (
    <Link
      href={href}
      className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-transform duration-300 group ${className}`}
    >
      <span className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full" />
      <span className="absolute top-1/2 left-0 w-full -translate-y-1/2 text-center text-sm font-bold text-black opacity-0 transform -translate-x-full transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        {text}
      </span>
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#0f3923] px-6 py-1 text-sm font-bold text-white transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-full">
        {text}
      </span>
    </Link>
  );
};

export default Button3;