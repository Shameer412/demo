import React from 'react';
// Lucide React Icons install karna zaroori hai: npm install lucide-react
import { Bot, CreditCard, ShieldCheck, TerminalSquare } from 'lucide-react';

const ProtocolCards = () => {
  // --- Data Array (Clean code ke liye) ---
  // Aap future mein is data ko direct fetch bhi kar sakte hain.
  const protocolData = [
    {
      icon: Bot,
      number: '01',
      title: 'Rental Process',
      description: 'Fleet deployment protocols and hardware lifecycle management.',
    },
    {
      icon: CreditCard,
      number: '02',
      title: 'Billing & Protocol',
      description: 'Financial reconciliation and automated smart-contract auditing.',
    },
    {
      icon: ShieldCheck,
      number: '03',
      title: 'Security',
      description: 'Data sovereignty, biometric validation, and neural-encryption.',
    },
    {
      icon: TerminalSquare,
      number: '04',
      title: 'API Integration',
      description: 'Webhooks, RESTful endpoints, and real-time telemetry streaming.',
    },
  ];

  return (
    // Main Container (Image background matches)
    <div className="pt-4 pb-12 md:pt-8 md:pb-20 font-sans">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Grid Container (4 columns on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Map through the data array */}
          {protocolData.map((item, index) => {
            const Icon = item.icon; // Get the specific icon component

            return (
              // Individual Card
              <div
                key={index}
                className="bg-[#1e293b] p-8 border border-[#2d3a4b] group hover:border-[#39cb86] transition-all duration-300 ease-in-out"
              >
                {/* Top Row: Icon and Number */}
                <div className="flex justify-between items-start mb-12">
                  {/* Icon (Green, dynamic) */}
                  <div className="p-3 border border-dashed border-[#2d3a4b] group-hover:border-[#39cb86] transition-colors">
                    <Icon className="w-8 h-8 text-[#39cb86]" strokeWidth={1.5} />
                  </div>

                  {/* Number (Muted gold/dark greenish yellow) */}
                  <span className="text-[#a1a72a]/70 text-5xl font-extrabold tracking-tighter opacity-80">
                    {item.number}
                  </span>
                </div>

                {/* Card Content */}
                <div className="space-y-4 pt-4 border-t border-[#2d3a4b]">
                  {/* Title (Off-white/light blue) */}
                  <h3 className="text-[#f1f5f9] text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description (Grey/blueish text) */}
                  <p className="text-[#94a3b8] text-base font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProtocolCards;
