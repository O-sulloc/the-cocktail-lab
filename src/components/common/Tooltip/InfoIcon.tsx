import Tooltip from './index';

interface InfoIconProps {
  id: string;
  isHoverDevice: () => boolean;
  activeTooltip: string | null;
  setActiveTooltip: (id: string | null) => void;
  message: string;
}

const InfoIcon = ({ id, isHoverDevice, activeTooltip, setActiveTooltip, message }: InfoIconProps) => {
  const isActive = activeTooltip === id;

  return (
    <div className="relative ml-2">
      <div 
        className="cursor-help info-icon relative"
        onClick={(e) => {
          e.stopPropagation();
          if (!isHoverDevice()) {
            setActiveTooltip(isActive ? null : id);
          }
        }}
        onMouseEnter={() => {
          if (isHoverDevice()) {
            setActiveTooltip(id);
          }
        }}
        onMouseLeave={() => {
          if (isHoverDevice()) {
            setActiveTooltip(null);
          }
        }}
      >
        <svg className="w-6 h-6 text-emerald-600 hover:text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="9" strokeWidth="1"/>
          <path 
            d="M12 16v-4m0-4h.01" 
            strokeWidth="2" 
            strokeLinecap="round"
            className="text-white"
          />
        </svg>
      </div>
      <Tooltip 
        isVisible={isActive}
        message={message}
      />
    </div>
  );
};

export default InfoIcon; 