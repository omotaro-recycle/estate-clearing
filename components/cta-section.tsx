import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-6 text-balance">
          まずはお気軽に
          <br className="sm:hidden" />
          ご相談ください
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed mb-10">
          「何から始めればいいかわからない」
          「費用がどのくらいかかるか不安」
          そんなお悩みも、まずはご相談から。
          専門スタッフが丁寧にお答えいたします。
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full text-base px-8 bg-background text-foreground hover:bg-background/90"
          >
            <Link href="#contact">
              <MessageCircle className="w-5 h-5 mr-2" />
              無料相談フォーム
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <a href="tel:0120-000-000">
              <Phone className="w-5 h-5 mr-2" />
              0120-000-000
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
