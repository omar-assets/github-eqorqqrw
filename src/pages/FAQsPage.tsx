import { BackgroundPattern } from '../components/ui/BackgroundPattern';
import { FAQHero } from '../components/faq/FAQHero';
import { FAQCategories } from '../components/faq/FAQCategories';
import { SearchFAQ } from '../components/faq/SearchFAQ';
import { PopularQuestions } from '../components/faq/PopularQuestions';
import { ContactSupport } from '../components/faq/ContactSupport';

function FAQsPage() {
  return (
    <>
      <BackgroundPattern variant="primary">
        <FAQHero />
      </BackgroundPattern>
      <SearchFAQ />
      <FAQCategories />
      <PopularQuestions />
      <ContactSupport />
    </>
  );
}

export default FAQsPage;