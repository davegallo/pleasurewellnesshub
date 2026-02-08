import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Heart, FileText } from "lucide-react";
import { Link } from "wouter";

export default function Terms() {
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
            <FileText className="w-12 h-12 text-primary" />
            <h1 className="text-6xl font-bold text-foreground">Terms of Service</h1>
          </div>
          <p className="text-muted-foreground text-center mb-12">Last updated: February 8, 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing Pleasure & Wellness Hub, you agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of these terms, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Educational Purpose</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our content is provided for educational and informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Age Requirement</h2>
              <p className="text-muted-foreground leading-relaxed">
                You must be at least 18 years old to use this website. By using our services, you represent and warrant that you are of legal age to form a binding contract.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Use our content for commercial purposes without permission</li>
                <li>Reproduce, distribute, or modify our content without authorization</li>
                <li>Engage in any activity that could harm or interfere with our services</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Affiliate Relationships</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pleasure & Wellness Hub participates in affiliate programs and may earn commissions from purchases made through our recommended products. We only recommend products we believe align with our values of body-safe, ethical, and inclusive sexual wellness.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, Pleasure & Wellness Hub shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of significant changes by posting a notice on our website. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us at legal@pleasurewellnesshub.com
              </p>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 mt-12">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Disclaimer:</strong> The information provided on this website is not intended to replace professional medical, psychological, or therapeutic advice. Please consult with qualified professionals for personalized guidance.
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
