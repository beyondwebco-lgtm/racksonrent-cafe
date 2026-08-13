export interface TestimonialSample {
  id: string;
  quote: string;
  authorTitle: string;
  category: "Café Owner" | "Food Entrepreneur";
  location: string;
}

export const SAMPLE_TESTIMONIALS: TestimonialSample[] = [
  {
    id: "sample-1",
    quote: "Racks on Rent helped us turn an unused display corner inside our café into a steady extra income stream while bringing our customers unique packaged snacks from local creators.",
    authorTitle: "Specialty Café Owner",
    category: "Café Owner",
    location: "Hyderabad"
  },
  {
    id: "sample-2",
    quote: "Displaying our healthy snack bars on an eye-level shelf in a busy local café gave us instant retail exposure without the massive cost of opening our own storefront.",
    authorTitle: "Food Brand Founder",
    category: "Food Entrepreneur",
    location: "Vijayawada"
  },
  {
    id: "sample-3",
    quote: "A brilliant platform bridging popular local cafés with passionate food entrepreneurs looking for high-footfall display space to sell packaged products.",
    authorTitle: "Espresso Bar Manager",
    category: "Café Owner",
    location: "Bengaluru"
  }
];


