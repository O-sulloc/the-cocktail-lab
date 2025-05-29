import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  alt?: string;
}

const Hero = ({ title, subtitle, backgroundImage, alt }: HeroProps) => {
  return (
    <header className="relative w-full min-h-[50vh] flex items-center justify-center pt-24 mb-20">
      <Image
        src={backgroundImage}
        alt={alt || title} // alt가 없으면 title 사용
        fill
        className="object-cover"
        priority // LCP(Largest Contentful Paint) 최적화
      />
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/60" />
      {/* 텍스트 컨텐츠 */}
      <div className="relative z-10 text-center w-full px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4" style={{ fontFamily: 'Caviar Dreams' }}>
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>
    </header>
  );
};

export default Hero;
