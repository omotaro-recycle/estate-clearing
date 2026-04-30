import { Shield, Clock, Wallet, HeartHandshake, Leaf, Award } from "lucide-react"

const features = [
  {
    icon: HeartHandshake,
    title: "心に寄り添う対応",
    description: "お客様のペースに合わせ、無理のない整理を一緒に進めていきます。"
  },
  {
    icon: Shield,
    title: "安心の保証制度",
    description: "万が一の破損・紛失も保険で対応。大切な品物も安心してお任せください。"
  },
  {
    icon: Clock,
    title: "柔軟なスケジュール",
    description: "土日祝日も対応可能。お客様のご都合に合わせた日程調整をいたします。"
  },
  {
    icon: Wallet,
    title: "明朗会計",
    description: "見積もり後の追加料金は一切なし。安心してご依頼いただけます。"
  },
  {
    icon: Leaf,
    title: "環境に配慮した処分",
    description: "リサイクル・リユースを推進し、環境にやさしい処分を心がけています。"
  },
  {
    icon: Award,
    title: "経験豊富なスタッフ",
    description: "整理収納アドバイザー資格を持つスタッフが丁寧に対応いたします。"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 text-sm">WHY CHOOSE US</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground mb-4">
            選ばれる理由
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            私たちが大切にしているのは、技術だけではなく「心」です。
            お客様の気持ちに寄り添いながら、丁寧にサポートいたします。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
