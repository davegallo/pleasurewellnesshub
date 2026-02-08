import CalculatorTemplate, { Question, CalculatorResult } from "@/components/CalculatorTemplate";

const questions: Question[] = [
  {
    id: "q1",
    question: "How satisfied are you with your current intimate life?",
    subtitle: "Overall satisfaction is a key wellness indicator",
    options: [
      { value: "very", label: "Very satisfied - It meets or exceeds my expectations", score: 4 },
      { value: "satisfied", label: "Satisfied - Generally good with minor areas to improve", score: 3 },
      { value: "somewhat", label: "Somewhat dissatisfied - Several areas need improvement", score: 2 },
      { value: "very-dissatisfied", label: "Very dissatisfied - Significant concerns", score: 1 }
    ]
  },
  {
    id: "q2",
    question: "How often do you experience physical discomfort during intimacy?",
    subtitle: "Physical comfort is essential for wellness",
    options: [
      { value: "never", label: "Never - Intimacy is always comfortable", score: 4 },
      { value: "rarely", label: "Rarely - Occasional minor discomfort", score: 3 },
      { value: "sometimes", label: "Sometimes - Noticeable discomfort", score: 2 },
      { value: "often", label: "Often or always - Significant pain or discomfort", score: 1 }
    ]
  },
  {
    id: "q3",
    question: "How would you rate your sexual desire level?",
    subtitle: "Libido naturally varies but persistent concerns warrant attention",
    options: [
      { value: "strong", label: "Strong and consistent - Matches my expectations", score: 4 },
      { value: "moderate", label: "Moderate - Fluctuates but generally present", score: 3 },
      { value: "low", label: "Low - Less desire than I'd like", score: 2 },
      { value: "very-low", label: "Very low or absent - Concerning to me", score: 1 }
    ]
  },
  {
    id: "q4",
    question: "How well do you manage stress and its impact on intimacy?",
    subtitle: "Stress significantly affects sexual wellness",
    options: [
      { value: "well", label: "Well - I have effective coping strategies", score: 4 },
      { value: "okay", label: "Okay - Stress sometimes affects intimacy", score: 3 },
      { value: "poorly", label: "Poorly - Stress often interferes", score: 2 },
      { value: "very-poorly", label: "Very poorly - Stress severely impacts intimacy", score: 1 }
    ]
  },
  {
    id: "q5",
    question: "How connected do you feel to your partner during intimacy?",
    subtitle: "Emotional connection enhances physical experiences",
    options: [
      { value: "very", label: "Very connected - Deep emotional and physical bond", score: 4 },
      { value: "connected", label: "Connected - Good balance of emotion and physicality", score: 3 },
      { value: "somewhat", label: "Somewhat disconnected - Feels more physical than emotional", score: 2 },
      { value: "disconnected", label: "Disconnected - Lacking emotional intimacy", score: 1 }
    ]
  },
  {
    id: "q6",
    question: "How confident do you feel about your body during intimate moments?",
    subtitle: "Body image affects sexual confidence and enjoyment",
    options: [
      { value: "very", label: "Very confident - I feel attractive and comfortable", score: 4 },
      { value: "confident", label: "Confident - Minor insecurities don't interfere much", score: 3 },
      { value: "insecure", label: "Insecure - Body concerns often distract me", score: 2 },
      { value: "very-insecure", label: "Very insecure - Significantly impacts my experience", score: 1 }
    ]
  },
  {
    id: "q7",
    question: "How often do you prioritize your sexual wellness?",
    subtitle: "Active engagement in wellness improves outcomes",
    options: [
      { value: "regularly", label: "Regularly - I make time for intimacy and self-care", score: 4 },
      { value: "sometimes", label: "Sometimes - When I remember or have time", score: 3 },
      { value: "rarely", label: "Rarely - It's low on my priority list", score: 2 },
      { value: "never", label: "Never - I don't think about it", score: 1 }
    ]
  }
];

function calculateResults(answers: Record<string, number>): CalculatorResult {
  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
  const maxScore = questions.length * 4;
  const percentage = (totalScore / maxScore) * 100;

  if (percentage >= 80) {
    return {
      score: totalScore,
      title: "Excellent Sexual Wellness",
      description: "You demonstrate strong sexual wellness across physical, emotional, and relational dimensions. Your proactive approach to intimacy and self-care creates a foundation for continued satisfaction.",
      recommendations: [
        "Continue prioritizing your sexual wellness through regular self-care and communication",
        "Explore new dimensions of pleasure or intimacy to maintain engagement",
        "Share your wellness practices with partners or friends who might benefit",
        "Consider annual wellness check-ups with healthcare providers"
      ],
      color: "#4ECDC4"
    };
  } else if (percentage >= 60) {
    return {
      score: totalScore,
      title: "Good Sexual Wellness",
      description: "You have solid sexual wellness with some areas for enhancement. Addressing specific concerns like stress management, body image, or physical comfort can elevate your overall experience.",
      recommendations: [
        "Identify your top 1-2 areas of concern and create an action plan",
        "Practice stress-reduction techniques like meditation, exercise, or therapy",
        "Work on body positivity through affirmations and self-compassion practices",
        "If experiencing physical discomfort, consult a healthcare provider",
        "Schedule regular intimate time with your partner to prioritize connection",
        "Explore educational resources about areas you'd like to improve"
      ],
      color: "#7FCDCD"
    };
  } else if (percentage >= 40) {
    return {
      score: totalScore,
      title: "Sexual Wellness Needs Attention",
      description: "Several aspects of your sexual wellness could benefit from focused attention. Addressing physical discomfort, emotional connection, or stress management can significantly improve your intimate life.",
      recommendations: [
        "Schedule a check-up with your healthcare provider to address physical concerns",
        "Consider working with a sex therapist for personalized guidance",
        "Prioritize stress management through therapy, mindfulness, or lifestyle changes",
        "Have honest conversations with your partner about your needs and concerns",
        "Explore body-positive resources and practices to improve confidence",
        "Set aside dedicated time for intimacy rather than waiting for spontaneity",
        "Read educational books about sexual wellness and satisfaction",
        "Remember that improvement takes time and patience with yourself"
      ],
      color: "#FFB4C4"
    };
  } else {
    return {
      score: totalScore,
      title: "Sexual Wellness Requires Support",
      description: "Your sexual wellness is significantly impacted across multiple dimensions. Professional support from healthcare providers and therapists can help you address these concerns and build a more satisfying intimate life.",
      recommendations: [
        "Consult with your primary care provider or gynecologist about physical symptoms",
        "Work with a certified sex therapist who specializes in sexual wellness",
        "Address underlying health conditions that may affect sexual function",
        "Seek individual or couples therapy to work through emotional or relational issues",
        "Explore whether medications or hormonal factors might be contributing",
        "Practice self-compassion - these challenges are common and treatable",
        "Join support groups or online communities for people with similar experiences",
        "Focus on small, achievable goals rather than trying to fix everything at once",
        "Remember that sexual wellness is a journey, not a destination"
      ],
      color: "#FF9A8B"
    };
  }
}

export default function WellnessCalculator() {
  return (
    <CalculatorTemplate
      title="Sexual Wellness Health Check"
      description="Comprehensive assessment of your sexual health, satisfaction, and overall wellness across multiple dimensions. This evaluation helps identify strengths and areas for growth."
      questions={questions}
      calculateResults={calculateResults}
      accentColor="#E89AB8"
    />
  );
}
