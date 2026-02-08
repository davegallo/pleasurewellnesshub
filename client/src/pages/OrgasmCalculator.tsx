import CalculatorTemplate, { Question, CalculatorResult } from "@/components/CalculatorTemplate";

const questions: Question[] = [
  {
    id: "q1",
    question: "How comfortable are you exploring your own body?",
    subtitle: "Self-knowledge is a foundation for pleasure",
    options: [
      { value: "very", label: "Very comfortable - I know what I enjoy", score: 4 },
      { value: "somewhat", label: "Somewhat comfortable - Still learning", score: 3 },
      { value: "neutral", label: "Neutral - Haven't explored much", score: 2 },
      { value: "uncomfortable", label: "Uncomfortable - Rarely explore", score: 1 }
    ]
  },
  {
    id: "q2",
    question: "How often do you communicate your preferences to partners?",
    subtitle: "Communication enhances mutual pleasure",
    options: [
      { value: "always", label: "Always - I'm very vocal about my needs", score: 4 },
      { value: "often", label: "Often - I share when it feels right", score: 3 },
      { value: "sometimes", label: "Sometimes - I'm working on it", score: 2 },
      { value: "rarely", label: "Rarely - I find it difficult", score: 1 }
    ]
  },
  {
    id: "q3",
    question: "How much time do you typically spend on foreplay?",
    subtitle: "Adequate arousal time increases orgasm likelihood",
    options: [
      { value: "extensive", label: "20+ minutes - We take our time", score: 4 },
      { value: "moderate", label: "10-20 minutes - A good amount", score: 3 },
      { value: "brief", label: "5-10 minutes - Could be longer", score: 2 },
      { value: "minimal", label: "Less than 5 minutes - Usually rushed", score: 1 }
    ]
  },
  {
    id: "q4",
    question: "How relaxed and present do you feel during intimacy?",
    subtitle: "Mental state significantly impacts physical response",
    options: [
      { value: "very", label: "Very relaxed - Fully in the moment", score: 4 },
      { value: "mostly", label: "Mostly relaxed - Occasional distractions", score: 3 },
      { value: "somewhat", label: "Somewhat tense - Mind often wanders", score: 2 },
      { value: "stressed", label: "Often stressed - Hard to focus", score: 1 }
    ]
  },
  {
    id: "q5",
    question: "Do you incorporate varied stimulation techniques?",
    subtitle: "Different techniques work for different bodies",
    options: [
      { value: "varied", label: "Yes - We explore many approaches", score: 4 },
      { value: "some", label: "Some variety - Open to trying more", score: 3 },
      { value: "limited", label: "Limited - Stick to what we know", score: 2 },
      { value: "routine", label: "Very routine - Same approach each time", score: 1 }
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
      title: "High Orgasm Potential",
      description: "You have excellent foundations for experiencing orgasm regularly. Your self-awareness, communication skills, and approach to intimacy create optimal conditions for pleasure.",
      recommendations: [
        "Continue exploring new techniques and sensations to deepen your pleasure experiences",
        "Consider sharing your knowledge with partners to enhance mutual satisfaction",
        "Explore advanced techniques like edging or multiple orgasms if interested",
        "Maintain your mindfulness practices and stress management for continued success"
      ],
      color: "#4ECDC4"
    };
  } else if (percentage >= 60) {
    return {
      score: totalScore,
      title: "Moderate Orgasm Potential",
      description: "You have good foundations with room for enhancement. With some adjustments to communication, relaxation, or technique, you can significantly increase your orgasm frequency.",
      recommendations: [
        "Practice communicating your preferences more clearly during intimate moments",
        "Extend foreplay time to allow for fuller arousal and relaxation",
        "Explore mindfulness or breathing exercises to stay present during intimacy",
        "Experiment with different stimulation techniques to discover what works best for you",
        "Consider reading educational resources about anatomy and pleasure pathways"
      ],
      color: "#7FCDCD"
    };
  } else if (percentage >= 40) {
    return {
      score: totalScore,
      title: "Developing Orgasm Potential",
      description: "You're building your foundation for orgasmic experiences. Focusing on self-exploration, communication, and relaxation will significantly enhance your pleasure journey.",
      recommendations: [
        "Start with solo exploration to understand your body's responses without pressure",
        "Practice stress-reduction techniques like meditation or deep breathing",
        "Have open conversations with partners about creating a comfortable, unhurried environment",
        "Learn about your anatomy through educational resources and diagrams",
        "Consider working with a sex therapist if you feel stuck or have specific concerns",
        "Remember that orgasm isn't the only measure of sexual satisfaction"
      ],
      color: "#FFB4C4"
    };
  } else {
    return {
      score: totalScore,
      title: "Early Exploration Phase",
      description: "You're at the beginning of your pleasure journey, which is a wonderful place to start. With patience, education, and self-compassion, you can build a fulfilling intimate life.",
      recommendations: [
        "Begin with self-exploration in a private, comfortable setting without any pressure",
        "Read educational books or articles about sexual anatomy and response cycles",
        "Consider speaking with a healthcare provider to rule out any physical factors",
        "Work with a certified sex therapist who can provide personalized guidance",
        "Practice self-compassion - everyone's journey is different and valid",
        "Focus on pleasure and sensation rather than achieving orgasm as a goal",
        "Explore stress management and body awareness practices like yoga or meditation"
      ],
      color: "#FF9A8B"
    };
  }
}

export default function OrgasmCalculator() {
  return (
    <CalculatorTemplate
      title="Orgasm Potential Calculator"
      description="Receive a personalized guide to achieving orgasm based on your preferences, experiences, and current practices. This assessment evaluates key factors that influence orgasmic response."
      questions={questions}
      calculateResults={calculateResults}
      accentColor="#4ECDC4"
    />
  );
}
