/**
 * Reusable Calculator Template Component
 * Organic Modernism design - flowing forms, warm colors, gentle animations
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { Link } from "wouter";

export interface Question {
  id: string;
  question: string;
  subtitle?: string;
  options: {
    value: string;
    label: string;
    score: number;
  }[];
}

export interface CalculatorResult {
  score: number;
  title: string;
  description: string;
  recommendations: string[];
  color: string;
}

interface CalculatorTemplateProps {
  title: string;
  description: string;
  questions: Question[];
  calculateResults: (answers: Record<string, number>) => CalculatorResult;
  accentColor?: string;
}

export default function CalculatorTemplate({
  title,
  description,
  questions,
  calculateResults,
  accentColor = "hsl(var(--accent))"
}: CalculatorTemplateProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<CalculatorResult | null>(null);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate results
      const scoreAnswers: Record<string, number> = {};
      Object.keys(answers).forEach(qId => {
        const question = questions.find(q => q.id === qId);
        const option = question?.options.find(o => o.value === answers[qId]);
        if (option) {
          scoreAnswers[qId] = option.score;
        }
      });
      const calculatedResults = calculateResults(scoreAnswers);
      setResults(calculatedResults);
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setResults(null);
  };

  const currentQ = questions[currentQuestion];
  const currentAnswer = answers[currentQ?.id];

  if (showResults && results) {
    return (
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-6 py-4">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer">
                <Heart className="w-8 h-8 text-primary" fill="currentColor" />
                <span className="text-2xl font-bold text-foreground">Pleasure & Wellness Hub</span>
              </div>
            </Link>
          </div>
        </nav>

        {/* Results Section */}
        <section className="pt-32 pb-24">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <div 
                className="inline-block px-6 py-3 rounded-full mb-6"
                style={{ backgroundColor: `${results.color}20` }}
              >
                <span className="text-lg font-semibold" style={{ color: results.color }}>
                  Your Results
                </span>
              </div>
              <h1 className="text-5xl font-bold text-foreground mb-4">{results.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {results.description}
              </p>
            </div>

            <Card className="border-2 mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Personalized Recommendations</h3>
                <ul className="space-y-4">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div 
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${results.color}20` }}
                      >
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: results.color }}></div>
                      </div>
                      <p className="text-foreground leading-relaxed">{rec}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleRestart}
                className="spring-hover bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Take Assessment Again
              </Button>
              <Link href="/calculators">
                <Button size="lg" variant="outline" className="spring-hover border-2">
                  Explore Other Calculators
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="spring-hover border-2">
                  Browse Resources
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <Heart className="w-8 h-8 text-primary" fill="currentColor" />
              <span className="text-2xl font-bold text-foreground">Pleasure & Wellness Hub</span>
            </div>
          </Link>
        </div>
      </nav>

      {/* Calculator Section */}
      <section className="pt-32 pb-24">
        <div className="container max-w-3xl">
          {currentQuestion === 0 && (
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-foreground mb-4">{title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          )}

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium" style={{ color: accentColor }}>
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="border-2 mb-8">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-3">
                {currentQ.question}
              </h2>
              {currentQ.subtitle && (
                <p className="text-muted-foreground mb-6">{currentQ.subtitle}</p>
              )}

              <RadioGroup
                value={currentAnswer}
                onValueChange={(value) => handleAnswer(currentQ.id, value)}
                className="space-y-3"
              >
                {currentQ.options.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-3 p-4 rounded-xl border-2 border-border hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label
                      htmlFor={option.value}
                      className="flex-1 cursor-pointer text-base leading-relaxed"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4">
            <Button
              variant="outline"
              size="lg"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="border-2"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Previous
            </Button>
            <Button
              size="lg"
              onClick={handleNext}
              disabled={!currentAnswer}
              className="spring-hover bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
