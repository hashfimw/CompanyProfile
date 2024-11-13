import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto overflow-hidden flex flex-col-1 justify-center py-24">
      <div className="w-full max-w-3xl p-8 space-y-6">
        <h1 className="text-6xl font-bold text-center pb-10">
          Lets <span className="italic">talk!</span>
        </h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="First name"
            className="w-full p-3 border rounded-md bg-[#88B8E0] focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-full p-3 border rounded-md bg-[#88B8E0] focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-md bg-[#88B8E0] focus:outline-none focus:ring-2 focus:ring-black"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Company"
              className="w-full p-3 border rounded-md bg-[#88B8E0] focus:outline-none focus:ring-2 focus:ring-black"
            />
            <select className="w-full p-3 border rounded-md bg-[#88B8E0] focus:outline-none focus:ring-2 focus:ring-black">
              <option value="">Country</option>
              <option value="">English</option>
              <option value="">Papua Nugigi</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4" />
              <span>
                You agree to subscribe to our influencer marketing newsletters
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4" />
              <span>
                You agree that we may process your data to answer your inquiry
                <span className="text-red-500">*</span>
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
