import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TokenSection from "@/components/sections/TokenSection";
import TokenomicsSection from "@/components/sections/TokenomicsSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import TeamSection from "@/components/sections/TeamSection";
import TechnicalOverviewSection from "@/components/sections/TechnicalOverviewSection";
import BuySection from "@/components/sections/BuySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <TokenSection />
      <TokenomicsSection />
      <RoadmapSection />
      <TeamSection />
      <TechnicalOverviewSection />
      <BuySection />
    </>
  );
}
