import React from "react";

const StatsSection = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-4xl border-t border-b border-gray-700 py-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-gray-800">100B+</p>
            <p className="text-gray-900 text-lg mt-2">views achieved</p>
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold text-gray-800">50K+</p>
            <p className="text-gray-900 text-lg mt-2">posts created</p>
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold text-gray-800">37+</p>
            <p className="text-gray-900 text-lg mt-2">countries reached</p>
          </div>

          <div className="text-center">
            <p className="text-4xl font-bold text-gray-800">9+</p>
            <p className="text-gray-900 text-lg mt-2">years as a market leader</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
