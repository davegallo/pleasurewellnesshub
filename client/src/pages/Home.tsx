/* Design: Organic Modernism with Sensual Fluidity
 * Flowing layouts, warm peach/navy/teal palette, Playfair Display + DM Sans
 * Curved section dividers, asymmetric content blocks, gentle spring animations
 */

import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/FadeIn";
import { Heart, Calculator, BookOpen, Sparkles, ArrowRight, Users, Shield, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary" fill="currentColor" />
              <span className="text-2xl font-bold text-foreground">Pleasure & Wellness Hub</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-8">
                <Link href="/calculators" className="text-foreground/80 hover:text-primary transition-colors">Calculators</Link>
                <Link href="/resources" className="text-foreground/80 hover:text-primary transition-colors">Resources</Link>
                <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
                <Link href="/calculators">
                  <Button className="spring-hover bg-accent text-accent-foreground hover:bg-accent/90">Get Started</Button>
                </Link>
              </div>
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-24 overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/saYgPY6PfoYTv1YR0Yxm1f/sandbox/oO3178Ea80MTH5pDI8MDDu-img-1_1770534503000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc2FZZ1BZNlBmb1lUdjFZUjBZeG0xZi9zYW5kYm94L29PMzE3OEVhODBNVEg1cERJOE1ERHUtaW1nLTFfMTc3MDUzNDUwMzAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Yl8tGgdAfXAKfM2WzsBpIetRf6wO-QsTVWQC-eaXs7-56SQ2lEgdW9LeznbFtu2tguasKKjqxR8aOCfyPOWObEeEj1nU2ZfL9yFEJ9nqKON54Om2sIEqwCJKoCjaYiXrIx5ndLZzmAvAAosw48-hMGH4AQfUnlEY5LnyUDUEAGdWdwUB6k-8sRSmpXTaABoGSWMFKHWYPuIyiguEZ8MIdkU88SstCta5SR5fELUx5dqbwqjU19-pJSJdGuGXYfPqxEuaA57X-DdWy2tN33wizxYtq5E9I-CLP8SCblDODfOe03oLNsesL1gXyIdavYzQm0franE2d1tBD0-dGG1BLw__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <FadeIn delay={0.2}>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Your Journey to <span className="text-accent" style={{textShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>Sexual Wellness</span> Starts Here
              </h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-xl text-foreground mb-8 leading-relaxed font-medium">
                Evidence-based education, interactive tools, and compassionate guidance for adults seeking to enhance intimacy, improve communication, and achieve greater sexual satisfaction.
              </p>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="flex flex-wrap gap-4">
              <Link href="/calculators">
                <Button size="lg" className="spring-hover bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
                  Explore Calculators <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="spring-hover text-lg px-8 py-6 border-2">
                  Browse Resources
                </Button>
              </Link>
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Curved bottom divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0C240 80 480 120 720 120C960 120 1200 80 1440 0V120H0V0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-background">
        <div className="container">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">Evidence-Based</h3>
                <p className="text-sm text-muted-foreground">Expert-reviewed content</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">LGBTQ+ Inclusive</h3>
                <p className="text-sm text-muted-foreground">For all genders & orientations</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground">Proven Results</h3>
                <p className="text-sm text-muted-foreground">Thousands helped</p>
              </div>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Interactive Calculators Section */}
      <section id="calculators" className="py-24 bg-muted/30">
        <div className="container">
          <FadeIn>
            <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Interactive Tools</span>
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-4">Discover Your Wellness Path</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Personalized assessments and calculators to guide your journey toward greater intimacy and satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {calculators.map((calc, index) => (
              <Card key={index} className="spring-hover group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {calc.icon}
                  </div>
                  <CardTitle className="text-xl">{calc.title}</CardTitle>
                  <CardDescription className="text-sm">{calc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={calc.link}>
                    <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/5">
                      Start Assessment
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/calculators">
              <Button size="lg" className="spring-hover bg-accent text-accent-foreground hover:bg-accent/90">
                View All 8 Calculators <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section 
        id="resources" 
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/saYgPY6PfoYTv1YR0Yxm1f/sandbox/oO3178Ea80MTH5pDI8MDDu-img-2_1770534499000_na1fn_d2VsbG5lc3MtYWJzdHJhY3QtMQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc2FZZ1BZNlBmb1lUdjFZUjBZeG0xZi9zYW5kYm94L29PMzE3OEVhODBNVEg1cERJOE1ERHUtaW1nLTJfMTc3MDUzNDQ5OTAwMF9uYTFmbl9kMlZzYkc1bGMzTXRZV0p6ZEhKaFkzUXRNUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=HhBsGwgrsvJVS4qR8o962hxWvhvA~JNEIUP7fl1vQoK7bzWQAzvfaZcucyMZoTEA2pDD5hlZ4DTpuic2R973NeA54oGOojbauyfNQzfjlNLv4HmUaLH6LjKjr89W9A71Mnd6pU03dUyyQKuk~PoqTUwI841~h7r2bWEtwVqzaHKpE2-SSR2-pKAZg1Ot9uC74UVzLENlvT3-NZYy-QJtRGCBvjt-TcoDvzaVdQUQTenUKxwh~PlOmyGhVT8SPPIlDV139Gt5qKnsQE03n~DpIHSRjsoT1jmT2nqzmzGGzUYEmQo5j3Fhty-dgTLi88eef8jvxzjyGHvxIvGxOxqpwg__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/85"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full mb-4">
                <BookOpen className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Learn & Grow</span>
              </div>
              <h2 className="text-5xl font-bold text-foreground mb-6">Comprehensive Sexual Education</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Access evidence-based articles, step-by-step guides, and expert insights covering everything from anatomy and pleasure techniques to communication frameworks and relationship intimacy.
              </p>
              <ul className="space-y-4 mb-8">
                {resources.map((resource, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{resource.title}</h4>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/resources">
                <Button size="lg" className="spring-hover bg-accent text-accent-foreground hover:bg-accent/90">
                  Explore Resources <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://private-us-east-1.manuscdn.com/sessionFile/saYgPY6PfoYTv1YR0Yxm1f/sandbox/oO3178Ea80MTH5pDI8MDDu-img-4_1770534503000_na1fn_aW50aW1hY3ktaWxsdXN0cmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc2FZZ1BZNlBmb1lUdjFZUjBZeG0xZi9zYW5kYm94L29PMzE3OEVhODBNVEg1cERJOE1ERHUtaW1nLTRfMTc3MDUzNDUwMzAwMF9uYTFmbl9hVzUwYVcxaFkza3RhV3hzZFhOMGNtRjBhVzl1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ensAXRt9Ai0ZEwC~r4TDmHkRpbkniyjXuPd4SezGhiuGc6rkk5pnUp5ctdQb3Da4kedD9Cf4R0MQZ5j3hihQq8cUxXy6Sb63EWy4KcEzvxinkmg6pbcF-~W8THZqCqCGWpb6sTyCj5Ho9EqELQAFccw1FT-fzQxHdRwl91Lh2we9tXkqCE5EV2JMP1Y5mOnvR8-jBM~W9NEYU6kM9iY4-pSsA~3amNzpVfQOASIiLcCpPp~-mBRV5P0jOgu0-HsdkIW0hJ~muqBQJbbKGl--zfsPT2bJDp9mYMios14CLolmtdhX7gdV2v4NsZwkxmuZ2se24z4Q3pohZP84Bs2OrQ__"
                  alt="Intimacy and connection illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Intimate Life?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Join thousands of adults who have discovered greater satisfaction, deeper connection, and enhanced pleasure through our evidence-based resources and interactive tools.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/calculators">
                <Button size="lg" className="spring-hover bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7">
                  Get Started Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="spring-hover text-lg px-10 py-7 border-2">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-accent text-accent-foreground">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6" fill="currentColor" />
                <span className="text-lg font-bold">Pleasure & Wellness Hub</span>
              </div>
              <p className="text-sm text-accent-foreground/80">
                Evidence-based sexual wellness education for adults seeking greater intimacy and satisfaction.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Calculators</h4>
              <ul className="space-y-2 text-sm text-accent-foreground/80">
                <li><Link href="/calculator/compatibility" className="hover:text-accent-foreground transition-colors">Sexual Compatibility</Link></li>
                <li><Link href="/calculators" className="hover:text-accent-foreground transition-colors">Orgasm Potential</Link></li>
                <li><Link href="/calculators" className="hover:text-accent-foreground transition-colors">Communication Score</Link></li>
                <li><Link href="/calculators" className="hover:text-accent-foreground transition-colors">View All</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-accent-foreground/80">
                <li><Link href="/resources" className="hover:text-accent-foreground transition-colors">Articles</Link></li>
                <li><Link href="/resources" className="hover:text-accent-foreground transition-colors">Guides</Link></li>
                <li><Link href="/resources" className="hover:text-accent-foreground transition-colors">Expert Interviews</Link></li>
                <li><Link href="/resources" className="hover:text-accent-foreground transition-colors">Book Recommendations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm text-accent-foreground/80">
                <li><Link href="/about" className="hover:text-accent-foreground transition-colors">Our Mission</Link></li>
                <li><Link href="/privacy" className="hover:text-accent-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-accent-foreground transition-colors">Terms of Service</Link></li>
                <li><Link href="/contact" className="hover:text-accent-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-accent-foreground/20 pt-8 text-center text-sm text-accent-foreground/60">
            <p>&copy; 2026 Pleasure & Wellness Hub. All rights reserved. For educational purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const calculators = [
  {
    title: "Sexual Compatibility",
    description: "Evaluate compatibility with current or potential partners",
    icon: <Heart className="w-6 h-6 text-primary" />,
    link: "/calculator/compatibility"
  },
  {
    title: "Orgasm Potential",
    description: "Personalized guide based on your preferences",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
    link: "/calculators"
  },
  {
    title: "Communication Score",
    description: "Measure effectiveness in intimate relationships",
    icon: <Users className="w-6 h-6 text-primary" />,
    link: "/calculators"
  },
  {
    title: "Wellness Health Check",
    description: "Comprehensive sexual health assessment",
    icon: <Shield className="w-6 h-6 text-primary" />,
    link: "/calculators"
  },
];

const resources = [
  {
    title: "Anatomy & Pleasure Techniques",
    description: "Comprehensive guides covering the science of pleasure"
  },
  {
    title: "Communication Frameworks",
    description: "The three Ts: timing, turf, and tone for intimate conversations"
  },
  {
    title: "LGBTQ+ Inclusive Content",
    description: "Resources for all genders and sexual orientations"
  },
  {
    title: "Consent & Boundaries",
    description: "Building healthy, respectful intimate relationships"
  },
];
