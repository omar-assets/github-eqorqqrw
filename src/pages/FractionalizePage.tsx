import { BackgroundPattern } from '../components/ui/BackgroundPattern';
import { FractionalizeHero } from '../components/fractionalize/FractionalizeHero';
import { AssetTypes } from '../components/fractionalize/AssetTypes';
import { Process } from '../components/Process';
import { ContactCTA } from '../components/ContactCTA';

function FractionalizePage() {
  return (
    <>
      <BackgroundPattern variant="primary">
        <FractionalizeHero />
      </BackgroundPattern>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Fractionalization Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our range of fractionalization options designed for different asset classes. 
              Each option comes with professional management and comprehensive support.
            </p>
          </div>
          <AssetTypes />
        </div>
      </section>

      <Process />
      <ContactCTA />
    </>
  );
}

export default FractionalizePage;