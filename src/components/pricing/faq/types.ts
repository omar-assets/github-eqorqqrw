export interface FAQLink {
  text: string;
  url: string;
}

export interface FAQ {
  question: string;
  answer: string;
  links?: FAQLink[];
}