import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-12 sm:py-16 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary-foreground/90 mb-2 text-sm sm:text-base">
          まずは<span className="font-bold">無料査定</span>から!お気軽にご相談ください
        </p>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-foreground mb-8">
          お電話でのご相談はこちら
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button asChild size="lg" className="rounded-full text-lg px-10 py-7 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
            <a href="tel:0120-000-000">
              <Phone className="w-6 h-6 mr-2" />
              0120-000-000
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full text-lg px-10 py-7 bg-card hover:bg-card/90 text-foreground border-0">
            <a href="#contact">
              <MessageCircle className="w-6 h-6 mr-2" />
              LINEで相談
            </a>
          </Button>
        </div>

        <p className="text-primary-foreground/80 text-sm">
          受付時間 9:00〜19:00（年中無休）
        </p>
      </div>
    </section>
  )
}
