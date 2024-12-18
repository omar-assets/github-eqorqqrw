export interface PlanPrice {
  monthly: number;
  annual: number;
}

export interface Plan {
  name: string;
  price: PlanPrice;
  recommended?: boolean;
}

export interface Feature {
  name: string;
  tooltip?: string;
  values: {
    [key: string]: boolean | string | number | null;
  };
}

export interface FeatureCategory {
  name: string;
  features: Feature[];
}

export interface PricingData {
  plans: Plan[];
  categories: FeatureCategory[];
}