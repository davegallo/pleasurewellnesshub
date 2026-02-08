import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function SoloPleasure() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary" fill="currentColor" />
              <span className="text-2xl font-bold text-foreground">Pleasure & Wellness Hub</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">Home</Link>
              <Link href="/calculators" className="text-foreground/80 hover:text-primary transition-colors">Calculators</Link>
              <Link href="/resources" className="text-foreground/80 hover:text-primary transition-colors">Resources</Link>
              <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link>
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
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">All Levels</span>
              <span className="text-sm text-muted-foreground">5 Steps</span>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">Solo Pleasure Exploration</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A comprehensive guide to self-discovery and masturbation for all genders—because knowing your own body is the foundation of great sex.
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
                    {step.exercise && (
                      <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/20">
                        <p className="text-sm font-semibold text-foreground mb-2">Try This:</p>
                        <p className="text-muted-foreground">{step.exercise}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Continue Learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/article/clitoris-anatomy">
                <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle>Understanding the Clitoris</CardTitle>
                    <CardDescription>Comprehensive anatomy and pleasure guide</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/calculator/orgasm">
                <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle>Orgasm Potential Calculator</CardTitle>
                    <CardDescription>Discover your orgasm patterns and potential</CardDescription>
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
    title: "Create a Comfortable, Private Space",
    description: "Set yourself up for success with the right environment and mindset.",
    content: [
      "Choose a time when you won't be interrupted—lock the door, silence your phone",
      "Create ambiance that feels inviting: soft lighting, comfortable temperature, clean sheets",
      "Release any shame or guilt—masturbation is healthy, normal, and beneficial",
      "Let go of performance pressure—there's no goal to 'achieve,' just sensations to explore",
      "Consider using music, candles, or other sensory elements that help you relax"
    ],
    exercise: "Prepare your space before your next solo session. Notice how intentionality affects your experience."
  },
  {
    number: 2,
    title: "Explore Your Whole Body",
    description: "Pleasure isn't limited to genitals—discover your full erogenous map.",
    content: [
      "Start with non-genital touch: neck, ears, nipples, inner thighs, stomach, feet",
      "Experiment with different types of touch: light stroking, firm pressure, scratching, pinching",
      "Use different textures: silk, feathers, ice, warm oil, or your own hands",
      "Notice which areas respond most strongly and at what times in your cycle (if applicable)",
      "Build arousal slowly by teasing yourself and delaying genital touch"
    ],
    exercise: "Spend 10-15 minutes exploring non-genital erogenous zones before moving to genital touch. Map what feels best."
  },
  {
    number: 3,
    title: "Experiment with Techniques and Rhythms",
    description: "There's no single 'right' way to masturbate—find what works for you.",
    content: [
      "Try different hand positions, pressures, and speeds on external genitals",
      "For vulva owners: experiment with direct vs. indirect clitoral stimulation, circular vs. up-and-down motions",
      "For penis owners: vary grip pressure, speed, and stroke length; explore the frenulum and perineum",
      "Incorporate internal stimulation (fingers, toys) to explore G-spot, P-spot, or A-spot",
      "Use plenty of lubricant—it enhances sensation and prevents discomfort"
    ],
    exercise: "Try at least three different techniques in one session. Notice which creates the most pleasurable sensations."
  },
  {
    number: 4,
    title: "Incorporate Toys and Tools",
    description: "Sex toys aren't a replacement for partners—they're tools for self-discovery.",
    content: [
      "Vibrators can provide consistent, intense stimulation that's difficult to achieve manually",
      "Dildos and internal toys help you explore depth, angle, and pressure preferences",
      "Experiment with different vibration patterns, intensities, and toy shapes",
      "Toys designed for specific anatomy (clitoral suckers, prostate massagers) can unlock new sensations",
      "Clean toys before and after use, and use body-safe materials (silicone, glass, stainless steel)"
    ],
    exercise: "If you don't own a toy, research one that interests you. If you do, try using it in a new way or position."
  },
  {
    number: 5,
    title: "Engage Your Mind and Fantasies",
    description: "Arousal is as much mental as physical—explore what turns you on.",
    content: [
      "Experiment with erotic literature, audio erotica, or ethical porn to discover what arouses you",
      "Allow yourself to fantasize without judgment—fantasies don't reflect real-life desires",
      "Try different fantasy scenarios: power dynamics, novelty, past experiences, or pure imagination",
      "Notice patterns in what turns you on—this self-knowledge helps in partnered sex too",
      "Remember: what arouses you mentally may change over time, and that's completely normal"
    ],
    exercise: "During your next session, try incorporating a fantasy or erotic content. Notice how it affects your arousal and pleasure."
  },
];
