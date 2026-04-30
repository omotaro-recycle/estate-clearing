import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "田中様",
    age: "70代",
    location: "東京都",
    image: "/images/testimonial-1.jpg",
    content: "一人では何から手をつけていいかわからず困っていましたが、スタッフの方が親身に相談に乗ってくださり、少しずつ整理を進めることができました。思い出の品を一緒に見ながら、丁寧に対応してくださったことに感謝しています。"
  },
  {
    name: "山本様",
    age: "50代",
    location: "神奈川県",
    image: "/images/testimonial-2.jpg",
    content: "母の遺品整理をお願いしました。形見分けの相談にも乗っていただき、大切なものを見落とすことなく整理できました。母も喜んでいると思います。"
  },
  {
    name: "佐藤様",
    age: "40代",
    location: "埼玉県",
    image: "/images/testimonial-3.jpg",
    content: "実家の生前整理で相談しました。父は最初乗り気ではありませんでしたが、スタッフの方の丁寧な説明と、父のペースに合わせた進め方で、最終的には「頼んでよかった」と言っていました。"
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 text-sm">TESTIMONIALS</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground mb-4">
            お客様の声
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            実際にご利用いただいたお客様からの声をご紹介します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 sm:p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
