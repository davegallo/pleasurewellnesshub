import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Clock, ArrowLeft, ShoppingBag, Star, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function CommunicationFramework() {
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
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">Communication</span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>6 min read</span>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">The Three Ts: Timing, Turf, and Tone</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Master the framework for effective intimate conversations with your partner using this proven communication strategy.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <p className="text-muted-foreground leading-relaxed">
                Talking about sex with a partner can feel vulnerable, awkward, or even scary. But effective sexual communication is one of the strongest predictors of relationship satisfaction and sexual fulfillment. The "Three Ts" framework—Timing, Turf, and Tone—provides a simple structure for navigating these conversations successfully.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">1. Timing: When to Have the Conversation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Timing can make or break a sexual conversation. The wrong moment can lead to defensiveness, misunderstanding, or hurt feelings.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Good Timing</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li><strong>During a calm, neutral moment:</strong> Not immediately before, during, or right after sex</li>
                <li><strong>When you're both relaxed:</strong> After a pleasant meal, during a walk, or in a comfortable setting</li>
                <li><strong>When you have privacy and time:</strong> Not rushed or in public spaces</li>
                <li><strong>When emotions are stable:</strong> Not during an argument or when either person is upset</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Poor Timing</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Immediately after unsatisfying sex (feels like criticism)</li>
                <li>During foreplay or intimacy (creates pressure)</li>
                <li>When one person is stressed, tired, or distracted</li>
                <li>In the middle of an unrelated conflict</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">2. Turf: Where to Have the Conversation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The physical location of your conversation matters more than you might think. Choose a setting that feels safe, private, and neutral.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Ideal Locations</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li><strong>Living room or kitchen:</strong> Neutral, non-bedroom spaces reduce pressure</li>
                <li><strong>During a walk or drive:</strong> Side-by-side positioning can feel less confrontational</li>
                <li><strong>A quiet, private space:</strong> Where you won't be interrupted or overheard</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Locations to Avoid</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>The bedroom (too associated with sex, can feel like performance review)</li>
                <li>Public places where privacy is limited</li>
                <li>Spaces where either person feels trapped or uncomfortable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">3. Tone: How to Communicate</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your tone—both verbal and non-verbal—sets the emotional temperature of the conversation. The goal is to create safety, not defensiveness.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Effective Tone Strategies</h3>
              
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Use "I" Statements</h4>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Instead of: "You never touch me the way I like"
                </p>
                <p className="text-foreground font-medium">
                  Try: "I really enjoy it when you touch me like this..."
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Lead with Appreciation</h4>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Instead of: "Our sex life is boring"
                </p>
                <p className="text-foreground font-medium">
                  Try: "I love being intimate with you. I've been thinking about something new we could try..."
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Frame as Collaboration</h4>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Instead of: "You need to do this differently"
                </p>
                <p className="text-foreground font-medium">
                  Try: "I wonder if we could experiment with..."
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">Avoid Blame and Criticism</h4>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Instead of: "You're bad at foreplay"
                </p>
                <p className="text-foreground font-medium">
                  Try: "I'd love more time for us to warm up together. Can we try spending 15 minutes on foreplay?"
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Putting It All Together: Example Conversation</h2>
              <div className="bg-secondary/20 border border-secondary/40 rounded-2xl p-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Timing:</strong> Saturday morning over coffee, both relaxed
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">Turf:</strong> Kitchen table, neutral space
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <strong className="text-foreground">Tone:</strong> Warm, curious, collaborative
                </p>
                <p className="text-foreground italic leading-relaxed">
                  "Hey, I've been thinking about our intimate life lately, and I wanted to share something with you. I love being close to you, and I really appreciate how attentive you are. I've been curious about trying [specific thing]. What do you think about exploring that together? I'd love to hear your thoughts."
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Common Conversation Starters</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>"I've been thinking about something I'd like to try with you..."</li>
                <li>"Can we talk about what feels really good for both of us?"</li>
                <li>"I read something interesting about [topic]. What do you think?"</li>
                <li>"I love when you [specific action]. Could we do more of that?"</li>
                <li>"I'm curious about your fantasies. Want to share?"</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">What If It Goes Wrong?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Even with perfect timing, turf, and tone, conversations can still feel awkward or lead to misunderstandings. That's normal. If things get tense:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Pause and acknowledge the discomfort: "This feels awkward, but I think it's important"</li>
                <li>Reassure your partner: "I'm bringing this up because I care about us"</li>
                <li>Take a break if needed: "Let's come back to this later when we've both had time to think"</li>
                <li>Consider writing a letter if verbal communication feels too hard</li>
              </ul>
            </section>
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Recommended Resources</h2>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-8">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Affiliate Disclosure:</strong> We may earn a commission from purchases made through these links.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProducts.map((product, index) => (
                <Card key={index} className="spring-hover hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl mb-4 flex items-center justify-center">
                      <ShoppingBag className="w-12 h-12 text-primary/40" />
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < product.rating ? "fill-primary text-primary" : "text-muted"}`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">({product.reviews})</span>
                    </div>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary">${product.price}</span>
                    </div>
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      View Product <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Continue Learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/calculator/communication">
                <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle>Communication Score Calculator</CardTitle>
                    <CardDescription>Assess your relationship communication patterns</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/resources">
                <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle>Browse All Articles</CardTitle>
                    <CardDescription>Explore more educational content</CardDescription>
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

const relatedProducts = [
  {
    name: "Mating in Captivity (Book)",
    description: "Esther Perel's guide to maintaining desire in long-term relationships.",
    price: 17,
    rating: 5,
    reviews: 2847
  },
  {
    name: "Come As You Are (Book)",
    description: "Emily Nagoski's science-based approach to understanding sexuality and communication.",
    price: 18,
    rating: 5,
    reviews: 3421
  },
  {
    name: "Couples Communication Card Deck",
    description: "Conversation starters for intimate discussions and deeper connection.",
    price: 25,
    rating: 4,
    reviews: 1234
  },
  {
    name: "The State of Affairs (Book)",
    description: "Esther Perel on infidelity, trust, and rebuilding relationships.",
    price: 19,
    rating: 5,
    reviews: 1987
  },
];
