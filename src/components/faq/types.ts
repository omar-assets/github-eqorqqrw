export interface FAQ {
  question: string;
  answer: string;
  details?: string[];
  links?: {
    text: string;
    url: string;
  }[];
}

export interface FAQCategory {
  name: string;
  description: string;
  faqs: FAQ[];
}