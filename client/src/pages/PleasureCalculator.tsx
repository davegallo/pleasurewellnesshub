import CalculatorTemplate, { Question, CalculatorResult } from "@/components/CalculatorTemplate";

const questions: Question[] = [
  {
    id: "q1",
    question: "What type of stimulation do you find most pleasurable?",
    subtitle: "Understanding your preferences guides exploration",
    options: [
      { value: "varied", label: "I enjoy a variety of different types", score: 4 },
      { value: "specific", label: "I have specific preferences I know well", score: 3 },
      { value: "exploring", label: "I'm still exploring and discovering", score: 2 },
      { value: "unsure", label: "I'm not sure what I prefer", score: 1 }
    ]
  },
  {
    id: "q2",
    question: "How do you feel about incorporating toys or accessories?",
    subtitle: "Tools can enhance and diversify pleasure experiences",
    options: [
      { value: "enthusiastic", label: "Enthusiastic - I use them regularly", score: 4 },
      { value: "open", label: "Open - I've tried some and enjoyed them", score: 3 },
      { value: "curious", label: "Curious - Haven't tried but interested", score: 2 },
      { value: "hesitant", label: "Hesitant or uninterested", score: 1 }
    ]
  },
  {
    id: "q3",
    question: "What pace do you typically prefer during intimate activities?",
    subtitle: "Rhythm and pacing affect arousal and satisfaction",
    options: [
      { value: "varied", label: "Varied - I enjoy changing pace throughout", score: 4 },
      { value: "slow", label: "Slow and sensual - Taking time", score: 3 },
      { value: "moderate", label: "Moderate - Balanced approach", score: 2 },
      { value: "fast", label: "Fast and intense - Quick stimulation", score: 1 }
    ]
  },
  {
    id: "q4",
    question: "How important is emotional connection during intimacy?",
    subtitle: "Some prefer emotional bonding, others focus on physical sensation",
    options: [
      { value: "essential", label: "Essential - I need deep emotional connection", score: 4 },
      { value: "important", label: "Important - Enhances the experience", score: 3 },
      { value: "nice", label: "Nice to have - But not necessary", score: 2 },
      { value: "separate", label: "Separate - I prefer to focus on physical pleasure", score: 1 }
    ]
  },
  {
    id: "q5",
    question: "What environment helps you feel most comfortable and aroused?",
    subtitle: "Setting affects relaxation and pleasure",
    options: [
      { value: "romantic", label: "Romantic - Candles, music, soft lighting", score: 4 },
      { value: "comfortable", label: "Comfortable - Familiar and relaxed", score: 3 },
      { value: "spontaneous", label: "Spontaneous - Anywhere works", score: 2 },
      { value: "specific", label: "Very specific requirements", score: 1 }
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
      title: "Adventurous Explorer",
      description: "You have a strong sense of your preferences while remaining open to new experiences. Your balanced approach to pleasure combines self-knowledge with curiosity.",
      recommendations: [
        "Continue exploring new techniques and sensations that interest you",
        "Try advanced practices like tantric techniques or extended pleasure sessions",
        "Experiment with different settings and scenarios to keep experiences fresh",
        "Share your discoveries with partners to enhance mutual pleasure"
      ],
      color: "#A8E6CF"
    };
  } else if (percentage >= 50) {
    return {
      score: totalScore,
      title: "Developing Preferences",
      description: "You're building awareness of what brings you pleasure. Continued exploration and experimentation will help refine your preferences.",
      recommendations: [
        "Try one new technique or approach each month to expand your repertoire",
        "Keep a pleasure journal to track what works well for you",
        "Explore educational resources about different pleasure techniques",
        "Communicate openly with partners about what you're discovering",
        "Consider trying toys or accessories if you haven't yet"
      ],
      color: "#7FCDCD"
    };
  } else {
    return {
      score: totalScore,
      title: "Beginning Your Journey",
      description: "You're at the start of discovering your pleasure preferences. This is an exciting opportunity for self-exploration and learning.",
      recommendations: [
        "Start with solo exploration to discover what feels good without pressure",
        "Read educational resources about different types of pleasure and stimulation",
        "Take your time - there's no rush to figure everything out",
        "Consider working with a sex therapist for personalized guidance",
        "Focus on what feels good rather than achieving specific outcomes",
        "Be patient and compassionate with yourself during this discovery process"
      ],
      color: "#FFB4C4"
    };
  }
}

export default function PleasureCalculator() {
  return (
    <CalculatorTemplate
      title="Pleasure Preference Matcher"
      description="Discover your preferred techniques, activities, and approaches to pleasure through guided self-exploration. This assessment helps you understand and articulate what brings you satisfaction."
      questions={questions}
      calculateResults={calculateResults}
      accentColor="#A8E6CF"
    />
  );
}
