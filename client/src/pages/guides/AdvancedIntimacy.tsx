import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function AdvancedIntimacy() {
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
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">Advanced</span>
              <span className="text-sm text-muted-foreground">8 Steps</span>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">Advanced Intimacy Techniques for Couples</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Deepen your connection with advanced communication and pleasure techniques for long-term partners.
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
                        <p className="text-sm font-semibold text-foreground mb-2">Partner Exercise:</p>
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
              <Link href="/article/desire-discrepancy">
                <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle>Navigating Desire Discrepancy</CardTitle>
                    <CardDescription>Strategies for mismatched libidos</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/calculator/communication">
                <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle>Communication Score Calculator</CardTitle>
                    <CardDescription>Assess your relationship communication</CardDescription>
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
    title: "Master Sensate Focus",
    description: "A structured approach to rediscovering touch without performance pressure.",
    content: [
      "Begin with non-genital touch only—explore your partner's entire body with curiosity",
      "Take turns being the 'giver' and 'receiver' to practice both active and receptive roles",
      "Focus on sensation, not arousal—notice texture, temperature, and your partner's responses",
      "Gradually incorporate genital touch in later sessions, still without the goal of orgasm",
      "Use this technique to rebuild intimacy after periods of disconnection or stress"
    ],
    exercise: "Set aside 30-45 minutes for a sensate focus session. Start with non-genital touch for 15 minutes each, then switch roles. Discuss what you noticed afterward without judgment."
  },
  {
    number: 2,
    title: "Practice Tantric Breathing",
    description: "Synchronize breath and energy to deepen connection during intimacy.",
    content: [
      "Sit facing each other, maintaining eye contact and breathing in unison",
      "One partner inhales while the other exhales, creating a circular breath pattern",
      "Place hands on each other's hearts to feel the rhythm and connection",
      "Incorporate this breathing during foreplay or intercourse to heighten presence",
      "Use breath to manage arousal—slow breathing can delay orgasm and extend pleasure"
    ],
    exercise: "Practice synchronized breathing for 5-10 minutes before intimacy. Notice how it shifts your awareness and connection."
  },
  {
    number: 3,
    title: "Explore Edging and Orgasm Control",
    description: "Build intensity and prolong pleasure through controlled arousal.",
    content: [
      "Bring yourself or your partner close to orgasm, then pause or reduce stimulation",
      "Repeat the cycle 3-5 times before allowing release—this intensifies the final orgasm",
      "Communicate clearly about arousal levels using a 1-10 scale",
      "Experiment with different types of stimulation during the 'pause' phases",
      "This technique can help partners with different arousal timelines sync up"
    ],
    exercise: "During your next intimate session, practice edging together. Take turns controlling each other's arousal and building anticipation."
  },
  {
    number: 4,
    title: "Introduce Power Dynamics Play",
    description: "Safely explore dominance and submission to add novelty and excitement.",
    content: [
      "Discuss boundaries, safe words, and desires before any power play",
      "Start small—try blindfolding, light restraints, or verbal commands",
      "Switch roles to understand both perspectives and discover preferences",
      "Power play is about trust and vulnerability, not actual control or harm",
      "Debrief after each session to ensure both partners felt safe and satisfied"
    ],
    exercise: "Choose one light power dynamic to try (e.g., blindfolding, giving/receiving commands). Discuss boundaries beforehand and check in afterward."
  },
  {
    number: 5,
    title: "Map Each Other's Erogenous Zones",
    description: "Go beyond the obvious to discover hidden pleasure points.",
    content: [
      "Use a 'body mapping' session to explore non-genital erogenous zones (neck, ears, inner thighs, etc.)",
      "Rate sensitivity on different areas using a 1-10 scale and create a 'pleasure map'",
      "Experiment with different types of touch: light, firm, scratching, kissing, etc.",
      "Revisit this exercise periodically—sensitivity changes with hormones, stress, and context",
      "Incorporate newly discovered zones into your regular intimate repertoire"
    ],
    exercise: "Set aside 20 minutes to map each other's bodies. Use a timer and take turns exploring while the receiver gives feedback."
  },
  {
    number: 6,
    title: "Practice Karezza (Slow Sex)",
    description: "Engage in prolonged, gentle intercourse focused on connection over climax.",
    content: [
      "Karezza emphasizes slow, mindful movement and sustained connection without the goal of orgasm",
      "Maintain eye contact and synchronized breathing throughout",
      "Move slowly and pause frequently to savor sensation and intimacy",
      "This practice can reduce performance pressure and deepen emotional bonding",
      "Some couples report increased desire frequency when practicing Karezza regularly"
    ],
    exercise: "Try a 20-30 minute Karezza session. Focus on connection and sensation rather than building toward orgasm. Reflect on the experience together."
  },
  {
    number: 7,
    title: "Incorporate Fantasy Sharing",
    description: "Build trust and novelty by sharing and exploring fantasies together.",
    content: [
      "Create a judgment-free space to share fantasies—start with less vulnerable ones",
      "Distinguish between fantasies you'd like to act on vs. those that are just mental turn-ons",
      "Use the 'Yes/No/Maybe' list exercise to identify shared interests",
      "Start with low-stakes fantasy role-play (e.g., strangers meeting at a bar)",
      "Remember: sharing a fantasy doesn't obligate anyone to act on it"
    ],
    exercise: "Each partner writes down 3 fantasies (ranging from mild to adventurous). Share one each and discuss what appeals about it without committing to action."
  },
  {
    number: 8,
    title: "Schedule 'State of the Union' Check-Ins",
    description: "Maintain intimacy through regular, structured conversations about your sex life.",
    content: [
      "Set a recurring monthly or quarterly 'intimacy check-in' outside the bedroom",
      "Discuss what's working well, what you'd like more/less of, and any concerns",
      "Use 'I' statements and focus on desires rather than complaints",
      "Celebrate successes and express appreciation for effort and vulnerability",
      "Treat this as ongoing maintenance, not crisis management"
    ],
    exercise: "Schedule your first 'State of the Union' check-in. Use prompts like: 'What made me feel most connected this month?' and 'One thing I'd like to try next month is...'"
  },
];
