import React from "react";

interface ImageCardProps {
  image: string;
  title: string;
  description: string;
  overlayColor?: string; // e.g. 'bg-black/70'
  gradientOverlay?: string; // e.g. 'bg-gradient-to-r from-black/60 to-transparent'
  children?: React.ReactNode;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  title,
  description,
  overlayColor = "bg-black/80",
  gradientOverlay = "bg-gradient-to-r from-black/60 to-transparent",
  children,
  className = "",
}) => {
  return (
    <div
      className={`relative rounded-[16px] overflow-hidden aspect-[1/1] shadow-lg bg-gray-900 ${className}`}
    >
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        draggable={false}
      />
      {/* Color overlay */}
      <div className={`absolute inset-0 z-10 ${overlayColor}`} style={{ opacity: 0.7 }} />
      {/* Gradient overlay */}
      <div className={`absolute inset-0 z-20 ${gradientOverlay}`} style={{ opacity: 0.5 }} />
      {/* Content */}
      <div className="relative z-30 flex flex-col items-start justify-end h-full p-8">
        <div>
          <h3 className="text-white text-2xl lg:text-3xl font-bold mb-4 drop-shadow-lg">{title}</h3>
          <p className="text-white text-lg lg:text-xl font-normal mb-4 drop-shadow-md">{description}</p>
        </div>
        {children && <div className="mt-4">{children}</div>}
      </div>
    </div>
  );
};

export default ImageCard;