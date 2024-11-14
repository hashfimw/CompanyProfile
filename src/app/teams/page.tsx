"use client";
import CenteredTextWithBackground from "@/components/CenteredTextImage";
import Loading from "@/components/loading";
import { MotionText, textVariants2 } from "@/components/motion";
import { useState, useEffect } from "react";

// Define the Person interface to specify the structure of the fetched data
interface Person {
  login: {
    uuid: string;
  };
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
  email: string;
}

export default function Teams() {
  const [people, setPeople] = useState<Person[]>([]); // Use the Person type for the array
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();
        setPeople(data.results); 
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <MotionText initial="hidden" animate="visible" variants={textVariants2}>
        <CenteredTextWithBackground />
      </MotionText>

      {/* Introduction section */}
      <div className="container py-12 sm:py-16 text-center mx-auto px-6">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
        Our People, Our Passion
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
        Behind every successful campaign is a team of talented, driven people. At Palse Advertising, 
        we believe in harnessing creativity, insight, and innovation to produce powerful results. 
        Meet the minds and personalities who make Pulse Advertising a leader in the industry, 
        working tirelessly to elevate brands and drive success.
        </p>
      </div>

      {/* Team grid */}
      <div className="py-10 sm:py-16 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul
            role="list"
            className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:pb-20"
          >
            {people.map((person) => (
              <li key={person.login.uuid} className="flex flex-col items-center group">
                <img
                  alt={`${person.name.first} ${person.name.last}`}
                  src={person.picture.medium}
                  className="h-20 w-20 rounded-full border-2 border-gray-200 shadow-xl hover:scale-105"
                />
                <div className="text-center mt-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {`${person.name.first} ${person.name.last}`}
                  </h3>
                  {/* Email appears only on hover */}
                  <p className="text-xs text-black opacity-15 group-hover:opacity-100 transition-opacity duration-300">
                    {person.email}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
