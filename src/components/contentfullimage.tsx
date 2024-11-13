import React, { useEffect, useState } from "react";
import Image from "next/image";

const CenteredTextWithBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the screen width is mobile-sized
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint if needed
    };

    // Check initial screen width and set event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background image with conditional rendering for mobile or desktop */}
      <Image
        src={isMobile ? "/teamspulsemob.jpg" : "/teampagetop.jpg"} // Replace with the actual paths to your images
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="opacity-95" // Optional: Adds a slight dark overlay effect
      />

      {/* Centered text */}
      <div className="absolute text-center px-4 text-zinc-950 hidden md:block">
        <h1 className="text-4xl md:text-6xl font-bold">We give people</h1>
        <p className="text-xl md:text-2xl font-light italic mt-2">a sense of belonging.</p>
      </div>
    </div>
  );
};

export default CenteredTextWithBackground;
