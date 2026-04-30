import { Phone, ClipboardList, Calendar, Sparkles } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "お問い合わせ",
    description: "まずはお電話またはフォームからお気軽にご相談ください。お悩みやご要望をお聞かせください。"
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "無料お見積もり",
    description: "ご自宅にお伺いし、整理する量や内容を確認。その場で詳細なお見積もりをご提示します。"
  },
  {
    number: "03",
    icon: Calendar,
    title: "作業日決定",
    description: "お客様のご都合に合わせて作業日を決定。当日のスケジュールも丁寧にご説明します。"
  },
  {
    number: "04",
    icon: Sparkles,
    title: "作業・お引き渡し",
    description: "丁寧に仕分け・整理を行い、清掃まで完了。ご確認いただいてからお引き渡しとなります。"
  }
]

export function FlowSection() {
  return (
    <section id="flow" className="py-20 sm:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 text-sm">HOW IT WORKS</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground mb-4">
            ご利用の流れ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            初めてのご依頼でも安心。
            お問い合わせから作業完了まで、丁寧にサポートいたします。
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="text-primary/30 text-4xl font-bold absolute -top-2 left-1/2 -translate-x-1/2">
                  {step.number}
                </span>
                <h3 className="text-lg font-medium text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
