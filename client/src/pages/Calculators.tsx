/* Design: Organic Modernism - Calculator hub page
 * Grid layout with interactive calculator cards
 */

import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Sparkles, Users, Shield, Compass, Calendar, ShoppingBag, Activity, ArrowRight, Calculator } from "lucide-react";
import { Link } from "wouter";

export default function Calculators() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary" fill="currentColor" />
              <span className="text-2xl font-bold text-foreground">Pleasure & Wellness Hub</span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">Home</Link>
                <Link href="/calculators" className="text-primary font-medium">Calculators</Link>
                <Link href="/resources" className="text-foreground/80 hover:text-primary transition-colors">Resources</Link>
                <Button className="spring-hover bg-accent text-accent-foreground hover:bg-accent/90">Get Started</Button>
              </div>
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Interactive Assessments</span>
            </div>
            <h1 className="text-6xl font-bold text-foreground mb-6">Discover Your Path to Wellness</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Take personalized assessments designed to help you understand your needs, preferences, and opportunities for growth in your intimate life.
            </p>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCalculators.map((calc, index) => (
              <Card 
                key={index} 
                className="spring-hover group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer"
              >
                <CardHeader>
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{
                      background: `linear-gradient(135deg, ${calc.gradient[0]}, ${calc.gradient[1]})`
                    }}
                  >
                    {calc.icon}
                  </div>
                  <CardTitle className="text-2xl">{calc.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{calc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{calc.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      <span>{calc.questions}</span>
                    </div>
                  </div>
                  <Link href={calc.link}>
                    <Button className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Start Assessment
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">Not Sure Where to Start?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We recommend beginning with the Sexual Wellness Health Check for a comprehensive overview, then exploring specific areas based on your results.
            </p>
            <Link href="/calculators">
              <Button size="lg" className="spring-hover bg-accent text-accent-foreground hover:bg-accent/90">
                Take the Health Check <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-accent text-accent-foreground">
        <div className="container">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6" fill="currentColor" />
              <span className="text-lg font-bold">Pleasure & Wellness Hub</span>
            </div>
            <p className="text-sm text-accent-foreground/80 mb-4">
              Evidence-based sexual wellness education for adults seeking greater intimacy and satisfaction.
            </p>
            <div className="border-t border-accent-foreground/20 pt-6 text-sm text-accent-foreground/60">
              <p>&copy; 2026 Pleasure & Wellness Hub. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const allCalculators = [
  {
    title: "Sexual Compatibility Assessment",
    description: "Evaluate compatibility with current or potential partners across physical, emotional, and communication dimensions.",
    icon: <Heart className="w-8 h-8 text-white" />,
    gradient: ["#FFD4C4", "#FF9A8B"],
    duration: "10-15 minutes",
    questions: "25 questions",
    link: "/calculator/compatibility"
  },
  {
    title: "Orgasm Potential Calculator",
    description: "Receive a personalized guide to achieving orgasm based on your preferences, experiences, and physiological factors.",
    icon: <Sparkles className="w-8 h-8 text-white" />,
    gradient: ["#7FCDCD", "#4ECDC4"],
    duration: "8-12 minutes",
    questions: "20 questions",
    link: "/calculator/orgasm"
  },
  {
    title: "Relationship Communication Score",
    description: "Measure the effectiveness of communication in your intimate relationships using evidence-based frameworks.",
    icon: <Users className="w-8 h-8 text-white" />,
    gradient: ["#1A2B4A", "#3A4F7A"],
    duration: "12-18 minutes",
    questions: "10 questions",
    link: "/calculator/sex-toy"
  },
  {
    title: "Sexual Wellness Health Check",
    description: "Comprehensive assessment of your sexual health, satisfaction, and overall wellness across multiple dimensions.",
    icon: <Shield className="w-8 h-8 text-white" />,
    gradient: ["#FFB4C4", "#E89AB8"],
    duration: "15-20 minutes",
    questions: "16 questions",
    link: "/calculator/libido"
  },
  {
    title: "Pleasure Preference Matcher",
    description: "Discover your preferred techniques, activities, and approaches to pleasure through guided self-exploration.",
    icon: <Compass className="w-8 h-8 text-white" />,
    gradient: ["#A8E6CF", "#7FCDCD"],
    duration: "10-15 minutes",
    questions: "22 questions",
    link: "/calculator/wellness"
  },
  {
    title: "Intimacy Frequency Optimizer",
    description: "Calculate your ideal intimacy frequency based on lifestyle, energy levels, relationship dynamics, and personal needs.",
    icon: <Calendar className="w-8 h-8 text-white" />,
    gradient: ["#FFD4A3", "#FFAB73"],
    duration: "8-10 minutes",
    questions: "18 questions",
    link: "/calculator/communication"
  },
  {
    title: "Sex Toy Recommendation Quiz",
    description: "Get personalized product recommendations based on your experience level, preferences, and wellness goals.",
    icon: <ShoppingBag className="w-8 h-8 text-white" />,
    gradient: ["#C4A7E7", "#9B7EBD"],
    duration: "5-8 minutes",
    questions: "15 questions",
    link: "/calculator/pleasure"
  },
  {
    title: "Libido Level Assessment",
    description: "Understand and track your sexual desire patterns, identifying factors that influence your libido over time.",
    icon: <Activity className="w-8 h-8 text-white" />,
    gradient: ["#FF9A8B", "#FF6B6B"],
    duration: "10-12 minutes",
    questions: "12 questions",
    link: "/calculator/intimacy"
  },
];
