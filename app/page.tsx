import Navbar from "@/components/Navbar";
import Hero from "@/components/Homepage/Hero";
import HeritageIntro from "@/components/Homepage/HeritageIntro";
import FeaturedMagajis from "@/components/Homepage/FeaturedMagajis";
import CompoundsPreview from "@/components/Homepage/CompoundsPreview";
import IleEkePreview from "@/components/Homepage/IleEkePreview";
import HeritageTimeline from "@/components/Homepage/HeritageTimeline";
import StoriesPreview from "@/components/Homepage/StoriesPreview";
import FinalCTA from "@/components/Homepage/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <Hero />

      <HeritageIntro />

      <FeaturedMagajis />

      <CompoundsPreview />

      <IleEkePreview />

      <HeritageTimeline />

      <StoriesPreview />

      <FinalCTA />

      <Footer />
    </main>
  );
}