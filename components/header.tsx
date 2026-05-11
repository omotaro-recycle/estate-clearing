"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "#flow", label: "ご利用の流れ" },
    { href: "#testimonials", label: "お客様の声" },
    { href: "#faq", label: "よくある質問" },
    { href: "#contact", label: "お問い合わせ" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-lg font-bold">買</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">買取+整理</span>
              <span className="text-xs text-muted-foreground">でお得に片付け</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a href="tel:0120-000-000" className="flex items-center gap-2 text-foreground font-bold">
              <Phone className="w-4 h-4 text-primary" />
              <span>0120-000-000</span>
            </a>
            <Button asChild className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#contact">無料査定</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            aria-label="メニューを開く"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <a href="tel:0120-000-000" className="flex items-center gap-2 text-foreground font-bold">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>0120-000-000</span>
                </a>
                <Button asChild className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="#contact">無料査定を申し込む</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
