import { FAQ } from '../types';

export const popularQuestions: FAQ[] = [
  {
    question: "What is the minimum investment amount?",
    answer: "Our minimum investment starts at $100 for most opportunities, allowing you to build a diversified portfolio across multiple asset classes.",
    links: [
      {
        text: "View investment options",
        url: "/marketplace"
      }
    ]
  },
  {
    question: "How are returns distributed?",
    answer: "Returns are distributed through a combination of regular income payments and capital appreciation. The frequency and method of distribution vary by investment type.",
    links: [
      {
        text: "Learn about distributions",
        url: "/how-it-works#distributions"
      }
    ]
  },
  {
    question: "Is my investment secure?",
    answer: "Yes, we employ bank-grade security measures and are fully compliant with SEC regulations. All investments are protected through legal structures and insurance coverage.",
    links: [
      {
        text: "View security measures",
        url: "/security"
      }
    ]
  },
  {
    question: "How do I start investing?",
    answer: "Getting started is simple. Create an account, complete our verification process, and browse available investment opportunities. Our team is available to guide you through the process.",
    links: [
      {
        text: "Create account",
        url: "/register"
      }
    ]
  }
];