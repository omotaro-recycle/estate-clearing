import { Sparkles, Wallet, HandHeart } from "lucide-react"

const merits = [
  {
    number: "1",
    icon: Sparkles,
    title: "思わぬものに価値がつく!",
    description: "捨てる前に、まずは査定してみませんか？意外なお宝が眠っているかも。"
  },
  {
    number: "2",
    icon: Wallet,
    title: "処分費を大幅カット!",
    description: "買取できるものは買い取り、処分する量を減らします。"
  },
  {
    number: "3",
    icon: HandHeart,
    title: "手間なくまとめて対応!",
    description: "買取から不用品整理まで、すべてお任せください。"
  }
]

export function MeritsSection() {
  return (
    <section className="py-16 sm:py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
            「<span className="text-primary">買取</span>→<span className="text-primary">整理</span>」で、
            トータル費用を<span className="text-accent">抑えられます!</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {merits.map((merit) => (
            <div
              key={merit.number}
              className="relative bg-background rounded-2xl p-6 sm:p-8 border border-border text-center"
            >
              <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                メリット {merit.number}
              </div>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-2">
                <merit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{merit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {merit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Price Example */}
        <div className="mt-12 bg-accent/10 rounded-2xl p-6 sm:p-8 border-2 border-accent">
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold mb-4">
                実例
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-muted-foreground">整理費用</span>
                  <span className="text-foreground font-medium">15万円</span>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span className="text-muted-foreground">買取金額</span>
                  <span className="text-primary font-bold">-5万円</span>
                </div>
                <div className="border-t-2 border-border pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-bold text-xl">実質</span>
                    <span className="text-accent font-bold text-3xl">10万円に!</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-3">※物量や内容により異なります</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-3">こんなものが売れています!</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "骨董品・美術品",
                  "食器・ギフト品",
                  "ブランド品",
                  "楽器・カメラ",
                  "貴金属・時計",
                  "着物・和装小物",
                  "切手・古銭",
                  "古本・DVD"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
