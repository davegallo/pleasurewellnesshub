import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Clock, ArrowLeft, ShoppingBag, Star, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function OrgasmGap() {
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
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">Wellness</span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">The Orgasm Gap: What It Is and How to Close It</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Exploring gender disparities in orgasm frequency and evidence-based solutions for greater sexual equity.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Understanding the Gap</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The "orgasm gap" refers to the well-documented disparity in orgasm frequency between different groups during partnered sexual activity. Research consistently shows:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Heterosexual men report orgasming 95% of the time during partnered sex</li>
                <li>Lesbian women report orgasming 86% of the time</li>
                <li>Bisexual women report orgasming 66% of the time</li>
                <li>Heterosexual women report orgasming only 65% of the time</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                This gap isn't biological—it's cultural, educational, and behavioral. And it's entirely closeable.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Why the Gap Exists</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">1. The "Intercourse-as-Main-Event" Script</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mainstream sexual scripts prioritize penetrative intercourse as the "real sex," with everything else labeled "foreplay." This script is built around penile stimulation and orgasm, often sidelining clitoral stimulation—which is the most reliable route to orgasm for vulva owners.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">2. Lack of Comprehensive Sex Education</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most sex education focuses on reproduction and disease prevention, not pleasure. Many people never learn:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>The full anatomy of the clitoris</li>
                <li>That most vulva owners need clitoral stimulation to orgasm</li>
                <li>Techniques for effective stimulation</li>
                <li>That sexual pleasure is a valid goal in itself</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">3. Communication Barriers</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Many people—especially women—feel uncomfortable articulating their desires or giving feedback during sex. This silence perpetuates ineffective techniques and unmet needs.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">4. The "Orgasm Obligation" Myth</h3>
              <p className="text-muted-foreground leading-relaxed">
                Some people fake orgasms to avoid disappointing partners or to end unsatisfying encounters. This creates a feedback loop where partners never learn what actually works.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Evidence-Based Solutions</h2>
              
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">1. Prioritize Clitoral Stimulation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Research shows that only 18% of vulva owners can orgasm from penetration alone. The vast majority need direct or indirect clitoral stimulation. Solutions:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Incorporate manual or oral clitoral stimulation before, during, or after intercourse</li>
                  <li>Use positions that allow for clitoral contact (e.g., grinding in cowgirl position)</li>
                  <li>Add a vibrator during penetrative sex</li>
                  <li>Reframe "foreplay" as essential, not optional</li>
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">2. Expand Your Sexual Script</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Stop treating intercourse as the main event. Instead, view sex as a menu of pleasurable activities:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Oral sex</li>
                  <li>Manual stimulation</li>
                  <li>Mutual masturbation</li>
                  <li>Toy play</li>
                  <li>Sensual massage</li>
                  <li>Penetrative sex (if desired)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  All of these are "real sex." Orgasm can happen at any point—not just during penetration.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">3. Communicate Openly</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Use the "Three Ts" framework (Timing, Turf, Tone) to talk about pleasure:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Share what feels good in the moment: "Yes, just like that"</li>
                  <li>Offer gentle redirection: "Can you try a little slower?"</li>
                  <li>Discuss preferences outside the bedroom</li>
                  <li>Ask for feedback: "What do you like?"</li>
                </ul>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">4. Educate Yourself and Your Partner</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Knowledge is power. Read books, watch educational videos, and explore anatomy together. Recommended resources:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><em>Come As You Are</em> by Emily Nagoski</li>
                  <li><em>She Comes First</em> by Ian Kerner</li>
                  <li>OMGYes.com (interactive tutorials)</li>
                  <li>Pleasure anatomy diagrams</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">What About Orgasm Pressure?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Closing the orgasm gap doesn't mean making orgasm the sole goal of sex. Pleasure, connection, and intimacy matter too. However, the gap reveals systemic inequity in whose pleasure is prioritized.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The goal isn't to create pressure to orgasm every time. It's to ensure that:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Both partners' pleasure is valued equally</li>
                <li>Everyone has the knowledge and skills to facilitate orgasm when desired</li>
                <li>Sexual encounters don't end when one partner orgasms</li>
                <li>Pleasure is mutual, not one-sided</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">The Lesbian Advantage</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Why do lesbian women report the highest orgasm rates? Research suggests several factors:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li><strong>Longer sexual encounters:</strong> Lesbian sex lasts an average of 30-45 minutes, compared to 15-20 minutes for heterosexual encounters</li>
                <li><strong>More varied activities:</strong> Less focus on penetration, more on oral sex, manual stimulation, and full-body touch</li>
                <li><strong>Better communication:</strong> Partners with similar anatomy may find it easier to understand each other's needs</li>
                <li><strong>Mutual pleasure focus:</strong> Sex doesn't end when one partner orgasms</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Heterosexual couples can learn from these patterns by slowing down, diversifying activities, and prioritizing mutual pleasure.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Practical Action Steps</h2>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-3">
                <li><strong>Tonight:</strong> Ask your partner, "What feels really good for you?" Listen without defensiveness.</li>
                <li><strong>This week:</strong> Try one new technique focused on clitoral stimulation (if applicable).</li>
                <li><strong>This month:</strong> Read one book or watch one educational video about pleasure together.</li>
                <li><strong>Ongoing:</strong> Make pleasure equity a priority. If one partner consistently orgasms and the other doesn't, address it.</li>
              </ol>
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
              <Link href="/calculator/orgasm">
                <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle>Orgasm Potential Calculator</CardTitle>
                    <CardDescription>Assess factors influencing your orgasmic response</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/article/clitoris-anatomy">
                <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle>Understanding the Clitoris</CardTitle>
                    <CardDescription>Comprehensive anatomy and pleasure guide</CardDescription>
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
    name: "Come As You Are (Book)",
    description: "Emily Nagoski's groundbreaking book on female sexuality and the science of pleasure.",
    price: 18,
    rating: 5,
    reviews: 3421
  },
  {
    name: "Couples Vibrator",
    description: "Wearable vibrator for clitoral stimulation during penetrative sex.",
    price: 129,
    rating: 5,
    reviews: 2187
  },
  {
    name: "She Comes First (Book)",
    description: "Ian Kerner's guide to closing the orgasm gap through oral techniques.",
    price: 16,
    rating: 5,
    reviews: 2841
  },
  {
    name: "OMGYes Annual Subscription",
    description: "Interactive tutorials on pleasure techniques based on research with thousands of women.",
    price: 59,
    rating: 5,
    reviews: 1923
  },
];
