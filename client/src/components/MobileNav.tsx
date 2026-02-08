/**
 * Mobile Navigation Component with Hamburger Menu
 * Organic Modernism design - smooth slide-out drawer
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, X, Heart } from "lucide-react";
import { Link } from "wouter";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/calculators", label: "Calculators" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">Main navigation links for Pleasure & Wellness Hub</SheetDescription>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/" onClick={() => setOpen(false)}>
              <div className="flex items-center gap-2 cursor-pointer">
                <Heart className="w-6 h-6 text-primary" fill="currentColor" />
                <span className="text-lg font-bold text-foreground">Wellness Hub</span>
              </div>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 flex-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                <div className="text-lg font-medium text-foreground hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/10 cursor-pointer">
                  {link.label}
                </div>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="mt-auto pt-6 border-t border-border">
            <Link href="/calculators" onClick={() => setOpen(false)}>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
