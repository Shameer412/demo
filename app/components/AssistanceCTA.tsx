import React from 'react';

const AssistanceCTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="bg-[#213143] py-12 md:py-16 px-6 md:px-8 text-center rounded-sm border border-[#2d3a4b]">
          {/* Main Heading */}
          <h2 className="text-[#d8e8f8] text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
            Still Need Assistance?
          </h2>

          {/* Description Text */}
          <p className="text-[#89919b] text-sm md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Our Command Center technicians are available for manual override and direct operational support 24/7/365.
          </p>

          {/* Button */}
          <button className="bg-[#39cb86] hover:bg-[#2fb576] text-[#030712] font-bold py-4 px-10 rounded-sm uppercase tracking-widest text-sm transition-all duration-200">
            Initiate Comms
          </button>
        </div>
      </div>
    </section>
  );
};

export default AssistanceCTA;
