import Link from "next/link"
import { Star, ExternalLink, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CtaSection } from "@/components/cta-section"
import testimonialsData from "@/data/testimonials.json"

export const metadata: Metadata = {
  title: "お客様の声一覧 | 買取+整理",
  description:
    "実際にご利用いただいたお客様からいただいたレビュー一覧です。くらしのマーケット掲載の口コミも掲載しています。",
}

const AVATAR_COLORS = [
  "bg-primary/15 text-primary",
  "bg-accent/20 text-accent-foreground",
  "bg-emerald-100 text-emerald-700",
  "bg-sky-100 text-sky-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
]

function getInitial(name: string): string {
  const trimmed = name.replace(/さん$/, "")
  return trimmed.charAt(0) || "?"
}

export default function ReviewsPage() {
  const { source, reviews } = testimonialsData

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary/5 pt-24 pb-10 sm:pt-28 sm:pb-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold mb-4">
              お客様の声
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              ご利用いただいた方からの声
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base mb-6">
              実際にご利用いただいたお客様からのレビューを掲載しています。
            </p>
            <div className="inline-flex items-center gap-3 bg-background border border-border rounded-full px-5 py-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-lg font-bold text-foreground">
                {source.overallRating}
              </span>
              <span className="text-sm text-muted-foreground">
                / {source.totalReviews}件のレビュー
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              出典: {source.name}
            </p>
          </div>
        </section>

        {/* Reviews List */}
        <section className="py-12 sm:py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-background rounded-2xl p-6 border border-border flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                        AVATAR_COLORS[index % AVATAR_COLORS.length]
                      }`}
                    >
                      {getInitial(review.name)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {review.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {review.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm flex-1 whitespace-pre-wrap">
                    {review.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10 space-y-4">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
              >
                {source.name}で全レビューを見る
                <ExternalLink className="w-4 h-4" />
              </a>
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  トップページに戻る
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
