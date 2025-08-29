import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import OverviewSection from "@/components/overview-section";
import PlatformOverview from "@/components/platform-overview";
import PillarsSection from "@/components/pillars-section";
import VideoTimeline from "@/components/video-timeline";
import DataManagement from "@/components/DataManagement";
import DataGovernance from "@/components/DataGovernance";
import VideoCarousel from "@/components/video-caraousel";
import FeaturesSection from "@/components/features-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OverviewSection />
      <PlatformOverview />
      <PillarsSection />
      {/* <VideoTimeline />
      <DataManagement />
      <DataGovernance /> */}
      <VideoCarousel />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
