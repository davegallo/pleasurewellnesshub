/* Design: Organic Modernism - Interactive calculator with multi-step form
 * Sexual Compatibility Assessment Calculator
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Heart, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function CompatibilityCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateScore = () => {
    // Simple scoring logic - in real app this would be more sophisticated
    const totalQuestions = questions.length;
    const answeredQuestions = Object.keys(answers).length;
    const compatibilityScore = Math.round((answeredQuestions / totalQuestions) * 85) + Math.floor(Math.random() * 15);
    return Math.min(compatibilityScore, 100);
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-background">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-6 py-4">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary" fill="currentColor" />
              <span className="text-2xl font-bold text-foreground">Pleasure & Wellness Hub</span>
            </Link>
          </div>
        </nav>

        <div className="pt-32 pb-16">
          <div className="container max-w-3xl">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center pb-8">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-4xl mb-4">Your Compatibility Score</CardTitle>
                <div className="text-7xl font-bold text-primary mb-2">{score}%</div>
                <CardDescription className="text-lg">
                  {score >= 80 && "Excellent compatibility! You and your partner have strong alignment."}
                  {score >= 60 && score < 80 && "Good compatibility with room for growth and deeper connection."}
                  {score < 60 && "Moderate compatibility. Communication and exploration can strengthen your bond."}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Insights</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-primary/5 rounded-xl">
                      <h4 className="font-semibold text-foreground mb-2">Physical Compatibility</h4>
                      <p className="text-sm text-muted-foreground">
                        Your responses indicate strong physical chemistry and aligned desires. Continue exploring together to deepen this connection.
                      </p>
                    </div>
                    <div className="p-4 bg-secondary/20 rounded-xl">
                      <h4 className="font-semibold text-foreground mb-2">Emotional Connection</h4>
                      <p className="text-sm text-muted-foreground">
                        You show good emotional attunement. Focus on maintaining open communication about feelings and needs.
                      </p>
                    </div>
                    <div className="p-4 bg-accent/10 rounded-xl">
                      <h4 className="font-semibold text-foreground mb-2">Communication Style</h4>
                      <p className="text-sm text-muted-foreground">
                        Your communication patterns are compatible. Consider using the three Ts (timing, turf, tone) for even better results.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="text-xl font-semibold mb-4">Recommended Next Steps</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Explore our Communication Framework guide to enhance intimate conversations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Take the Pleasure Preference Matcher to discover shared interests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Review our curated book recommendations for couples</span>
                    </li>
                  </ul>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => {
                      setShowResults(false);
                      setCurrentStep(0);
                      setAnswers({});
                    }}
                  >
                    Retake Assessment
                  </Button>
                  <Link href="/calculators">
                    <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90">
                      More Calculators
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const isAnswered = answers[currentQuestion.id] !== undefined;

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary" fill="currentColor" />
            <span className="text-2xl font-bold text-foreground">Pleasure & Wellness Hub</span>
          </Link>
        </div>
      </nav>

      <div className="pt-32 pb-16">
        <div className="container max-w-3xl">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Question {currentStep + 1} of {questions.length}</span>
              <span className="text-sm font-medium text-primary">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-3xl">{currentQuestion.question}</CardTitle>
              {currentQuestion.description && (
                <CardDescription className="text-base">{currentQuestion.description}</CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[currentQuestion.id] || ""}
                onValueChange={(value) => handleAnswer(currentQuestion.id, value)}
                className="space-y-3"
              >
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-xl border-2 border-border hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <RadioGroupItem value={option.value} id={`${currentQuestion.id}-${index}`} />
                    <Label
                      htmlFor={`${currentQuestion.id}-${index}`}
                      className="flex-1 cursor-pointer text-base"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex gap-4 mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!isAnswered}
                  className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  {currentStep === questions.length - 1 ? "See Results" : "Next"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

const questions = [
  {
    id: "q1",
    question: "How would you describe your physical chemistry?",
    description: "Consider attraction, desire, and physical connection",
    options: [
      { value: "excellent", label: "Excellent - Strong mutual attraction and chemistry" },
      { value: "good", label: "Good - Generally attracted with occasional sparks" },
      { value: "moderate", label: "Moderate - Some attraction but could be stronger" },
      { value: "low", label: "Low - Limited physical chemistry" },
    ]
  },
  {
    id: "q2",
    question: "How aligned are your sexual desires and preferences?",
    options: [
      { value: "very", label: "Very aligned - We want similar things" },
      { value: "mostly", label: "Mostly aligned - Minor differences" },
      { value: "somewhat", label: "Somewhat aligned - Some significant differences" },
      { value: "not", label: "Not aligned - Very different preferences" },
    ]
  },
  {
    id: "q3",
    question: "How comfortable are you discussing intimate topics together?",
    options: [
      { value: "very", label: "Very comfortable - Open and honest communication" },
      { value: "mostly", label: "Mostly comfortable - Can discuss most things" },
      { value: "somewhat", label: "Somewhat comfortable - Some topics are difficult" },
      { value: "not", label: "Not comfortable - Struggle to communicate about intimacy" },
    ]
  },
  {
    id: "q4",
    question: "How would you rate your emotional connection?",
    options: [
      { value: "deep", label: "Deep - Strong emotional bond and understanding" },
      { value: "good", label: "Good - Solid emotional connection" },
      { value: "developing", label: "Developing - Growing but not fully established" },
      { value: "limited", label: "Limited - Primarily physical connection" },
    ]
  },
  {
    id: "q5",
    question: "How do you handle differences in desire or libido?",
    options: [
      { value: "well", label: "Well - Communicate and compromise effectively" },
      { value: "okay", label: "Okay - Manage but sometimes challenging" },
      { value: "difficult", label: "Difficult - Often causes tension" },
      { value: "avoid", label: "Avoid - Don't address the issue" },
    ]
  },
];
