import { AboutHeader } from "../components/about/AboutHeader";
import { OurStory } from "../components/about/OurStory";
import { MissionVision } from "../components/about/MissionVision";
import { TeamSection } from "../components/about/TeamSection";
import { LearnMore } from "../components/about/LearnMore";

function AboutPage() {
  return (
    <>
      <AboutHeader />
      <OurStory />
      <MissionVision />
      <TeamSection />
      <LearnMore />
    </>
  );
}

export default AboutPage;