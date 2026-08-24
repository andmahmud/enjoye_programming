import { Hero } from "@/components/home/hero";
import { LatestTutorials } from "@/components/home/latest-tutorials";
import { LearnDevelopment } from "@/components/home/learn-development";
import { MonetizationSection } from "@/components/home/monetization-section";
import { PopularTopics } from "@/components/home/popular-topics";
import { ToolsSection } from "@/components/home/tools-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PopularTopics />
      <LearnDevelopment />
      <MonetizationSection />
      <ToolsSection />
      <LatestTutorials />
    </main>
  );
}
