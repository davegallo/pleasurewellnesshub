import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Clock, ArrowLeft, ShoppingBag, Star, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function OralSexGuide() {
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
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">Techniques</span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">Oral Sex Guide for All Bodies</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Inclusive, detailed techniques for giving and receiving oral pleasure with confidence and skill.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <p className="text-muted-foreground leading-relaxed">
                Oral sex is one of the most intimate and pleasurable sexual activities, yet it's often shrouded in anxiety, misinformation, and uncertainty. This comprehensive guide covers techniques for all bodies, emphasizing communication, consent, and mutual pleasure.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Before You Begin: The Essentials</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">Consent and Communication</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Enthusiastic consent is non-negotiable. Before engaging in oral sex, have an explicit conversation about:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Boundaries and preferences</li>
                <li>STI status and safer sex practices</li>
                <li>What feels good and what doesn't</li>
                <li>Signals for "more," "less," or "stop"</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Hygiene and Preparation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Basic hygiene makes oral sex more comfortable for everyone:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Wash with warm water and mild, unscented soap</li>
                <li>Trim (don't shave) pubic hair if desired—but it's entirely optional</li>
                <li>Stay hydrated to keep mucous membranes healthy</li>
                <li>Use dental dams or condoms for safer sex</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Techniques for Vulva Owners</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">1. Start Slowly</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Begin with kisses and gentle touches around the inner thighs, mons pubis, and outer labia. Build anticipation before making direct contact with the clitoris.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">2. Use Your Whole Tongue</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vary between the flat of your tongue (for broad, gentle strokes) and the tip (for precise stimulation). Try:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li><strong>Long, slow licks:</strong> From the vaginal opening up to the clitoris</li>
                <li><strong>Circular motions:</strong> Around the clitoral hood and glans</li>
                <li><strong>Flicking:</strong> Quick, light tongue movements on the clitoris</li>
                <li><strong>Sucking:</strong> Gentle suction on the clitoris (start light!)</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">3. Add Fingers</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Combine oral stimulation with internal or external touch:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Insert one or two fingers and use a "come hither" motion to stimulate the G-spot</li>
                <li>Apply gentle pressure to the mons pubis to increase clitoral sensitivity</li>
                <li>Stroke the labia or perineum for added sensation</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">4. Find a Rhythm</h3>
              <p className="text-muted-foreground leading-relaxed">
                Once you find something that works, maintain consistency. Many people need steady, repetitive stimulation to reach orgasm. Resist the urge to switch techniques constantly.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Techniques for Penis Owners</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">1. Start with Teasing</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Kiss and lick the inner thighs, lower abdomen, and around the base of the penis. Build arousal before making direct contact.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">2. Focus on the Frenulum</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The frenulum (the band of tissue on the underside of the penis, just below the head) is extremely sensitive. Use your tongue to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Make slow, circular motions around the frenulum</li>
                <li>Flick lightly with the tip of your tongue</li>
                <li>Apply gentle suction to the head while tonguing the frenulum</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">3. Use Your Hands</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your mouth and hands should work together:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Wrap one hand around the base and stroke in rhythm with your mouth</li>
                <li>Cup and gently massage the testicles (if desired)</li>
                <li>Apply pressure to the perineum for added sensation</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">4. Vary Depth and Pressure</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Alternate between:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Shallow:</strong> Focus on the head and frenulum</li>
                <li><strong>Deep:</strong> Take more of the shaft (only as comfortable)</li>
                <li><strong>Suction:</strong> Create a seal with your lips and apply gentle suction</li>
                <li><strong>Tongue work:</strong> Swirl your tongue around the head</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Pro Tips for Everyone</h2>
              
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">Stay Hydrated</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Keep water nearby. A dry mouth makes oral sex less pleasant for both partners.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">Pay Attention to Feedback</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Listen to verbal cues, watch body language, and notice breathing patterns. If your partner's hips are moving or their breathing quickens, you're on the right track.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">Take Breaks</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your jaw will get tired. Switch to using your hands, kiss other areas, or ask your partner to guide you.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Experiment with Temperature</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Try sipping warm tea or cold water before oral sex to create interesting sensations.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Common Concerns Addressed</h2>
              
              <h3 className="text-2xl font-semibold text-foreground mb-3">What if I gag?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Gagging is normal, especially when taking a penis deeper. Control depth with your hand at the base, breathe through your nose, and relax your throat. There's no pressure to "deep throat."
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">What about taste and smell?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Healthy genitals have a natural scent and taste. Diet, hydration, and hygiene affect this. If something seems off (strong odor, unusual discharge), it could indicate an infection—pause and suggest a check-up.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Do I have to swallow?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Absolutely not. Discuss beforehand whether your partner will ejaculate in your mouth, and decide what you're comfortable with. Spitting, swallowing, or finishing with your hand are all valid choices.
              </p>
            </section>
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Recommended Products</h2>
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
              <Link href="/article/clitoris-anatomy">
                <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <CardTitle>Understanding the Clitoris</CardTitle>
                    <CardDescription>Comprehensive anatomy and pleasure guide</CardDescription>
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
    name: "Flavored Lubricant Variety Pack",
    description: "Body-safe, sugar-free flavored lubes that make oral sex more enjoyable.",
    price: 32,
    rating: 5,
    reviews: 1923
  },
  {
    name: "Dental Dam Sampler",
    description: "Latex and non-latex dental dams for safer oral sex on vulvas.",
    price: 12,
    rating: 4,
    reviews: 687
  },
  {
    name: "She Comes First (Book)",
    description: "Ian Kerner's guide to oral sex techniques for vulva owners.",
    price: 16,
    rating: 5,
    reviews: 2841
  },
  {
    name: "Throat Numbing Spray",
    description: "Mint-flavored spray to reduce gag reflex during oral sex.",
    price: 18,
    rating: 4,
    reviews: 1456
  },
];
