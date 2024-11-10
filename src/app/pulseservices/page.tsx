"use client";
import React, { useState, useRef } from "react";

type Tab = {
  id: number;
  label: string;
};

const tabs: Tab[] = [
  { id: 1, label: "Social Media Consulting" },
  { id: 2, label: "Influencer Marketing" },
  { id: 3, label: "Paid Social Advertising" },
  { id: 4, label: "Social Media Management" },
];

const ServicesTabs = () => {
  const [hoveredTab, setHoveredTab] = useState(1);
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
  }>({
    left: 0,
    width: 0,
  });

  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateIndicator = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    const mouseX = e.clientX - containerRect.left;

    const tabIndex = Math.floor((mouseX / containerRect.width) * tabs.length);

    const tab = tabsRef.current[tabIndex];
    if (tab) {
      const { left, width } = tab.getBoundingClientRect();
      setIndicatorStyle({
        left: left - containerRect.left,
        width: width,
      });
      setHoveredTab(tabs[tabIndex].id);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 py-20">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold text-[#2F3546]">
          Influencer Marketing
        </h1>
        <p className="text-5xl text-gray-500 mt-2">Services</p>
      </div>

      <div
        ref={containerRef}
        className="relative flex items-center justify-center w-full max-w-5xl p-2 h-[60px] rounded-full bg-[#8391AA] shadow-md overflow-hidden mt-16 "
        onMouseMove={updateIndicator}
      >
        <div
          className="absolute h-[80%] bg-[#88B8E0] p-2 rounded-full transition-all duration-300 shadow-lg"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
          }}
        ></div>

        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(el) => {
              tabsRef.current[index] = el;
            }}
            onMouseEnter={() => setHoveredTab(tab.id)}
            className={`relative z-10 flex-1 text-center py-3 px-4 text-md font-medium transition duration-300 ${
              hoveredTab === tab.id
                ? "text-[#2F3546]"
                : "text-[#EDDED6] hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="box h-40"></div>
      <div className="w-full max-w-7xl mt-20 border-t border-black"></div>
    </div>
  );
};

export default ServicesTabs;
