interface TooltipProps {
  isVisible: boolean;
  message: string;
}

const Tooltip = ({ isVisible, message }: TooltipProps) => {
  if (!isVisible) return null;
  
  return (
    <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2">
      <div className="relative flex items-center">
        <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 
          w-0 h-0 border-transparent
          border-t-[8px] border-t-[#374151] 
          border-x-[8px] border-b-0"
        />
        <div className="bg-[#374151] text-white text-sm rounded-lg py-2 px-4 w-64 shadow-lg">
          {message}
        </div>
      </div>
    </div>
  );
};

export default Tooltip; 