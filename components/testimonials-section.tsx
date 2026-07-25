import Link from "next/link"
import { Star, ExternalLink, ArrowRight } from "lucide-react"
import testimonialsData from "@/data/testimonials.json"

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

const CONTENT_LIMIT = 64

export function TestimonialsSection() {
  const { source, reviews } = testimonialsData
  const displayedReviews = reviews.slice(0, 6)

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold mb-4">
            お客様の声
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4">
            ご利用いただいた方からの声
          </h2>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review, index) => (
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
                  <p className="font-medium text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                {review.content.length > CONTENT_LIMIT ? (
                  <>
                    {review.content.slice(0, CONTENT_LIMIT)}…
                    <Link
                      href="/reviews"
                      className="text-primary font-medium hover:underline ml-1 whitespace-nowrap"
                    >
                      もっと見る
                    </Link>
                  </>
                ) : (
                  review.content
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 space-y-3">
          <div>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-bold hover:bg-primary/90 transition-colors"
            >
              お客様の声をもっと見る
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {source.name}で全レビューを見る
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  )
}
