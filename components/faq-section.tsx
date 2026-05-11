"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "見積もりは本当に無料ですか?",
    answer: "はい、お見積もりは完全無料です。出張費もかかりません。お見積もり後にキャンセルされても費用は一切かかりませんのでご安心ください。"
  },
  {
    question: "どんなものが買取できますか?",
    answer: "骨董品、美術品、ブランド品、貴金属、時計、食器、楽器、カメラ、着物など幅広く買取しています。「これは売れるかな?」と思ったら、まずはご相談ください。"
  },
  {
    question: "古いものでも買い取ってもらえますか?",
    answer: "はい、古いものほど価値がある場合もあります。年代物の食器や家具、昔のおもちゃなど、意外なものに値段がつくこともありますので、捨てる前にぜひご相談ください。"
  },
  {
    question: "遠方でも来てもらえますか?",
    answer: "関東一円はもちろん、ご相談に応じて対応エリアを広げることも可能です。まずはお電話やLINEでご相談ください。"
  },
  {
    question: "買取だけでもお願いできますか?",
    answer: "もちろんです。買取のみのご依頼も大歓迎です。不用品整理と組み合わせると、トータルでお得になることが多いです。"
  },
  {
    question: "急ぎの依頼にも対応できますか?",
    answer: "可能な限り対応いたします。スケジュールの空き状況によりますが、翌日対応も可能な場合がございます。お急ぎの場合はお電話でご相談ください。"
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold mb-4">
            よくあるご質問
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
            お客様からよくいただく質問
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border px-5"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary py-4 text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
