/* Design: Organic Modernism - Educational resources hub
 * Articles, guides, and curated product recommendations
 */

import { Button } from "@/components/ui/button";
import MobileNav from "@/components/MobileNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, BookOpen, Video, Headphones, ShoppingBag, ExternalLink, Star } from "lucide-react";
import { Link } from "wouter";

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary" fill="currentColor" />
              <span className="text-2xl font-bold text-foreground">Pleasure & Wellness Hub</span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-foreground/80 hover:text-primary transition-colors">Home</Link>
                <Link href="/calculators" className="text-foreground/80 hover:text-primary transition-colors">Calculators</Link>
                <Link href="/resources" className="text-primary font-medium">Resources</Link>
                <Button className="spring-hover bg-accent text-accent-foreground hover:bg-accent/90">Get Started</Button>
              </div>
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary/20 via-primary/10 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/30 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Learn & Explore</span>
            </div>
            <h1 className="text-6xl font-bold text-foreground mb-6">Educational Resources</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive guides, expert articles, and curated recommendations to support your sexual wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16">
        <div className="container">
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
            </TabsList>

            {/* Articles */}
            <TabsContent value="articles" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                  <Link key={index} href={article.link || "/resources"}>
                    <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                      <CardHeader>
                        <div className="text-sm text-primary font-medium mb-2">{article.category}</div>
                        <CardTitle className="text-xl">{article.title}</CardTitle>
                        <CardDescription>{article.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{article.readTime}</span>
                          <Button variant="ghost" size="sm">
                            Read More <ExternalLink className="w-3 h-3 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            {/* Guides */}
            <TabsContent value="guides" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guides.map((guide, index) => (
                  <Link key={index} href={guide.link || "/resources"}>
                    <Card className="spring-hover hover:shadow-lg transition-all cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">
                            {guide.level}
                          </div>
                          <div className="text-sm text-muted-foreground">{guide.steps} steps</div>
                        </div>
                        <CardTitle className="text-2xl">{guide.title}</CardTitle>
                        <CardDescription className="text-base">{guide.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                          Start Guide
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            {/* Media */}
            <TabsContent value="media" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {media.map((item, index) => (
                  <Card key={index} className="spring-hover hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        {item.type === "video" ? (
                          <Video className="w-4 h-4 text-primary" />
                        ) : (
                          <Headphones className="w-4 h-4 text-primary" />
                        )}
                        <span className="text-sm font-medium text-primary capitalize">{item.type}</span>
                        <span className="text-sm text-muted-foreground">• {item.duration}</span>
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        Watch Now <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Products (Affiliate) */}
            <TabsContent value="products" className="space-y-8">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-8">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Affiliate Disclosure:</strong> We may earn a commission from purchases made through our recommended products. We only recommend items we believe in and that align with our values of body-safe, ethical, and inclusive sexual wellness.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <Card key={index} className="spring-hover hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl mb-4 flex items-center justify-center">
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
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription className="text-sm">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-primary">${product.price}</span>
                        <span className="text-sm text-muted-foreground">{product.category}</span>
                      </div>
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        View Product <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button size="lg" variant="outline" className="spring-hover">
                  Browse All Products
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
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

const articles = [
  {
    category: "Anatomy",
    title: "Understanding the Clitoris: Anatomy and Pleasure",
    excerpt: "Comprehensive guide to clitoral anatomy and stimulation techniques backed by research.",
    readTime: "8 min read",
    link: "/article/clitoris-anatomy"
  },
  {
    category: "Communication",
    title: "The Three Ts: Timing, Turf, and Tone",
    excerpt: "Master the framework for effective intimate conversations with your partner.",
    readTime: "6 min read",
    link: "/article/communication-framework"
  },
  {
    category: "Techniques",
    title: "Oral Sex Guide for All Bodies",
    excerpt: "Inclusive, detailed techniques for giving and receiving oral pleasure.",
    readTime: "12 min read",
    link: "/article/oral-sex-guide"
  },
  {
    category: "Wellness",
    title: "The Orgasm Gap: What It Is and How to Close It",
    excerpt: "Exploring gender disparities in orgasm frequency and evidence-based solutions.",
    readTime: "10 min read",
    link: "/article/orgasm-gap"
  },
  {
    category: "Relationships",
    title: "Navigating Desire Discrepancy in Long-Term Relationships",
    excerpt: "Practical strategies for couples with mismatched libidos.",
    readTime: "11 min read",
    link: "/article/desire-discrepancy"
  },
  {
    category: "Education",
    title: "Consent 101: Building Healthy, Respectful Intimacy",
    excerpt: "A comprehensive guide to understanding and practicing enthusiastic consent.",
    readTime: "9 min read",
    link: "/article/consent-basics"
  },
];

const guides = [
  {
    title: "Beginner's Guide to Sexual Wellness",
    description: "Start your journey with foundational knowledge about pleasure, anatomy, and communication.",
    level: "Beginner",
    steps: "6",
    link: "/guide/beginners"
  },
  {
    title: "Advanced Intimacy Techniques for Couples",
    description: "Deepen your connection with advanced communication and pleasure techniques.",
    level: "Advanced",
    steps: "8",
    link: "/guide/advanced-intimacy"
  },
  {
    title: "Solo Pleasure Exploration",
    description: "A comprehensive guide to self-discovery and masturbation for all genders.",
    level: "All Levels",
    steps: "5",
    link: "/guide/solo-pleasure"
  },
  {
    title: "Consent and Boundaries in Practice",
    description: "Building healthy, respectful intimate relationships through clear communication.",
    level: "Essential",
    steps: "4",
    link: "/guide/consent"
  },
];

const media = [
  {
    type: "video",
    title: "Anatomy 101: Understanding Your Body",
    description: "Visual guide to sexual anatomy for all genders with expert narration.",
    duration: "15 min"
  },
  {
    type: "podcast",
    title: "Sex With Emily: Communication Special",
    description: "Expert interview on improving intimate communication in relationships.",
    duration: "45 min"
  },
  {
    type: "video",
    title: "Pleasure Techniques Demonstration",
    description: "Educational demonstration of various pleasure techniques (tasteful, educational).",
    duration: "20 min"
  },
  {
    type: "podcast",
    title: "The Science of Orgasm",
    description: "Deep dive into the neuroscience and physiology of sexual pleasure.",
    duration: "38 min"
  },
];

const products = [
  {
    name: "Premium Silicone Vibrator",
    description: "Body-safe, rechargeable, and whisper-quiet. Perfect for beginners and experienced users.",
    price: 79,
    rating: 5,
    reviews: 1243,
    category: "Toys"
  },
  {
    name: "Organic Intimate Lubricant",
    description: "Water-based, pH-balanced, and free from harmful chemicals. Safe for all activities.",
    price: 24,
    rating: 5,
    reviews: 892,
    category: "Lubricants"
  },
  {
    name: "Come As You Are (Book)",
    description: "By Emily Nagoski - The science of female sexuality and pleasure.",
    price: 18,
    rating: 5,
    reviews: 3421,
    category: "Books"
  },
  {
    name: "Couples Massage Oil Set",
    description: "Sensual aromatherapy oils for intimate massage and connection.",
    price: 32,
    rating: 4,
    reviews: 567,
    category: "Wellness"
  },
  {
    name: "The Ethical Slut (Book)",
    description: "Guide to polyamory and open relationships with compassion and honesty.",
    price: 16,
    rating: 5,
    reviews: 2134,
    category: "Books"
  },
  {
    name: "Kegel Exercise Kit",
    description: "Strengthen pelvic floor muscles for better orgasms and sexual health.",
    price: 45,
    rating: 4,
    reviews: 723,
    category: "Wellness"
  },
];
