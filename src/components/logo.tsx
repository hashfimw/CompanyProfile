import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src={"/pulseblack.png"}
        alt="Pulse Advertising Logo"
        width={50}
        height={40}
      />
    </div>
  );
}
