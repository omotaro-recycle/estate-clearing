"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "見積もりは本当に無料ですか？",
    answer: "はい、お見積もりは完全無料です。現地にお伺いして、整理する物の量や内容を確認した上で、詳細なお見積もりをご提示します。お見積もり後にキャンセルされても、費用は一切かかりませんのでご安心ください。"
  },
  {
    question: "どのくらいの期間がかかりますか？",
    answer: "お部屋の広さや物の量によって異なりますが、一般的な1Kのお部屋で半日〜1日、3LDKで1〜2日程度が目安です。お客様のご要望やペースに合わせて、複数日に分けての作業も可能です。"
  },
  {
    question: "遠方でも対応してもらえますか？",
    answer: "はい、関東一円はもちろん、遠方のお客様のご相談も承っております。まずはお電話やオンラインでの事前相談も可能ですので、お気軽にお問い合わせください。"
  },
  {
    question: "貴重品や形見の仕分けもお願いできますか？",
    answer: "もちろんです。作業前に、残したいもの・処分するものをご一緒に確認しながら進めます。判断に迷うものは一旦保留とし、最終的にはお客様にご判断いただきますのでご安心ください。"
  },
  {
    question: "急ぎの依頼にも対応してもらえますか？",
    answer: "可能な限り対応いたします。スケジュールの空き状況によりますが、お急ぎの場合は翌日対応も可能な場合がございます。まずはお電話でご相談ください。"
  },
  {
    question: "一人暮らしの高齢者ですが、相談に乗ってもらえますか？",
    answer: "もちろんです。むしろ、お一人でお悩みの方こそ、ぜひご相談ください。ご家族様のご同席がなくても、丁寧にご説明しながら進めてまいります。何でもお気軽にお話しください。"
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 text-sm">FAQ</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground mb-4">
            よくあるご質問
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            お客様からよくいただくご質問をまとめました。
            その他のご質問もお気軽にお問い合わせください。
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border px-6"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary py-5 text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
