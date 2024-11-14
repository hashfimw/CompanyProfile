import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill, RiLinkedinFill, RiTiktokFill } from "react-icons/ri";

import React from "react";
import Image from "next/image";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-[#8391AA] text-white py-10">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
        <div className="lg:w-1/3 space-y-4 flex-shrink-0">
          <div className="flex items-center space-x-2">
            <Logo/>
            <h1 className="text-black text-lg font-semibold">
              PALSE <span className="font-normal">ADVERTISING</span>
            </h1>
          </div>
          <p className="text-black font-normal">
            Get the latest <em>Influencer Marketing</em> news in your inbox
          </p>
          <div className="flex items-center bg-[#2F3546] rounded-full p-2 w-full max-w-xl">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent text-gray-400 px-4 py-2 outline-none flex-grow"
            />
            <button className="bg-[#88B8E0] text-black rounded-full p-2 flex items-center justify-center hover:bg-[#71b0e4]">
              ❤️
            </button>
          </div>
          <p className="font-normal text-black">
            hello@palse-advertising.com
          </p>
        </div>

        <div className="lg:w-1/10 lg:flex flex-col items-end lg:items-start hidden">
          <h1 className="font-bold text-black mb-6">Explore</h1>
          <ul className="text-black font-medium space-y-2 text-center lg:text-left">
            <li>
              <a href="/about" className="hover:text-[#EDDED6]">
                About
              </a>
            </li>
            <li>
              <a href="/teams" className="hover:text-[#EDDED6]">
                Teams
              </a>
            </li>
            <li>
              <a href="/palse-services" className="hover:text-[#EDDED6]">
                Service
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#EDDED6]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:w-1/5 lg:flex flex-col items-start lg:items-start flex-shrink-0 hidden ">
          <h1 className="font-bold text-black mb-6">Resources</h1>
          <ul className="text-black font-medium space-y-2">
            <li>
              <a href="#" className="hover:text-[#EDDED6]">
                Industry reports
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EDDED6]">
                Webinars
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EDDED6]">
                Whitepapers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EDDED6]">
                Social Media News
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10 border-t w-[90%] lg:w-auto border-gray-800 pt-6 flex flex-col lg:flex-row justify-between items-center lg:items-center space-y-4 lg:space-y-0">
        <p className="text-black text-sm text-center font-medium lg:text-left">
          Part of Pulse Group &copy;2024 Palse Advertising 
          &nbsp;&nbsp;|&nbsp;&nbsp; Imprint &nbsp;&nbsp;|&nbsp;&nbsp; Privacy
        </p>
        <div className="flex space-x-6 text-2xl text-[#2F3546]">
          <Link
            href="https://www.instagram.com/pulseadvertising/"
            target="_blank"
            aria-label="Instagram"
          >
            <RiInstagramFill className="transform transition-transform duration-200 hover:scale-110" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/pulseadvertising"
            target="_blank" aria-label="LinkedIn"
          >
            <RiLinkedinFill className="transform transition-transform duration-200 hover:scale-110" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UC7Y4uAGwY2KinoVUyaULdhw"
            target="_blank" aria-label="Youtube"
          >
            <FaYoutube className="transform transition-transform duration-200 hover:scale-110" />
          </Link>
          <Link href="https://www.tiktok.com/@pulseadvertising" target="_blank" aria-label="Tiktok">
            <RiTiktokFill className="transform transition-transform duration-200 hover:scale-110" />
          </Link>
          <Link href="mailto:hello@pulse-advertising.com" target="_blank" aria-label="Mail">
            <IoMdMail className="transform transition-transform duration-200 hover:scale-110" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
