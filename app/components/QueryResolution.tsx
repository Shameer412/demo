"use client";
import React, { useState } from 'react';
import { Download, HelpCircle, Plus, Minus } from 'lucide-react';

const QueryResolution = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Default par 02 open rakhte hain jaisa image mein hai

  const faqs = [
    {
      id: "01",
      question: "HOW DO I AUTHORIZE A COLD-CHAIN FLEET DEPLOYMENT?",
      answer: "Authorization requires a multi-sig protocol signature from your regional logistics node. Ensure your hardware wallet is synced."
    },
    {
      id: "02",
      question: "ENCRYPTION PROTOCOLS FOR CROSS-BORDER TELEMETRY?",
      answer: "Titan Logistics utilizes AES-256 neural-grade encryption for all telemetry data streams. For cross-border transit, we deploy the 'Sentinel' protocol which ensures data sovereignty while maintaining real-time latency under 15ms."
    },
    {
      id: "03",
      question: "AUTOMATED SMART-CONTRACT DISPUTE RESOLUTION?",
      answer: "Disputes are handled via decentralized oracles that verify on-chain logistics data against physical sensor telemetry."
    },
    {
      id: "04",
      question: "API RATE LIMITS FOR HIGH-FREQUENCY TRADING?",
      answer: "Default limits are set to 5000 requests per second per node. High-frequency tiers can be unlocked via the enterprise dashboard."
    }
  ];

  return (
    <div className="bg-[#0a111a] min-h-screen text-white p-8 md:p-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* Left Side: Header Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              ACTIVE QUERY<br />RESOLUTION
            </h2>
            <div className="w-12 h-1 bg-[#39cb86]"></div>
          </div>

          <p className="text-[#94a3b8] text-lg leading-relaxed max-w-md">
            Our kinetic support system operates on a zero-latency protocol. Select a category to filter technical documentation or browse the global matrix.
          </p>

          <div className="space-y-4 pt-4">
            <button className="flex items-center gap-3 text-[#39cb86] font-semibold hover:opacity-80 transition-all uppercase tracking-wider text-sm">
              <Download size={20} />
              Download Documentation
            </button>
            <button className="flex items-center gap-3 text-[#39cb86] font-semibold hover:opacity-80 transition-all uppercase tracking-wider text-sm">
              <HelpCircle size={20} />
              Live Node Status
            </button>
          </div>
        </div>

        {/* Right Side: Accordion Grid */}
        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-l-4 transition-all duration-300 ${
                openIndex === index ? "border-[#39cb86] bg-[#16212e]" : "border-transparent bg-[#111c29]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
              >
                <div className="flex items-center gap-8">
                  <span className={`text-xl font-bold ${openIndex === index ? "text-[#39cb86]" : "text-[#39cb86]/50"}`}>
                    {faq.id}
                  </span>
                  <span className="text-sm md:text-base font-bold tracking-widest uppercase">
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <Minus className="text-[#39cb86]" size={20} />
                ) : (
                  <Plus className="text-[#39cb86]/50 group-hover:text-[#39cb86]" size={20} />
                )}
              </button>

              {/* Accordion Content */}
              <div className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}>
                <div className="px-16 pb-8 md:px-24">
                  <p className="text-[#94a3b8] leading-relaxed text-sm md:text-base border-t border-gray-700 pt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default QueryResolution;
