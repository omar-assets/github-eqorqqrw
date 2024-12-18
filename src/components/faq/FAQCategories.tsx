import { ScrollReveal } from "../ui/ScrollReveal";
import { Shield, DollarSign, Users, Settings } from "lucide-react";
import { generalFaqs, investmentFaqs, platformFaqs, securityFaqs } from "./data/faqData";
import { FAQAccordion } from "./FAQAccordion";

const categories = [
  {
    icon: Shield,
    title: "General Questions",
    description: "Basic information about our platform",
    faqs: generalFaqs
  },
  {
    icon: DollarSign,
    title: "Investment Process",
    description: "How to start investing with us",
    faqs: investmentFaqs
  },
  {
    icon: Settings,
    title: "Platform Features",
    description: "Understanding our tools and features",
    faqs: platformFaqs
  },
  {
    icon: Users,
    title: "Security & Compliance",
    description: "How we protect your investments",
    faqs: securityFaqs
  }
];

export function FAQCategories() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 200}>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
                <FAQAccordion items={category.faqs} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}