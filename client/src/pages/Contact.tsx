import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Mail, MessageCircle, HelpCircle } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
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

      <section className="pt-32 pb-16">
        <div className="container max-w-4xl">
          <h1 className="text-6xl font-bold text-foreground mb-6 text-center">Contact Us</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-center mb-16">
            We're here to help with questions, feedback, or partnership inquiries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="spring-hover hover:shadow-lg transition-all">
              <CardHeader>
                <Mail className="w-8 h-8 text-primary mb-3" />
                <CardTitle>General Inquiries</CardTitle>
                <CardDescription>Questions about our content or services</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="mailto:hello@pleasurewellnesshub.com" className="text-primary hover:underline">
                  hello@pleasurewellnesshub.com
                </a>
              </CardContent>
            </Card>

            <Card className="spring-hover hover:shadow-lg transition-all">
              <CardHeader>
                <MessageCircle className="w-8 h-8 text-primary mb-3" />
                <CardTitle>Partnerships</CardTitle>
                <CardDescription>Collaboration and business opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="mailto:partnerships@pleasurewellnesshub.com" className="text-primary hover:underline">
                  partnerships@pleasurewellnesshub.com
                </a>
              </CardContent>
            </Card>

            <Card className="spring-hover hover:shadow-lg transition-all">
              <CardHeader>
                <HelpCircle className="w-8 h-8 text-primary mb-3" />
                <CardTitle>Support</CardTitle>
                <CardDescription>Technical issues or feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="mailto:support@pleasurewellnesshub.com" className="text-primary hover:underline">
                  support@pleasurewellnesshub.com
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Are your calculators confidential?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes! All calculator responses are stored locally in your browser and never sent to our servers. Your privacy is our top priority.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Do you offer professional counseling?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We provide educational content only. For personalized support, we recommend consulting with a certified sex therapist or healthcare provider.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">How do you select affiliate products?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We only recommend products that are body-safe, from reputable brands, and align with our values of inclusivity and ethical sexual wellness.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Can I suggest content topics?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Absolutely! We welcome content suggestions. Please email us at hello@pleasurewellnesshub.com with your ideas.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Ready to start your wellness journey?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
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
      </section>

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
