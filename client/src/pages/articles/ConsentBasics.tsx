import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "wouter";

export default function ConsentBasics() {
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
              <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">Education</span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>9 min read</span>
              </div>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">Consent 101: Building Healthy, Respectful Intimacy</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A comprehensive guide to understanding, communicating, and practicing enthusiastic consent in all intimate encounters.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">What Is Consent?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Consent is an ongoing, enthusiastic agreement to engage in sexual activity. It must be:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li><strong>Freely given:</strong> Without pressure, manipulation, or coercion</li>
                <li><strong>Reversible:</strong> Anyone can change their mind at any time</li>
                <li><strong>Informed:</strong> All parties understand what they're agreeing to</li>
                <li><strong>Enthusiastic:</strong> Active participation, not passive acceptance</li>
                <li><strong>Specific:</strong> Consent to one activity doesn't mean consent to all activities</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Consent isn't just the absence of "no"—it's the presence of an enthusiastic "yes."
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">The FRIES Model of Consent</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Planned Parenthood's FRIES model provides a clear framework for understanding consent:
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-4">
                <h3 className="text-2xl font-semibold text-foreground mb-2">F - Freely Given</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Consent cannot be obtained through pressure, guilt, manipulation, or threats. It must be given willingly, without fear of consequences for saying no.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-4">
                <h3 className="text-2xl font-semibold text-foreground mb-2">R - Reversible</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Anyone can change their mind at any point, even in the middle of sexual activity. Consent given earlier doesn't obligate anyone to continue.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-4">
                <h3 className="text-2xl font-semibold text-foreground mb-2">I - Informed</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All parties must have accurate information about what they're consenting to. Lying about STI status, birth control, or identity violates informed consent.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-4">
                <h3 className="text-2xl font-semibold text-foreground mb-2">E - Enthusiastic</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Look for active, excited participation—not reluctant agreement. Enthusiastic consent means both people genuinely want to be there.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-2">S - Specific</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Consent to one activity (e.g., kissing) doesn't mean consent to other activities (e.g., intercourse). Each escalation requires new consent.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">What Consent Is NOT</h2>
              
              <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">Silence or lack of resistance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Freezing, going quiet, or not physically resisting does NOT equal consent. Many people freeze during unwanted sexual contact due to fear or shock.
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">Past consent</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Just because someone consented before doesn't mean they consent now. This includes partners in long-term relationships.
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">Consent under the influence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  People who are intoxicated, high, or otherwise incapacitated cannot legally consent. If someone is too drunk to drive, they're too drunk to consent.
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">Consent obtained through manipulation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Guilt-tripping ("If you loved me, you would..."), threats, or wearing someone down until they say yes is NOT consent.
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Implied by clothing, flirting, or location</h3>
                <p className="text-muted-foreground leading-relaxed">
                  What someone wears, how they flirt, or where they go (including going to someone's home) does NOT imply consent to sexual activity.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">How to Ask for Consent</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Asking for consent doesn't have to be awkward or unsexy. Here are ways to check in:
              </p>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Before Sexual Activity</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>"I'd really like to kiss you. Is that okay?"</li>
                <li>"Are you comfortable with this?"</li>
                <li>"What do you want to do tonight?"</li>
                <li>"Can I take your shirt off?"</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">During Sexual Activity</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>"Does this feel good?"</li>
                <li>"Do you want me to keep going?"</li>
                <li>"Is this okay?"</li>
                <li>"What would feel good right now?"</li>
              </ul>

              <h3 className="text-2xl font-semibold text-foreground mb-3">Escalating to New Activities</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>"I'd love to try [activity]. How do you feel about that?"</li>
                <li>"Are you comfortable if we move to the bedroom?"</li>
                <li>"Can I go down on you?"</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">How to Give Consent</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Consent should be clear and enthusiastic. Examples:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>"Yes, I want that."</li>
                <li>"That sounds amazing."</li>
                <li>"I'd love to."</li>
                <li>"Please, yes."</li>
                <li>"Keep going."</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                If you're unsure, it's okay to say, "I'm not sure yet. Can we slow down?" or "Let me think about it."
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">How to Withdraw Consent</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can change your mind at any time, for any reason. Ways to withdraw consent:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>"I need to stop."</li>
                <li>"I'm not comfortable with this anymore."</li>
                <li>"Can we pause for a second?"</li>
                <li>"I changed my mind."</li>
                <li>"This doesn't feel right."</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                A respectful partner will stop immediately, without question or pressure. If they don't, that's a serious red flag.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Consent in Long-Term Relationships</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Consent doesn't disappear in committed relationships. Even if you've been together for years:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>You still need to ask before initiating sexual activity</li>
                <li>Your partner can say no without explanation</li>
                <li>Past consent doesn't guarantee future consent</li>
                <li>Marital rape is real and illegal</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Long-term partners often develop non-verbal cues and shorthand for consent, but explicit check-ins are still important—especially when trying new things.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Recognizing Non-Consent</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Signs that someone is NOT consenting:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>Pulling away or creating physical distance</li>
                <li>Not responding or going silent</li>
                <li>Freezing or tensing up</li>
                <li>Saying "I don't know" or "Maybe"</li>
                <li>Hesitating or seeming uncertain</li>
                <li>Crying or appearing distressed</li>
                <li>Saying "I guess" or "If you want to"</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                <strong>When in doubt, stop and ask.</strong> It's better to pause and check in than to continue without clear consent.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Teaching Consent to Young People</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Consent education should start early (age-appropriately):
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Young children:</strong> Teach bodily autonomy ("You don't have to hug Grandma if you don't want to")</li>
                <li><strong>Tweens:</strong> Discuss boundaries in friendships and respecting others' "no"</li>
                <li><strong>Teens:</strong> Explicitly teach sexual consent, including how to ask, give, and withdraw consent</li>
                <li><strong>Young adults:</strong> Reinforce that consent is ongoing and context-dependent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">The Bottom Line</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Consent is the foundation of healthy, respectful sexual encounters. It's not a buzzkill—it's a way to ensure that everyone involved feels safe, respected, and genuinely excited to be there.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When you prioritize consent, sex becomes better for everyone. Communication increases, boundaries are respected, and intimacy deepens. That's the kind of sex worth having.
              </p>
            </section>
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Continue Learning</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/article/communication-framework">
                <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Communication Framework</CardTitle>
                    <CardDescription>Learn the Three Ts for intimate conversations</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              <Link href="/resources">
                <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
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
