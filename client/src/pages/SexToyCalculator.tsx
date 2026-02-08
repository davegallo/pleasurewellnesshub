import CalculatorTemplate, { Question, CalculatorResult } from "@/components/CalculatorTemplate";

const questions: Question[] = [
  {
    id: "q1",
    question: "What is your experience level with pleasure products?",
    subtitle: "We'll tailor recommendations to your comfort level",
    options: [
      { value: "experienced", label: "Experienced - I own and use several products", score: 4 },
      { value: "some", label: "Some experience - I've tried a few", score: 3 },
      { value: "beginner", label: "Beginner - I've tried one or two", score: 2 },
      { value: "none", label: "No experience - This would be my first", score: 1 }
    ]
  },
  {
    id: "q2",
    question: "What type of stimulation are you most interested in?",
    subtitle: "Different products serve different purposes",
    options: [
      { value: "external", label: "External stimulation", score: 1 },
      { value: "internal", label: "Internal stimulation", score: 2 },
      { value: "both", label: "Both external and internal", score: 3 },
      { value: "couples", label: "Couples play and shared experiences", score: 4 }
    ]
  },
  {
    id: "q3",
    question: "How important is discretion and portability?",
    subtitle: "Size and noise level vary by product",
    options: [
      { value: "very", label: "Very important - Need discreet and quiet", score: 4 },
      { value: "somewhat", label: "Somewhat - Prefer smaller and quieter", score: 3 },
      { value: "not-much", label: "Not very - Privacy isn't a major concern", score: 2 },
      { value: "not-at-all", label: "Not at all - Size and noise don't matter", score: 1 }
    ]
  },
  {
    id: "q4",
    question: "What's your budget for a quality product?",
    subtitle: "Investment level affects material quality and features",
    options: [
      { value: "premium", label: "$100+ - Want the best quality", score: 4 },
      { value: "mid", label: "$50-100 - Good quality, reasonable price", score: 3 },
      { value: "budget", label: "$25-50 - Affordable but decent", score: 2 },
      { value: "entry", label: "Under $25 - Just want to try", score: 1 }
    ]
  },
  {
    id: "q5",
    question: "What features are most important to you?",
    subtitle: "Modern products offer various capabilities",
    options: [
      { value: "smart", label: "Smart features - App control, patterns, customization", score: 4 },
      { value: "rechargeable", label: "Rechargeable - Eco-friendly and convenient", score: 3 },
      { value: "simple", label: "Simple - Easy to use, reliable", score: 2 },
      { value: "basic", label: "Basic - Just the essentials", score: 1 }
    ]
  }
];

function calculateResults(answers: Record<string, number>): CalculatorResult {
  const experience = answers.q1 || 1;
  const budget = answers.q4 || 1;
  const discretion = answers.q3 || 1;

  let recommendations: string[] = [];
  let title = "";
  let description = "";

  if (experience === 1) {
    title = "Beginner-Friendly Recommendations";
    description = "Start your journey with simple, high-quality products designed for first-time users. These options are body-safe, easy to use, and perfect for exploration.";
    recommendations = [
      "Consider a small external vibrator like the Satisfyer Pro 2 or We-Vibe Tango",
      "Look for body-safe silicone materials - avoid jelly or porous materials",
      "Start with single-function products before exploring complex features",
      "Read reviews and educational guides before purchasing",
      "Buy from reputable retailers that offer discreet shipping and returns"
    ];
  } else if (experience === 2) {
    title = "Intermediate Product Recommendations";
    description = "You're ready to explore more varied products. Consider upgrading to rechargeable options with multiple settings for enhanced experiences.";
    recommendations = [
      "Try dual-stimulation products like the Womanizer Duo or Lelo Soraya",
      "Explore different vibration patterns and intensities",
      "Consider rechargeable products for better power and sustainability",
      "Look into app-controlled options for customizable experiences",
      "Experiment with different shapes and textures to find your preferences"
    ];
  } else if (experience >= 3) {
    title = "Advanced Product Recommendations";
    description = "As an experienced user, you can explore premium, feature-rich products and specialized items tailored to your specific preferences.";
    recommendations = [
      "Explore luxury brands like Lelo, We-Vibe, or Womanizer for premium experiences",
      "Try app-controlled products for long-distance play or customized patterns",
      "Consider specialized products for specific types of stimulation",
      "Explore couples products like remote-controlled vibrators or wearables",
      "Look into smart products that learn your preferences over time"
    ];
  }

  if (budget === 4) {
    recommendations.push("Invest in premium brands with excellent warranties and customer support");
  } else if (budget === 1) {
    recommendations.push("Look for sales on quality brands - avoid ultra-cheap products with questionable materials");
  }

  if (discretion >= 3) {
    recommendations.push("Prioritize products marketed as 'whisper-quiet' or 'discreet design'");
  }

  return {
    score: experience + budget,
    title,
    description,
    recommendations,
    color: "#C4A7E7"
  };
}

export default function SexToyCalculator() {
  return (
    <CalculatorTemplate
      title="Sex Toy Recommendation Quiz"
      description="Get personalized product recommendations based on your experience level, preferences, and wellness goals. Find the perfect pleasure products for your journey."
      questions={questions}
      calculateResults={calculateResults}
      accentColor="#C4A7E7"
    />
  );
}
