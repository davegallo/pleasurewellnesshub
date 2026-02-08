import CalculatorTemplate, { Question, CalculatorResult } from "@/components/CalculatorTemplate";

const questions: Question[] = [
  {
    id: "q1",
    question: "How comfortable are you initiating conversations about intimacy?",
    subtitle: "The three Ts: Timing, Turf, and Tone",
    options: [
      { value: "very", label: "Very comfortable - I initiate regularly", score: 4 },
      { value: "somewhat", label: "Somewhat comfortable - I can when needed", score: 3 },
      { value: "uncomfortable", label: "Uncomfortable - I usually wait for my partner", score: 2 },
      { value: "very-uncomfortable", label: "Very uncomfortable - I avoid these conversations", score: 1 }
    ]
  },
  {
    id: "q2",
    question: "How do you typically express your desires and boundaries?",
    subtitle: "Clear communication prevents misunderstandings",
    options: [
      { value: "direct", label: "Directly and clearly - I say exactly what I mean", score: 4 },
      { value: "mostly-clear", label: "Mostly clear - With some hints", score: 3 },
      { value: "indirect", label: "Indirectly - Through hints and body language", score: 2 },
      { value: "avoid", label: "I avoid expressing them - Hope partner guesses", score: 1 }
    ]
  },
  {
    id: "q3",
    question: "How well do you listen when your partner shares their needs?",
    subtitle: "Active listening builds trust and connection",
    options: [
      { value: "excellent", label: "Excellent - I listen without judgment and ask questions", score: 4 },
      { value: "good", label: "Good - I listen and try to understand", score: 3 },
      { value: "fair", label: "Fair - Sometimes I get defensive", score: 2 },
      { value: "poor", label: "Poor - I often interrupt or dismiss", score: 1 }
    ]
  },
  {
    id: "q4",
    question: "How do you handle disagreements about intimacy?",
    subtitle: "Conflict resolution skills strengthen relationships",
    options: [
      { value: "constructive", label: "Constructively - We discuss and find compromises", score: 4 },
      { value: "mostly-calm", label: "Mostly calm - Some tension but we work through it", score: 3 },
      { value: "tense", label: "Tense - Arguments sometimes escalate", score: 2 },
      { value: "avoid", label: "Avoidant - We don't discuss disagreements", score: 1 }
    ]
  },
  {
    id: "q5",
    question: "How often do you check in with your partner during intimacy?",
    subtitle: "Ongoing consent and feedback enhance experiences",
    options: [
      { value: "regularly", label: "Regularly - I ask and observe throughout", score: 4 },
      { value: "sometimes", label: "Sometimes - When something seems off", score: 3 },
      { value: "rarely", label: "Rarely - Only at the beginning", score: 2 },
      { value: "never", label: "Never - I assume everything is fine", score: 1 }
    ]
  },
  {
    id: "q6",
    question: "How comfortable are you giving feedback after intimate experiences?",
    subtitle: "Constructive feedback improves future encounters",
    options: [
      { value: "very", label: "Very comfortable - I share what worked and didn't", score: 4 },
      { value: "somewhat", label: "Somewhat - I mention major things", score: 3 },
      { value: "uncomfortable", label: "Uncomfortable - Worried about hurting feelings", score: 2 },
      { value: "never", label: "Never - I keep it to myself", score: 1 }
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
      title: "Excellent Communication Skills",
      description: "You demonstrate outstanding communication in your intimate relationships. Your ability to express needs, listen actively, and navigate conflicts creates a strong foundation for deep connection and satisfaction.",
      recommendations: [
        "Continue modeling healthy communication for your partner and others",
        "Explore advanced topics like non-violent communication or emotional intelligence",
        "Consider mentoring others or sharing your communication strategies",
        "Maintain your skills by continuing regular check-ins and open dialogue"
      ],
      color: "#4ECDC4"
    };
  } else if (percentage >= 60) {
    return {
      score: totalScore,
      title: "Good Communication with Room to Grow",
      description: "You have solid communication foundations with opportunities for refinement. Strengthening specific areas like feedback delivery or conflict resolution will enhance your intimate connections.",
      recommendations: [
        "Practice the 'three Ts' framework: choose the right Timing, Turf (location), and Tone",
        "Work on expressing desires more directly rather than relying on hints",
        "Develop active listening skills by reflecting back what you hear",
        "Schedule regular relationship check-ins outside of intimate moments",
        "Read books on intimate communication like 'Come As You Are' or 'Mating in Captivity'"
      ],
      color: "#7FCDCD"
    };
  } else if (percentage >= 40) {
    return {
      score: totalScore,
      title: "Developing Communication Skills",
      description: "You're building your communication toolkit. Focusing on expressing needs clearly and listening without defensiveness will significantly improve your intimate relationships.",
      recommendations: [
        "Start small: practice expressing one preference or boundary this week",
        "Use 'I' statements instead of 'you' statements to avoid blame",
        "Practice active listening by paraphrasing what your partner says",
        "Create a safe space for difficult conversations (comfortable setting, no distractions)",
        "Consider couples therapy or communication workshops",
        "Journal about your feelings before discussing them with your partner",
        "Remember that communication is a skill that improves with practice"
      ],
      color: "#FFB4C4"
    };
  } else {
    return {
      score: totalScore,
      title: "Communication Skills Need Development",
      description: "Communication challenges are common and absolutely improvable. With dedicated practice and possibly professional support, you can build the skills needed for fulfilling intimate relationships.",
      recommendations: [
        "Consider working with a couples therapist or sex therapist for guided support",
        "Start with written communication if verbal feels too difficult",
        "Practice expressing needs in non-intimate contexts first",
        "Learn about your communication style and your partner's through assessments",
        "Read foundational books like 'The Five Love Languages' or 'Nonviolent Communication'",
        "Address any underlying anxiety or past trauma that may affect communication",
        "Remember that both partners need to commit to improving communication together",
        "Celebrate small wins and progress rather than expecting perfection"
      ],
      color: "#FF9A8B"
    };
  }
}

export default function CommunicationCalculator() {
  return (
    <CalculatorTemplate
      title="Relationship Communication Score"
      description="Measure the effectiveness of communication in your intimate relationships using evidence-based frameworks. This assessment evaluates how well you express needs, listen, and navigate intimate conversations."
      questions={questions}
      calculateResults={calculateResults}
      accentColor="#3A4F7A"
    />
  );
}
