import CalculatorTemplate, { Question, CalculatorResult } from "@/components/CalculatorTemplate";

const questions: Question[] = [
  {
    id: "q1",
    question: "How would you describe your current level of sexual desire?",
    subtitle: "Libido naturally fluctuates over time",
    options: [
      { value: "high", label: "High - Frequent thoughts and strong desire", score: 4 },
      { value: "moderate", label: "Moderate - Regular interest and desire", score: 3 },
      { value: "low", label: "Low - Infrequent thoughts or desire", score: 2 },
      { value: "very-low", label: "Very low or absent - Rarely think about sex", score: 1 }
    ]
  },
  {
    id: "q2",
    question: "How has your libido changed over the past 6 months?",
    subtitle: "Tracking changes helps identify patterns",
    options: [
      { value: "increased", label: "Increased - More desire than before", score: 4 },
      { value: "stable", label: "Stable - Consistent with my baseline", score: 3 },
      { value: "decreased", label: "Decreased - Less desire than before", score: 2 },
      { value: "significantly-decreased", label: "Significantly decreased - Major drop", score: 1 }
    ]
  },
  {
    id: "q3",
    question: "How are your stress levels affecting your desire?",
    subtitle: "Stress is a major libido factor",
    options: [
      { value: "minimal", label: "Minimal impact - I manage stress well", score: 4 },
      { value: "some", label: "Some impact - Stress occasionally affects desire", score: 3 },
      { value: "significant", label: "Significant impact - Stress often reduces desire", score: 2 },
      { value: "severe", label: "Severe impact - Stress eliminates desire", score: 1 }
    ]
  },
  {
    id: "q4",
    question: "How is your sleep quality and energy level?",
    subtitle: "Fatigue directly impacts sexual desire",
    options: [
      { value: "excellent", label: "Excellent - Well-rested with good energy", score: 4 },
      { value: "good", label: "Good - Generally adequate sleep", score: 3 },
      { value: "poor", label: "Poor - Often tired or sleep-deprived", score: 2 },
      { value: "very-poor", label: "Very poor - Chronically exhausted", score: 1 }
    ]
  },
  {
    id: "q5",
    question: "Are you taking any medications that might affect libido?",
    subtitle: "Many medications impact sexual desire",
    options: [
      { value: "no", label: "No medications that affect libido", score: 4 },
      { value: "unsure", label: "Unsure - Haven't checked side effects", score: 3 },
      { value: "possibly", label: "Possibly - Taking meds with potential effects", score: 2 },
      { value: "yes", label: "Yes - Known libido-affecting medications", score: 1 }
    ]
  },
  {
    id: "q6",
    question: "How satisfied are you with your relationship (if partnered)?",
    subtitle: "Relationship quality affects desire",
    options: [
      { value: "very", label: "Very satisfied - Strong connection", score: 4 },
      { value: "satisfied", label: "Satisfied - Generally good", score: 3 },
      { value: "unsatisfied", label: "Unsatisfied - Relationship issues present", score: 2 },
      { value: "very-unsatisfied", label: "Very unsatisfied - Significant problems", score: 1 }
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
      title: "Healthy Libido Level",
      description: "Your sexual desire appears healthy and well-supported by your lifestyle, stress management, and overall wellness. Continue maintaining the factors that support your libido.",
      recommendations: [
        "Maintain your current stress management and self-care practices",
        "Continue prioritizing sleep and energy management",
        "Keep communication open with your partner about desires and needs",
        "Stay aware of any changes that might affect your libido in the future"
      ],
      color: "#4ECDC4"
    };
  } else if (percentage >= 50) {
    return {
      score: totalScore,
      title: "Moderate Libido with Room for Improvement",
      description: "Your libido is moderate with some factors potentially limiting your desire. Addressing stress, sleep, or relationship factors could enhance your sexual interest.",
      recommendations: [
        "Prioritize stress reduction through exercise, meditation, or therapy",
        "Improve sleep quality by establishing consistent sleep routines",
        "If taking medications, discuss potential libido effects with your doctor",
        "Work on relationship communication if partnership issues exist",
        "Consider whether hormonal factors might be contributing",
        "Schedule regular intimate time rather than waiting for spontaneous desire"
      ],
      color: "#FFAB73"
    };
  } else {
    return {
      score: totalScore,
      title: "Low Libido Requiring Attention",
      description: "Multiple factors appear to be significantly impacting your sexual desire. Professional support can help identify and address the underlying causes.",
      recommendations: [
        "Schedule a check-up with your healthcare provider to rule out medical causes",
        "Discuss medication side effects with your doctor - alternatives may exist",
        "Address chronic stress through therapy or lifestyle changes",
        "Prioritize sleep as a non-negotiable health requirement",
        "Consider individual or couples therapy for relationship concerns",
        "Explore whether depression, anxiety, or trauma might be factors",
        "Be patient with yourself - low libido is common and treatable",
        "Remember that libido naturally varies and doesn't define your worth"
      ],
      color: "#FF9A8B"
    };
  }
}

export default function LibidoCalculator() {
  return (
    <CalculatorTemplate
      title="Libido Level Assessment"
      description="Understand and track your sexual desire patterns, identifying factors that influence your libido over time. Get personalized insights into what may be affecting your desire."
      questions={questions}
      calculateResults={calculateResults}
      accentColor="#FF9A8B"
    />
  );
}
