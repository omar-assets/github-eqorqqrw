import { Hero } from '../components/Hero';
import { KeyBenefits } from '../components/benefits/KeyBenefits';
import { FeatureShowcase } from '../components/features/FeatureShowcase';
import { Process } from '../components/Process';
import { CallToAction } from '../components/cta/CallToAction';
import { Trust } from '../components/Trust';

export function HomePage() {
  return (
    <>
      <Hero />
      <KeyBenefits />
      <FeatureShowcase />
      <Process />
      <CallToAction />
      <Trust />
    </>
  );
}

export default HomePage;