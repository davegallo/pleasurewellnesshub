import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Heart, Target, Users, Shield } from "lucide-react";
import { Link } from "wouter";

export default function About() {
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
              <Link href="/about" className="text-primary font-medium">About</Link>
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16">
        <div className="container max-w-4xl">
          <h1 className="text-6xl font-bold text-foreground mb-6 text-center">About Us</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-center mb-16">
            Building a world where sexual wellness education is accessible, shame-free, and evidence-based.
          </p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Pleasure & Wellness Hub was created to fill the gap left by traditional sex education. We believe that everyone deserves access to comprehensive, shame-free information about sexual wellness, pleasure, and intimacy. Our mission is to provide evidence-based education that empowers adults to make informed decisions about their intimate lives.
            </p>

            <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              Our Approach
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We combine scientific research with compassionate, inclusive education. Our content is:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li><strong>Evidence-based:</strong> Grounded in peer-reviewed research and expert consensus</li>
              <li><strong>LGBTQ+ inclusive:</strong> Designed for all genders, orientations, and relationship structures</li>
              <li><strong>Shame-free:</strong> Promoting body positivity and sexual autonomy</li>
              <li><strong>Practical:</strong> Offering actionable tools and techniques you can use today</li>
            </ul>

            <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Our Values
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are committed to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
              <li>Consent and communication as foundations of healthy intimacy</li>
              <li>Inclusivity across all identities and experiences</li>
              <li>Privacy and confidentiality in all our services</li>
              <li>Continuous learning and updating our content based on new research</li>
              <li>Accessibility for people of all backgrounds and abilities</li>
            </ul>

            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Get Started Today</h3>
              <p className="text-muted-foreground mb-6">
                Ready to begin your sexual wellness journey? Explore our interactive calculators and educational resources.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/calculators">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Explore Calculators
                  </Button>
                </Link>
                <Link href="/resources">
                  <Button variant="outline">
                    Browse Resources
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-accent text-accent-foreground">
        <div className="container">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6" fill="currentColor" />
              <span className="text-lg font-bold">Pleasure & Wellness Hub</span>
            </div>
            <p className="text-sm text-accent-foreground/80 mb-4">
              Evidence-based sexual wellness education for adults.
            </p>
            <div className="border-t border-accent-foreground/20 pt-6 text-sm text-accent-foreground/60">
              <p>&copy; 2026 Pleasure & Wellness Hub. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
