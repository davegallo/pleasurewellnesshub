import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Clock, ArrowLeft, ShoppingBag, Star, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function DesireDiscrepancy() {
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
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">Relationships</span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>11 min read</span>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">Navigating Desire Discrepancy in Relationships</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Practical strategies for couples dealing with mismatched libidos and different sexual needs.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">What Is Desire Discrepancy?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Desire discrepancy occurs when partners in a relationship have different levels of interest in sex. This is one of the most common issues couples face, yet it's often misunderstood and stigmatized.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Important truth:</strong> There's no "normal" amount of sex. What matters is whether both partners feel satisfied, respected, and connected.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Desire discrepancy isn't about one partner being "broken" or "wrong." It's about two people with different needs learning to navigate those differences with compassion and creativity.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Desire Discrepancy Happens</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">1. Different Desire Styles</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                People experience desire in two main ways:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li><strong>Spontaneous desire:</strong> Desire that arises "out of the blue," without external stimulation. Often associated with testosterone levels and more common early in relationships.</li>
                <li><strong>Responsive desire:</strong> Desire that emerges in response to arousal or stimulation. More common in long-term relationships and often linked to estrogen.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Neither is better or worse—they're just different. Problems arise when couples don't understand these differences.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">2. Life Circumstances</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Desire fluctuates based on:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Stress levels (work, finances, caregiving)</li>
                <li>Physical health (chronic pain, illness, medications)</li>
                <li>Mental health (depression, anxiety)</li>
                <li>Hormonal changes (menstrual cycle, pregnancy, menopause)</li>
                <li>Relationship dynamics (conflict, resentment, lack of connection)</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">3. The "Pursuer-Distancer" Dynamic</h3>
              <p className="text-muted-foreground leading-relaxed">
                When one partner initiates frequently and the other declines, a cycle can develop: the higher-desire partner feels rejected and pursues more, while the lower-desire partner feels pressured and withdraws further. This dynamic exacerbates the gap.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Common Myths Debunked</h2>
              
              <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">Myth: "Men always want more sex than women"</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Reality:</strong> Desire discrepancy occurs in all gender combinations. In about 30% of heterosexual relationships, women have higher desire than men.
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">Myth: "Low desire means you don't love your partner"</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Reality:</strong> Desire is influenced by biology, stress, and context—not love. You can deeply love someone and still have lower sexual desire.
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Myth: "The lower-desire partner should just try harder"</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Reality:</strong> Forcing yourself to have unwanted sex creates resentment and damages intimacy. Both partners need to adapt.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Strategies for Navigating the Gap</h2>
              
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">1. Reframe "Initiation"</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For partners with responsive desire, waiting to "feel like it" may never happen. Instead:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Schedule sex (yes, really—it removes pressure and builds anticipation)</li>
                  <li>Start with low-pressure touch (massage, cuddling) and see where it goes</li>
                  <li>Recognize that arousal often comes after you begin, not before</li>
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">2. Expand Your Definition of Sex</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sex doesn't have to mean intercourse. Consider:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Mutual masturbation</li>
                  <li>Oral sex</li>
                  <li>Sensual massage</li>
                  <li>Showering together</li>
                  <li>Using toys together</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Lower-pressure activities can feel more accessible and still foster intimacy.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">3. Address the Emotional Undercurrent</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Often, desire discrepancy is a symptom of deeper issues:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Unresolved conflict or resentment</li>
                  <li>Lack of emotional intimacy</li>
                  <li>Unequal division of household labor</li>
                  <li>Feeling unappreciated or unseen</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Work on these issues outside the bedroom. For many people, emotional connection fuels sexual desire.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">4. Communicate Without Blame</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Use "I" statements and avoid accusatory language:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Instead of:</strong> "You never want to have sex anymore."</li>
                  <li><strong>Try:</strong> "I miss feeling connected to you physically. Can we talk about what might help?"</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Focus on understanding each other's experiences, not "winning" the argument.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">5. Consider Professional Help</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If desire discrepancy is causing significant distress, a sex therapist or couples counselor can help. They can:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Identify underlying issues (medical, psychological, relational)</li>
                  <li>Teach communication skills</li>
                  <li>Suggest exercises to rebuild intimacy</li>
                  <li>Provide a neutral space to discuss sensitive topics</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">For the Higher-Desire Partner</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3">
                <li><strong>Recognize that rejection isn't personal.</strong> Your partner's lower desire is about them, not you.</li>
                <li><strong>Stop pressuring.</strong> Pressure creates anxiety, which kills desire.</li>
                <li><strong>Invest in non-sexual intimacy.</strong> Emotional connection often precedes sexual desire.</li>
                <li><strong>Take responsibility for your own pleasure.</strong> Masturbation is healthy and can reduce pressure on your partner.</li>
                <li><strong>Be patient.</strong> Rebuilding desire takes time.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">For the Lower-Desire Partner</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3">
                <li><strong>Acknowledge your partner's needs.</strong> Even if you don't feel the same desire, their needs are valid.</li>
                <li><strong>Explore what might increase your desire.</strong> Is it stress reduction? More foreplay? Different activities?</li>
                <li><strong>Communicate what you need to feel aroused.</strong> Don't expect your partner to read your mind.</li>
                <li><strong>Consider "responsive desire."</strong> You might not feel desire until after arousal begins—and that's okay.</li>
                <li><strong>Don't force yourself.</strong> Unwanted sex damages intimacy. Find compromises that feel good for both of you.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">When to Worry</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Desire discrepancy becomes a serious problem when:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>One or both partners feel chronically unhappy or resentful</li>
                <li>Communication has broken down entirely</li>
                <li>One partner is considering infidelity or ending the relationship</li>
                <li>There's a sudden, unexplained drop in desire (could indicate medical or psychological issues)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                If you're at this point, seek professional help. Desire discrepancy is treatable, but it requires both partners' commitment.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">The Bottom Line</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Desire discrepancy is normal. Most long-term couples experience it at some point. The key is to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Approach it as a team problem, not a blame game</li>
                <li>Communicate openly and compassionately</li>
                <li>Be willing to compromise and experiment</li>
                <li>Prioritize emotional intimacy alongside physical intimacy</li>
                <li>Seek help when needed</li>
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
              <Link href="/article/communication-framework">
                <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle>Communication Framework</CardTitle>
                    <CardDescription>Learn the Three Ts for intimate conversations</CardDescription>
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
    reviews: 4123
  },
  {
    name: "Come As You Are (Book)",
    description: "Emily Nagoski's book on understanding responsive vs. spontaneous desire.",
    price: 18,
    rating: 5,
    reviews: 3421
  },
  {
    name: "Couples Therapy Workbook",
    description: "Structured exercises for improving intimacy and communication.",
    price: 24,
    rating: 4,
    reviews: 1687
  },
  {
    name: "Sensual Massage Oil Set",
    description: "Organic massage oils for non-sexual intimacy and connection.",
    price: 32,
    rating: 5,
    reviews: 2341
  },
];
