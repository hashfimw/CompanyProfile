import React, { useEffect, useState } from "react";
import Image from "next/image";

const CenteredTextWithBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container mx-auto w-full h-screen flex items-center justify-center px-6 pt-32 lg:py-0 lg:px-0 relative">
      
      <div className="relative w-full h-full">
        <Image
          src={isMobile ? "/teamspulsemob.jpg" : "/teampagetop.jpg"} 
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-95 rounded-2xl" 
          priority
        />
      </div>

      
      <div
        className={`absolute text-center px-4 text-zinc-950 
          ${isMobile ? 'top-4' : 'top-auto '}`}
      >
        <h1 className="text-4xl md:text-6xl font-bold hover:scale-105 ">We give people</h1>
        <p className="text-xl md:text-2xl font-light italic mt-2 ">a sense of belonging.</p>
      </div>
    </div>
  );
};

export default CenteredTextWithBackground;
