import CalculatorTemplate, { Question, CalculatorResult } from "@/components/CalculatorTemplate";

const questions: Question[] = [
  {
    id: "q1",
    question: "How often do you currently engage in intimate activities?",
    subtitle: "Current frequency baseline",
    options: [
      { value: "daily", label: "Daily or almost daily", score: 4 },
      { value: "weekly", label: "2-4 times per week", score: 3 },
      { value: "monthly", label: "2-4 times per month", score: 2 },
      { value: "rarely", label: "Less than once a month", score: 1 }
    ]
  },
  {
    id: "q2",
    question: "How satisfied are you with your current intimacy frequency?",
    subtitle: "Satisfaction matters more than raw numbers",
    options: [
      { value: "very", label: "Very satisfied - It's perfect for me", score: 4 },
      { value: "satisfied", label: "Satisfied - Generally good", score: 3 },
      { value: "want-more", label: "Want more - Current frequency is too low", score: 2 },
      { value: "want-less", label: "Want less - Current frequency is too high", score: 1 }
    ]
  },
  {
    id: "q3",
    question: "What is your typical energy level throughout the week?",
    subtitle: "Energy availability affects intimacy capacity",
    options: [
      { value: "high", label: "High - I have plenty of energy most days", score: 4 },
      { value: "moderate", label: "Moderate - Enough for daily activities", score: 3 },
      { value: "low", label: "Low - Often tired by evening", score: 2 },
      { value: "depleted", label: "Depleted - Consistently exhausted", score: 1 }
    ]
  },
  {
    id: "q4",
    question: "How much time do you have available for intimacy?",
    subtitle: "Realistic scheduling supports consistency",
    options: [
      { value: "flexible", label: "Flexible - I can make time when desired", score: 4 },
      { value: "some", label: "Some time - Need to plan ahead", score: 3 },
      { value: "limited", label: "Limited - Very busy schedule", score: 2 },
      { value: "none", label: "Almost none - Overwhelmed with obligations", score: 1 }
    ]
  },
  {
    id: "q5",
    question: "How aligned are you and your partner on desired frequency?",
    subtitle: "Mismatched libidos require communication and compromise",
    options: [
      { value: "aligned", label: "Very aligned - We want similar frequency", score: 4 },
      { value: "mostly", label: "Mostly aligned - Minor differences", score: 3 },
      { value: "different", label: "Different - Noticeable gap in desires", score: 2 },
      { value: "very-different", label: "Very different - Significant mismatch", score: 1 }
    ]
  }
];

function calculateResults(answers: Record<string, number>): CalculatorResult {
  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
  const maxScore = questions.length * 4;
  const percentage = (totalScore / maxScore) * 100;

  if (percentage >= 75) {
    return {
      score: totalScore,
      title: "Optimal Intimacy Frequency",
      description: "Your current intimacy frequency aligns well with your energy, schedule, and desires. You've found a sustainable rhythm that works for you and your partner.",
      recommendations: [
        "Maintain your current approach while staying flexible for life changes",
        "Continue open communication with your partner about needs",
        "Be prepared to adjust frequency during stressful periods",
        "Celebrate that you've found a rhythm that works for both of you"
      ],
      color: "#FFD4A3"
    };
  } else if (percentage >= 50) {
    return {
      score: totalScore,
      title: "Room for Optimization",
      description: "There's opportunity to better align your intimacy frequency with your energy, schedule, and desires. Small adjustments can improve satisfaction.",
      recommendations: [
        "Schedule intimacy during times when you have more energy",
        "Discuss desired frequency openly with your partner",
        "Consider shorter intimate sessions if time is limited",
        "Address energy depletion through better sleep, nutrition, or stress management",
        "Try different times of day to find when you're most available and energized"
      ],
      color: "#FFAB73"
    };
  } else {
    return {
      score: totalScore,
      title: "Frequency Needs Adjustment",
      description: "Significant factors are impacting your ability to maintain a satisfying intimacy frequency. Addressing energy, time, or desire mismatches will improve your intimate life.",
      recommendations: [
        "Prioritize addressing exhaustion through medical check-up or lifestyle changes",
        "Have honest conversations with your partner about mismatched desires",
        "Consider couples therapy to navigate frequency differences",
        "Evaluate whether your schedule allows for any intimacy - may need to reprioritize",
        "Explore whether stress, medication, or health issues are affecting libido",
        "Remember that quality matters more than quantity",
        "Be patient with yourself and your partner during this adjustment period"
      ],
      color: "#FF9A8B"
    };
  }
}

export default function IntimacyCalculator() {
  return (
    <CalculatorTemplate
      title="Intimacy Frequency Optimizer"
      description="Calculate your ideal intimacy frequency based on lifestyle, energy levels, relationship dynamics, and personal needs. Find a sustainable rhythm that works for you."
      questions={questions}
      calculateResults={calculateResults}
      accentColor="#FFD4A3"
    />
  );
}
