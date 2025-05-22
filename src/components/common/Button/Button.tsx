import { ButtonProps } from './types';
import { getButtonStyles } from './styles';

const Button = (props: ButtonProps) => {
  // Discriminated union pattern으로 타입 안전성 확보
  const { text, className = '', variant = 'primary', size = 'md' } = props;
  const styles = getButtonStyles({ variant, size, className });

  // Link variant
  if ('href' in props) {
    return (
      <a
        href={props.href}
        className={`
          ${styles}
          group
          overflow-hidden
        `}
      >
        {/* Sliding background effect */}
        <span className="
          absolute 
          inset-0 
          w-0 
          bg-white 
          transition-[width] 
          duration-300 
          ease-in-out 
          group-hover:w-full
        " />

        {/* Text layers */}
        <span className="relative flex items-center justify-center w-full overflow-hidden">
          <span className="
            absolute 
            w-full
            text-center 
            opacity-0 
            transform 
            -translate-x-full 
            transition-all 
            duration-300 
            group-hover:opacity-100 
            group-hover:translate-x-0
            text-[#0f3923]
          ">
            {text}
          </span>

          <span className="
            w-full
            text-center
            transform
            transition-all 
            duration-300 
            group-hover:opacity-0 
            group-hover:translate-x-full
          ">
            {text}
          </span>
        </span>
      </a>
    );
  }

  // Button variant
  return (
    <button
      onClick={props.onClick}
      className={`
        ${styles}
        group
        overflow-hidden
      `}
    >
      {/* Sliding background effect */}
      <span className="
        absolute 
        inset-0 
        w-0 
        bg-white 
        transition-[width] 
        duration-300 
        ease-in-out 
        group-hover:w-full
      " />

      {/* Text layers */}
      <span className="relative flex items-center justify-center w-full overflow-hidden">
        <span className="
          absolute 
          w-full
          text-center 
          opacity-0 
          transform 
          -translate-x-full 
          transition-all 
          duration-300 
          group-hover:opacity-100 
          group-hover:translate-x-0
          text-[#0f3923]
        ">
          {text}
        </span>

        <span className="
          w-full
          text-center
          transform
          transition-all 
          duration-300 
          group-hover:opacity-0 
          group-hover:translate-x-full
        ">
          {text}
        </span>
      </span>
    </button>
  );
};

export default Button; 