import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Clock, Tag, ArrowLeft, ShoppingBag, Star, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function ClitorisAnatomy() {
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
          {/* Back Button */}
          <Link href="/resources">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Resources
            </Button>
          </Link>

          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">Anatomy</span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">Understanding the Clitoris: Anatomy and Pleasure</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A comprehensive guide to clitoral anatomy and stimulation techniques backed by research and expert insights.
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">The Hidden Iceberg</h2>
              <p className="text-muted-foreground leading-relaxed">
                For centuries, the clitoris was misunderstood, minimized, or ignored entirely in medical texts and sex education. What most people see—the glans clitoris, or the external "button"—is just the tip of a much larger structure. In reality, the clitoris is an iceberg: what's visible externally represents only about 10% of the entire organ.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The full clitoral structure extends internally, with two "legs" (crura) and two bulbs of erectile tissue that wrap around the vaginal canal. When aroused, these internal structures engorge with blood, contributing to the sensations experienced during penetration and external stimulation alike.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Anatomy Breakdown</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The clitoris consists of several key components:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Glans clitoris:</strong> The external, visible portion located at the top of the vulva where the inner labia meet. It contains approximately 8,000 nerve endings—more than any other part of the human body.</li>
                <li><strong>Clitoral hood:</strong> A fold of skin that covers and protects the glans. The hood can be gently retracted during arousal or stimulation.</li>
                <li><strong>Clitoral shaft:</strong> The internal portion that connects the glans to the body of the clitoris.</li>
                <li><strong>Crura (legs):</strong> Two internal "arms" of erectile tissue that extend from the shaft and run along either side of the vaginal opening.</li>
                <li><strong>Vestibular bulbs:</strong> Two bulbs of erectile tissue that sit on either side of the vaginal opening and become engorged during arousal.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Why This Matters for Pleasure</h2>
              <p className="text-muted-foreground leading-relaxed">
                Understanding clitoral anatomy transforms how we approach pleasure. Because the clitoris extends internally, stimulation doesn't have to be limited to the external glans. Many people experience pleasure from:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Direct glans stimulation:</strong> Using fingers, tongues, or vibrators on the external portion</li>
                <li><strong>Indirect stimulation through the hood:</strong> Gentler pressure that avoids overstimulation</li>
                <li><strong>Internal stimulation:</strong> Penetration that stimulates the internal crura and bulbs</li>
                <li><strong>Combined stimulation:</strong> Simultaneous external and internal touch</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Research-Backed Techniques</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Studies on sexual satisfaction consistently show that clitoral stimulation is the most reliable route to orgasm for people with vulvas. Here are evidence-based techniques:
              </p>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">1. Circular Motion</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Using a finger or tongue to make slow, circular motions around the glans and hood. Start with gentle pressure and increase based on feedback.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">2. Up-and-Down Strokes</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vertical movements along the shaft and glans, varying speed and pressure. This technique works well with lubrication.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">3. Side-to-Side Stimulation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Horizontal movements that stimulate the sides of the clitoris, which can be less intense than direct glans contact.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">4. The "Come Hither" Motion</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Internal stimulation using fingers curved upward to massage the internal clitoral structures through the vaginal wall (often called the G-spot area).
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Common Myths Debunked</h2>
              
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">Myth: "Vaginal orgasms are superior to clitoral orgasms"</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Reality:</strong> All orgasms involve the clitoris. What's often called a "vaginal orgasm" is actually stimulation of the internal clitoral structures through the vaginal wall. There's no hierarchy of orgasm types.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">Myth: "The clitoris is just a small button"</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Reality:</strong> The clitoris is a large, complex organ with both external and internal components. The visible glans is only 10% of the structure.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Myth: "Everyone with a clitoris likes the same stimulation"</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Reality:</strong> Preferences vary widely. Some people prefer direct, intense stimulation; others find it overwhelming and prefer gentler, indirect touch. Communication and experimentation are key.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Tips for Exploration</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Use plenty of lubricant—the clitoris has no natural lubrication</li>
                <li>Start with gentle touch and gradually increase pressure</li>
                <li>Experiment with different rhythms, patterns, and techniques</li>
                <li>Pay attention to what feels good in the moment (preferences can change)</li>
                <li>Communicate openly with partners about what works</li>
                <li>Remember that arousal takes time—don't rush</li>
              </ul>
            </section>
          </div>

          {/* Related Products */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Recommended Products</h2>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-8">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Affiliate Disclosure:</strong> We may earn a commission from purchases made through these links. We only recommend body-safe, high-quality products.
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

          {/* Further Reading */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Continue Learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/resources">
                <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle>Browse All Articles</CardTitle>
                    <CardDescription>Explore more educational content on sexual wellness</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/calculators">
                <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle>Take an Assessment</CardTitle>
                    <CardDescription>Get personalized insights with our interactive calculators</CardDescription>
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
    name: "Clitoral Stimulation Vibrator",
    description: "Precision-designed for targeted clitoral pleasure with multiple intensity settings.",
    price: 89,
    rating: 5,
    reviews: 1847
  },
  {
    name: "Premium Water-Based Lubricant",
    description: "pH-balanced, body-safe lubricant perfect for clitoral stimulation and exploration.",
    price: 24,
    rating: 5,
    reviews: 2341
  },
  {
    name: "Come As You Are (Book)",
    description: "Emily Nagoski's groundbreaking book on female sexuality and pleasure science.",
    price: 18,
    rating: 5,
    reviews: 3421
  },
  {
    name: "Anatomy Education Poster",
    description: "Detailed anatomical diagram of the full clitoral structure for learning.",
    price: 15,
    rating: 4,
    reviews: 892
  },
];
