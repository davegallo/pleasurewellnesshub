import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Heart, Shield } from "lucide-react";
import { Link } from "wouter";

export default function Privacy() {
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-12 h-12 text-primary" />
            <h1 className="text-6xl font-bold text-foreground">Privacy Policy</h1>
          </div>
          <p className="text-muted-foreground text-center mb-12">Last updated: February 8, 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Your Privacy Matters</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Pleasure & Wellness Hub, we understand that privacy is especially important when it comes to sexual wellness. We are committed to protecting your personal information and being transparent about our data practices.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect minimal information necessary to provide our services:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Calculator Responses:</strong> Stored locally in your browser, never sent to our servers</li>
                <li><strong>Analytics:</strong> Anonymous usage data to improve our content (no personally identifiable information)</li>
                <li><strong>Cookies:</strong> Essential cookies for site functionality only</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use collected information solely to improve our educational content and user experience. We never sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Affiliate Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                We participate in affiliate programs and may earn commissions from purchases made through our recommended products. This does not affect your privacy or the price you pay. We only recommend products we believe in.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access any personal data we hold about you</li>
                <li>Request deletion of your data</li>
                <li>Opt out of analytics tracking</li>
                <li>Browse our site anonymously</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about our privacy practices, please contact us at privacy@pleasurewellnesshub.com
              </p>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 mt-12">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Note:</strong> This privacy policy may be updated periodically. We will notify users of significant changes by posting a notice on our homepage.
              </p>
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
