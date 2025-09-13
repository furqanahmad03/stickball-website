import CallToAction from "@/components/CallToAction";
import HeroSection from "@/components/HeroSection";
import FeatureTiles from "@/components/FeatureTiles";
import PressHighlights from "@/components/PressHighlights";
import Testimonials from "@/components/Testimonials";
import WhoWeServe from "@/components/WhoWeServe";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Testimonials />
      <WhoWeServe />
      <FeatureTiles />
      <PressHighlights />
      <CallToAction />
    </>
  );
}
