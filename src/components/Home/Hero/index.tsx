import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";

interface HeroProps {
  backgroundImage?: string;
  className?: string;
  height?: string;
}

const Hero = ({ 
  backgroundImage = "/images/hero/sofa-1.webp",
  className = "",
  height = "h-screen"
}: HeroProps) => {
  const bgStyle = {
    backgroundImage: `url('${backgroundImage}')`,
  };

  return (
    <section 
      className={`overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-cover bg-center ${height} ${className}`}
      style={bgStyle}
    ></section>
  );
};

export default Hero;
