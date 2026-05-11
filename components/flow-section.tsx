import { Phone, Search, Banknote, Sparkles } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: Phone,
    title: "無料査定",
    description: "お電話・LINE・メールでお気軽にご相談ください。"
  },
  {
    number: "2",
    icon: Search,
    title: "査定・お見積り",
    description: "ご自宅にお伺いし、丁寧に査定・お見積りします。"
  },
  {
    number: "3",
    icon: Banknote,
    title: "買取成立",
    description: "ご納得いただければ、その場で現金にてお支払いします。"
  },
  {
    number: "4",
    icon: Sparkles,
    title: "不用品整理",
    description: "残りの整理・片付けを丁寧に行います。"
  }
]

const guarantees = [
  "見積もり無料",
  "出張費無料",
  "追加料金なし",
  "無理な営業なし"
]

export function FlowSection() {
  return (
    <section id="flow" className="py-16 sm:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold mb-4">
            ご利用の流れ
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
            カンタン4ステップ
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-card rounded-2xl border border-border p-6 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-border text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="bg-primary/5 rounded-2xl p-6 sm:p-8">
          <h3 className="text-center font-bold text-foreground mb-6">安心してご利用いただけます!</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {guarantees.map((guarantee) => (
              <div
                key={guarantee}
                className="flex items-center gap-2 bg-card rounded-full px-5 py-2.5 border border-border"
              >
                <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span className="text-foreground font-medium text-sm">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
