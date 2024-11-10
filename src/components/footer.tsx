import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill, RiLinkedinFill, RiTiktokFill } from "react-icons/ri";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#8391AA] text-white py-10">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
        <div className="lg:w-1/3 space-y-4 flex-shrink-0">
          <div className="flex items-center space-x-2">
            <img src="/pulseblack.png" alt="pulselogo" className="h-12" />
            <h1 className="text-black text-lg font-semibold">
              PULSE <span className="font-normal">ADVERTISING</span>
            </h1>
          </div>
          <p className="text-black">
            Get the latest <em>Influencer Marketing</em> news in your inbox
          </p>
          <div className="flex items-center bg-[#2F3546] rounded-full p-2 w-full max-w-xl">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent text-gray-400 px-4 py-2 outline-none flex-grow"
            />
            <button className="bg-[#88B8E0] text-black rounded-full p-2 flex items-center justify-center hover:bg-[#EDDED6]">
              ❤️
            </button>
          </div>
          <p className="font-medium text-[#2F3546]">
            hello@pulse-advertising.com
          </p>
        </div>

        <div className="lg:w-1/10 lg:flex flex-col items-end lg:items-start hidden">
          <h2 className="font-bold text-[#EDDED6] mb-6">Explore</h2>
          <ul className="text-[#2F3546] space-y-2 text-center lg:text-left">
            <li>
              <a href="" className="hover:text-[#EDDED6]">
                About
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[#EDDED6]">
                Teams
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[#EDDED6]">
                Service
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[#EDDED6]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:w-1/5 lg:flex flex-col items-start lg:items-start flex-shrink-0 hidden ">
          <h2 className="font-bold text-[#EDDED6] mb-6">Resources</h2>
          <ul className="text-[#2F3546] space-y-2">
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

      <div className="container mx-auto px-4 mt-10 border-t border-gray-800 pt-6 flex flex-col lg:flex-row justify-between items-center lg:items-center space-y-4 lg:space-y-0">
        <p className="text-[#2F3546] text-sm text-center lg:text-left">
          Part of Pulse Group &copy;2024 Pulse Advertising
          &nbsp;&nbsp;|&nbsp;&nbsp; Imprint &nbsp;&nbsp;|&nbsp;&nbsp; Privacy
        </p>
        <div className="flex space-x-6 text-2xl text-[#2F3546]">
          <Link
            href="https://www.instagram.com/pulseadvertising/"
            target="_blank"
          >
            <RiInstagramFill className="transform transition-transform duration-200 hover:scale-110" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/pulseadvertising"
            target="_blank"
          >
            <RiLinkedinFill className="transform transition-transform duration-200 hover:scale-110" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UC7Y4uAGwY2KinoVUyaULdhw"
            target="_blank"
          >
            <FaYoutube className="transform transition-transform duration-200 hover:scale-110" />
          </Link>
          <Link href="https://www.tiktok.com/@pulseadvertising" target="_blank">
            <RiTiktokFill className="transform transition-transform duration-200 hover:scale-110" />
          </Link>
          <Link href="mailto:hello@pulse-advertising.com" target="_blank">
            <IoMdMail className="transform transition-transform duration-200 hover:scale-110" />
          </Link>
        </div>
      </div>
    </footer>
  );
}