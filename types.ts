
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceRate: number; // Hourly rate for this specific service type
}

export interface PricingPlan {
  name: string;
  price: string;
  hours: number;
  features: string[];
  recommended?: boolean;
  stripeLink?: string; // Add direct Stripe checkout link
}

export interface BookkeepingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  stripeLink?: string; // Add direct Stripe checkout link
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
