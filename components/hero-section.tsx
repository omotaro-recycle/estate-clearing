import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-family.jpg"
          alt="家族の温かな写真"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-primary font-medium mb-4 text-sm sm:text-base">
            生前整理・不用品整理の専門サービス
          </p>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-foreground mb-6 text-balance">
            人生の思い出を、
            <br />
            <span className="text-primary">一緒に整理</span>します
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
            大切な品々の整理は、簡単なことではありません。
            私たちは「片付け業者」ではなく、
            あなたの人生に寄り添う「整理のパートナー」として、
            心を込めてお手伝いいたします。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="rounded-full text-base px-8">
              <Link href="#contact">
                <MessageCircle className="w-5 h-5 mr-2" />
                無料相談を予約する
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full text-base px-8 bg-card/80">
              <a href="tel:0120-000-000">
                <Phone className="w-5 h-5 mr-2" />
                0120-000-000
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-xs font-medium">✓</span>
              </div>
              <span>相談無料</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-xs font-medium">✓</span>
              </div>
              <span>見積もり無料</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-xs font-medium">✓</span>
              </div>
              <span>追加料金なし</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
