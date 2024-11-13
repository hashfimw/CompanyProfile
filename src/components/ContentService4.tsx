// File: components/ContentServices.tsx
"use client";

import { useEffect, useState } from "react";
import { getPulseText } from "@/libs/pulsetext";
import { IPulseText } from "@/types/text";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import ExpandableSection from "@/components/ExpandableSection";

interface ContentServicesProps {
  index: number;
}

export default function ContentServices4({ index }: ContentServicesProps) {
  const [pulseText, setPulseText] = useState<IPulseText[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<null | number>(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await getPulseText();
        setPulseText(result);
      } catch  {
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  
  if (!pulseText || pulseText.length <= index) {
    return <div>No content available</div>;
  }

  
  const contentData = pulseText[index]?.fields;

  
  const titleMain = contentData?.title || "Social Media Consulting";
  const childTitle = contentData?.childtitle || "to make you win on market share.";
  const Content = contentData?.content || "We bring 10+ years of experience...";
  const Contitle = contentData?.conTitle || "Benchmarking";
  const Content1 = contentData?.content1 || "Detailed information about Benchmarking.";
  const Contitle2 = contentData?.contitle2 || "Actionable guidelines";
  const Content2 = contentData?.content2 || "Detailed information about Actionable guidelines.";
  const Contitle3 = contentData?.contitle3 || "Health checks";
  const Content3 = contentData?.content3 || "Detailed information about Health checks.";

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container flex flex-col md:flex-row items-start justify-center py-20 space-y-8 md:space-y-0 md:space-x-12">
      <div className="container hidden lg:block justify-center items-center max-w-2xl justify-items-center pt-14 mr-16 ">
        <Image
          src="/sosial.jpg"
          alt="Chart Pulse"
          width={550}
          height={550}
          className="object-cover rounded-3xl border border-blue-300"
        />
      </div>
      <div className="flex flex-col max-w-xl space-y-6">
        <h1 className="text-4xl font-bold text-black">{titleMain}</h1>
        <h1 className="italic text-2xl text-gray-600">
          {documentToReactComponents(childTitle)}
        </h1>
        <h1 className="text-gray-700 text-lg">
          {documentToReactComponents(Content)}
        </h1>

        <div className="space-y-4">
          <ExpandableSection
            title={Contitle}
            content={Content1}
            index={0}
            expandedIndex={expandedIndex}
            toggleExpand={toggleExpand}
          />
          <ExpandableSection
            title={Contitle2}
            content={Content2}
            index={1}
            expandedIndex={expandedIndex}
            toggleExpand={toggleExpand}
          />
          <ExpandableSection
            title={Contitle3}
            content={Content3}
            index={2}
            expandedIndex={expandedIndex}
            toggleExpand={toggleExpand}
          />
        </div>
      </div>

    </div>
  );
}
