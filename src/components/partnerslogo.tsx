import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Partners() {
  return (
    <section className="border-t border-b border-black py-0 p-0 hidden md:block ">
      <Marquee>
        <div className="flex flex-row items-center justify-center gap-20 overflow-auto px-4 lg:px-0 py-0 space-x-24">
          <div className="flex flex-row items-center space-x-2">
            <Image
              src="/fblogo.png"
              alt="Facebook"
              width={50}
              height={0}
              className=" object-contain"
            />
            <span className="text-xs font-semibold flex flex-col">
              Marketing <span>Partner</span>
            </span>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <Image
              src="/iglogo.png"
              alt="Instagram"
              width={50}
              height={0}
              className="w-10 h-10 object-contain"
            />
            <span className="text-xs font-semibold flex flex-col">
              Instagram <span>Partner</span>
            </span>
          </div>

          <div className="flex flex-row items-center space-x-2">
            <Image
              src="/GPartnerlogo.png"
              alt="Google"
              width={90}
              height={0}
              className=" object-contain"
            />
          </div>
          <div className="flex flex-row items-center space-x-2">
            <Image
              src="/Forbeslogo.png"
              alt="Forbes"
              width={90}
              height={0}
              className="object-contain"
            />
          </div>

          <div className="flex flex-row items-center space-x-2">
            <Image
              src="/tedxlogo.png"
              alt="TEDx"
              width={80}
              height={0}
              className=" object-contain"
            />
          </div>
        </div>
      </Marquee>
    </section>
  );
}
