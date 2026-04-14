import React from 'react';
import { Search } from 'lucide-react'; // Icon library install karna zaroori hai

const GlobalSupportMatrix = () => {
  return (
    // Main Wrapper Container
    <div className="bg-[#020617] min-h-screen p-8 md:p-16 lg:p-24 font-sans text-[#1a1c1e]">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Top Section */}
        <div className="space-y-6">

          {/* Label: Support Infrastructure (Green text) */}
          <p className="text-[#39cb86] text-sm md:text-base font-medium uppercase tracking-[0.15em]">
            Support Infrastructure
          </p>

          {/* Heading: GLOBAL SUPPORT MATRIX. (Darker text for white background) */}
          <h1 className="text-[#1e293b] text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-tight tracking-tight">
            GLOBAL SUPPORT<br /> MATRIX.
          </h1>

          {/* Subheading/Description (Greyish text) */}
          <div className="max-w-3xl space-y-2">
            <p className="text-[#89919b] text-base md:text-lg lg:text-xl font-normal leading-relaxed">
              Navigate the kinetic architecture of Titan's global logistics network.
            </p>
            <p className="text-[#89919b] text-base md:text-lg lg:text-xl font-normal leading-relaxed">
              Resolve protocols, access API endpoints, and optimize your operational flow.
            </p>
          </div>
        </div>

        {/* Search Bar Section */}
        <div className="w-full max-w-4xl pt-8">
          <div className="relative">
            {/* Search Icon (Absolute positioned) */}
            <Search
              className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#39cb86]"
              strokeWidth={1.5}
            />

            {/* Input Field (Dark background) */}
            <input
              type="text"
              placeholder="QUERY PROTOCOLS (E.G. 'API ENCRYPTION')"
              className="w-full h-16 bg-[#2d3a4b] text-white text-base font-medium pl-16 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#39cb86]/50 placeholder:text-[#586475] placeholder:uppercase placeholder:tracking-wider placeholder:text-sm"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default GlobalSupportMatrix;
