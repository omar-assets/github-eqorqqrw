import { BackgroundPattern } from '../components/ui/BackgroundPattern';
import { HowItWorksHero } from '../components/how-it-works/HowItWorksHero';
import { FractionalizationTypes } from '../components/fractionalization/explanations/FractionalizationTypes';
import { HowItWorksSection } from '../components/how-it-works/HowItWorksSection';
import { InvestmentProcess } from '../components/process/InvestmentProcess';
import { GetStartedCTA } from '../components/cta/GetStartedCTA';

export function HowItWorksPage() {
  return (
    <>
      {/* 1. "Your Path..." section */}
      <BackgroundPattern variant="primary">
        <HowItWorksHero />
      </BackgroundPattern>

      {/* 2. "Understanding Asset Fractionalization..." section */}
      <FractionalizationTypes />

      {/* 3. "Start Investing in three..." section */}
      <HowItWorksSection />

      {/* 4. "Investment Process..." section */}
      <InvestmentProcess />

      {/* 5. "Ready to begin..." section */}
      <GetStartedCTA />
    </>
  );
}

export default HowItWorksPage;