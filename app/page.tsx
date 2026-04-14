import Image from "next/image";
import Navbar from "@/components/Navbar";
import GlobalSupportMatrix from '@/components/GlobalSupportMatrix';
import ProtocolCards from '@/components/ProtocolCards';
import Querry from '@/components/QueryResolution';
import AssistanceCTA from '@/components/AssistanceCTA';
export default function Home() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />
      <main className="py-8">
      <GlobalSupportMatrix />
      <ProtocolCards />
      <Querry/>
      <AssistanceCTA/>
      </main>
    </div>
  );
}
