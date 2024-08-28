import Cards from "@/components/Cards";
import ComplementCards from "@/components/ComplementCards";
import ComplementDesc from "@/components/ComplementDesc";
import HeroSection from "@/components/HeroSection";
import LogicGatesDesc from "@/components/LogicGatesDesc";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 py-10">
      <HeroSection />
      <Cards />
      <ComplementDesc />
      <ComplementCards />
      <LogicGatesDesc />
    </main>
  );
}
