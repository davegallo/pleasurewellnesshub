import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function ConsentGuide() {
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
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">Essential</span>
              <span className="text-sm text-muted-foreground">4 Steps</span>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">Consent and Boundaries in Practice</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Building healthy, respectful intimate relationships through clear communication and mutual respect.
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
                    {step.examples && (
                      <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                        <p className="text-sm font-semibold text-foreground mb-3">Examples:</p>
                        <ul className="space-y-2">
                          {step.examples.map((example, i) => (
                            <li key={i} className="text-sm text-muted-foreground">• {example}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {step.action && (
                      <div className="mt-6 p-4 bg-accent/10 rounded-xl border border-accent/20">
                        <p className="text-sm font-semibold text-foreground mb-2">Practice Exercise:</p>
                        <p className="text-muted-foreground">{step.action}</p>
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
              <Link href="/article/consent-basics">
                <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle>Consent 101 Article</CardTitle>
                    <CardDescription>Deep dive into consent fundamentals</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/article/communication-framework">
                <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle>Communication Framework</CardTitle>
                    <CardDescription>Master the Three Ts for intimate conversations</CardDescription>
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
    title: "Identify Your Own Boundaries",
    description: "Before you can communicate boundaries to others, you need to understand them yourself.",
    content: [
      "Reflect on what activities, contexts, and behaviors feel comfortable vs. uncomfortable for you",
      "Recognize that boundaries can be physical, emotional, and situational",
      "Understand that boundaries may change based on context, partner, and your own state of mind",
      "Give yourself permission to have boundaries without justifying them",
      "Identify your 'hard nos,' 'maybes,' and 'enthusiastic yeses'"
    ],
    action: "Create three lists: activities you're excited about, activities you're curious about, and activities that are off-limits. Revisit this list periodically as your comfort level evolves."
  },
  {
    number: 2,
    title: "Practice Asking for Consent",
    description: "Consent is an active, ongoing conversation—not a one-time checkbox.",
    content: [
      "Ask explicitly before initiating any new activity or escalation",
      "Use clear, direct language: 'Can I kiss you?' or 'Is it okay if I touch you here?'",
      "Check in during intimate moments: 'Does this feel good?' or 'Do you want me to keep going?'",
      "Recognize that silence, lack of resistance, or past consent does NOT equal current consent",
      "Make it easy for your partner to say no by creating a pressure-free environment"
    ],
    examples: [
      "\"I'd really like to [activity]. How do you feel about that?\"",
      "\"Are you comfortable with this?\"",
      "\"Can I take off your shirt?\"",
      "\"What would feel good for you right now?\""
    ],
    action: "Practice asking for consent in low-stakes situations (e.g., 'Can I hug you?' or 'Is it okay if I sit here?') to build comfort with explicit verbal consent."
  },
  {
    number: 3,
    title: "Communicate Your Boundaries Clearly",
    description: "Assertive, respectful communication protects both you and your partner.",
    content: [
      "Use 'I' statements to express your boundaries without blame: 'I'm not comfortable with that' instead of 'You're pushing me'",
      "Be direct and specific—vague hints can be misinterpreted",
      "You don't owe anyone an explanation for your boundaries, but context can help understanding",
      "Practice saying 'no' without apologizing excessively or softening your message",
      "Offer alternatives when appropriate: 'I'm not ready for that, but I'd love to try this instead'"
    ],
    examples: [
      "\"I'm not comfortable with that right now.\"",
      "\"I need to slow down.\"",
      "\"That's a hard no for me.\"",
      "\"I'd prefer to do [alternative] instead.\""
    ],
    action: "Role-play boundary-setting with a trusted friend or in front of a mirror. Practice saying 'no' firmly and kindly without over-explaining."
  },
  {
    number: 4,
    title: "Respect Others' Boundaries Without Question",
    description: "How you respond to a 'no' reveals your character and respect for others.",
    content: [
      "When someone says no, stop immediately—no questions, no pressure, no guilt-tripping",
      "Thank them for being honest and communicating their boundaries",
      "Don't take it personally—boundaries are about the other person's comfort, not your worth",
      "Never try to negotiate, persuade, or wear someone down after they've declined",
      "Recognize that respecting boundaries builds trust and makes future intimacy more likely"
    ],
    examples: [
      "\"Thanks for telling me. I appreciate you being honest.\"",
      "\"No problem at all. What would you like to do instead?\"",
      "\"I'm glad you told me. Let's pause here.\"",
      "\"Your comfort is what matters most to me.\""
    ],
    action: "Reflect on a time when someone respected your 'no' gracefully. How did it make you feel? Commit to offering that same respect to others."
  },
];
