import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function BeginnersGuide() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary" fill="currentColor" />
              <span className="text-2xl font-bold text-foreground">Pleasure & Wellness Hub</span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-8">
                <Link href="/">Home</Link>
                <Link href="/calculators">Calculators</Link>
                <Link href="/resources">Resources</Link>
                <Link href="/about">About</Link>
              </div>
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      <article className="pt-32 pb-16">
        <div className="container max-w-4xl">
          <Link href="/resources">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Button>
          </Link>

          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">Beginner</span>
              <span className="text-sm text-muted-foreground">6 Steps</span>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">Beginner's Guide to Sexual Wellness</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Start your journey with foundational knowledge about pleasure, anatomy, and communication.
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                      <CardDescription className="text-base">{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {step.content.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                    {step.action && (
                      <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                        <p className="text-sm font-semibold text-foreground mb-2">Action Step:</p>
                        <p className="text-muted-foreground">{step.action}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Continue Your Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/calculators">
                <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle>Take an Assessment</CardTitle>
                    <CardDescription>Get personalized insights with our interactive calculators</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/resources">
                <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle>Explore Articles</CardTitle>
                    <CardDescription>Dive deeper into specific topics</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </section>
        </div>
      </article>

      <footer className="py-12 bg-accent text-accent-foreground">
        <div className="container">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6" fill="currentColor" />
              <span className="text-lg font-bold">Pleasure & Wellness Hub</span>
            </div>
            <div className="border-t border-accent-foreground/20 pt-6 text-sm text-accent-foreground/60">
              <p>&copy; 2026 Pleasure & Wellness Hub. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const steps = [
  {
    number: 1,
    title: "Understand Your Anatomy",
    description: "Knowledge is power. Start by learning the basics of sexual anatomy for all bodies.",
    content: [
      "Explore detailed diagrams of external and internal sexual anatomy",
      "Learn the function of each part and how it contributes to pleasure",
      "Understand that anatomy varies widely—there's no single 'normal'",
      "Recognize that pleasure centers extend beyond what's visible externally"
    ],
    action: "Read our comprehensive anatomy guides or watch educational videos to familiarize yourself with your own body."
  },
  {
    number: 2,
    title: "Explore Solo Pleasure",
    description: "Self-discovery is the foundation of sexual wellness. Learn what feels good for you.",
    content: [
      "Set aside private, uninterrupted time for exploration without pressure or goals",
      "Experiment with different types of touch, pressure, and rhythm",
      "Use lubricant to enhance sensation and comfort",
      "Try different positions, breathing techniques, and fantasies",
      "Remember: there's no 'right' way to masturbate—do what feels good"
    ],
    action: "Schedule 30 minutes this week for solo exploration in a comfortable, private space."
  },
  {
    number: 3,
    title: "Learn About Consent and Boundaries",
    description: "Healthy sexual experiences are built on clear communication and mutual respect.",
    content: [
      "Understand the FRIES model: Freely given, Reversible, Informed, Enthusiastic, Specific",
      "Practice saying 'yes' and 'no' clearly and confidently",
      "Recognize that consent is ongoing—it can be withdrawn at any time",
      "Learn to identify and respect your own boundaries before communicating them to others",
      "Understand that enthusiastic consent is the standard, not just the absence of 'no'"
    ],
    action: "Read our Consent 101 article and reflect on your personal boundaries."
  },
  {
    number: 4,
    title: "Develop Communication Skills",
    description: "Effective communication is essential for satisfying intimate experiences.",
    content: [
      "Learn the 'Three Ts' framework: Timing, Turf, and Tone for intimate conversations",
      "Practice using 'I' statements to express desires without blame",
      "Develop vocabulary for talking about sex comfortably and clearly",
      "Ask open-ended questions to understand your partner's needs and preferences",
      "Give and receive feedback graciously during intimate moments"
    ],
    action: "Practice talking about a non-sexual preference using 'I' statements to build confidence."
  },
  {
    number: 5,
    title: "Understand Arousal and Desire",
    description: "Arousal and desire work differently for different people—learn your patterns.",
    content: [
      "Recognize the difference between spontaneous and responsive desire",
      "Understand that arousal often comes after stimulation begins, not before",
      "Identify factors that increase or decrease your desire (stress, connection, novelty, etc.)",
      "Learn that desire fluctuates naturally—low desire doesn't mean something is wrong",
      "Explore what contexts make you feel most open to intimacy"
    ],
    action: "Keep a simple journal for one week noting when you feel desire and what factors might be influencing it."
  },
  {
    number: 6,
    title: "Prioritize Sexual Health",
    description: "Wellness includes physical health, safety, and informed decision-making.",
    content: [
      "Schedule regular STI testing and gynecological/urological check-ups",
      "Learn about contraception options and choose what works best for you",
      "Understand how to use barriers (condoms, dental dams) correctly",
      "Recognize that sexual health is part of overall health—address concerns with healthcare providers",
      "Stay informed about your body's changes and what's normal vs. what requires attention"
    ],
    action: "Schedule a sexual health check-up or research local clinics that offer confidential testing."
  },
];
