"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import ContentServices from "../../components/ContentService";
import ContentServices2 from "../../components/ContentService2";
import ContentServices3 from "../../components/ContentService3";
import ContentServices4 from "../../components/ContentService4";

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
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  });

  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);


  const contentRef1 = useRef<HTMLDivElement>(null);
  const contentRef2 = useRef<HTMLDivElement>(null);
  const contentRef3 = useRef<HTMLDivElement>(null);
  const contentRef4 = useRef<HTMLDivElement>(null);


  const updateIndicator = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const firstTab = tabsRef.current[0];

   
    if (!firstTab) return;

    const containerRect = container.getBoundingClientRect();
    const { left, width } = firstTab.getBoundingClientRect();

    setIndicatorStyle({
      left: left - containerRect.left,
      width: width,
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    const mouseX = e.clientX - containerRect.left;
    const tabIndex = Math.floor((mouseX / containerRect.width) * tabs.length);


    requestAnimationFrame(() => {
      const tab = tabsRef.current[tabIndex];
      if (tab) {
        const { left, width } = tab.getBoundingClientRect();
        setIndicatorStyle({
          left: left - containerRect.left,
          width: width,
        });
        setHoveredTab(tabs[tabIndex].id);
      }
    });
  };

  const handleTabClick = (id: number) => {
    let targetRef = null;

    if (id === 1) {
      targetRef = contentRef1;
    } else if (id === 2) {
      targetRef = contentRef2;
    } else if (id === 3) {
      targetRef = contentRef3;
    } else if (id === 4) {
      targetRef = contentRef4;
    }

    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    updateIndicator();
  }, [updateIndicator]);

  return (
    <div className="container mx-auto flex flex-col items-center min-h-screen p-8 py-20">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold text-zinc-900">Influencer Marketing</h1>
        <p className="text-5xl text-gray-950 mt-2 mb-8">Services</p>
      </div>

      
      <div className="w-full max-w-5xl">
       
        <div className="flex flex-col space-y-4 md:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`text-center py-4 rounded-full text-lg font-medium transition duration-300 md:hidden lg:block ${
                hoveredTab === tab.id ? "bg-[#8391AA] text-zinc-900" : "bg-[#8391AA] text-zinc-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        
        <div
          ref={containerRef}
          className="relative hidden md:flex items-center justify-center h-[60px] w-auto rounded-full bg-[#8391AA] shadow-md overflow-hidden mt-16 px-2"
          style={{ minHeight: "60px" }}
          onMouseMove={handleMouseMove} 
        >
          <div
            className="absolute h-[80%] bg-[#88B8E0] p-4 rounded-full transition-all duration-300 shadow-lg md:mx-auto"
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
              onClick={() => handleTabClick(tab.id)} 
              className={`relative z-10 flex-1 text-center py-3 px-4 text-md font-medium transition duration-300 text-lg ${
                hoveredTab === tab.id
                  ? "text-zinc-900"
                  : "text-white hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="box h-40"></div>
      <div className="w-full max-w-7xl mt-20 border-t border-black"></div>

      <div ref={contentRef1}>
        <ContentServices index={0} />
      </div>
      <div ref={contentRef2}>
        <ContentServices2 index={2} />
      </div>
      <div ref={contentRef3}>
        <ContentServices3 index={1} />
      </div>
      <div ref={contentRef4}>
        <ContentServices4 index={3} />
      </div>
    </div>
  );
};

export default ServicesTabs;
