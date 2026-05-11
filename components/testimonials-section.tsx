import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "田中様",
    age: "60代",
    location: "東京都",
    image: "/images/testimonial-1.jpg",
    title: "思わぬお宝が!",
    content: "母の遺品整理をお願いしました。捨てようと思っていた古い食器に値段がついてびっくり!整理費用の足しになりました。"
  },
  {
    name: "山本様",
    age: "50代",
    location: "神奈川県",
    image: "/images/testimonial-2.jpg",
    title: "対応が丁寧でした",
    content: "一つひとつ丁寧に説明してくれて、納得して依頼できました。無理な営業もなく、安心してお任せできました。"
  },
  {
    name: "佐藤様",
    age: "40代",
    location: "埼玉県",
    image: "/images/testimonial-3.jpg",
    title: "まとめてお願いできて楽!",
    content: "実家の片付けで困っていましたが、買取から片付けまで全部お任せできて本当に助かりました。"
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold mb-4">
            お客様の声
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
            ご利用いただいた方からの声
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.age} / {testimonial.location}
                  </p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <h3 className="font-bold text-foreground mb-2">{testimonial.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
