"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Clock, MessageCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold mb-4">
            無料査定・お問い合わせ
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3">
            まずはお気軽にご相談ください!
          </h2>
          <p className="text-muted-foreground">
            お見積もりは無料です。無理な営業は一切いたしません。
          </p>
        </div>

        <div>
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-primary rounded-2xl p-6 sm:p-8 text-primary-foreground">
              <h3 className="text-lg font-bold mb-4">お電話でのご相談</h3>
              <a href="tel:080-3125-7555" className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-3xl font-bold">080-3125-7555</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Clock className="w-4 h-4" />
                <span>年中無休　9:00〜24:00</span>
              </div>
            </div>

            <div className="bg-[#06C755] rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-lg font-bold mb-4">LINEでのご相談</h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-lg">QRコードを読み取るだけ!</p>
                  <p className="text-sm text-white/80">スマホで簡単にご相談</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-2 w-32 h-32 flex items-center justify-center">
                <Image
                  src="/images/line-qr.png"
                  alt="LINE友だち追加QRコード"
                  width={112}
                  height={112}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Trust Points */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 sm:gap-6">
            {[
              "しつこい営業は一切しません",
              "お見積もり後のキャンセルOK",
              "秘密厳守で対応いたします"
            ].map((point) => (
              <div key={point} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Contact Form - 一旦非表示
          <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
            <h3 className="text-lg font-bold text-foreground mb-6">メールでのお問い合わせ</h3>
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  お問い合わせありがとうございます
                </h4>
                <p className="text-muted-foreground text-sm">
                  担当者より2営業日以内にご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">お名前 <span className="text-destructive">*</span></Label>
                  <Input
                    id="name"
                    placeholder="山田 太郎"
                    required
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">電話番号 <span className="text-destructive">*</span></Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="090-0000-0000"
                    required
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">ご住所（市区町村まで）</Label>
                  <Input
                    id="address"
                    placeholder="さいたま市岩槻区"
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">ご相談内容</Label>
                  <Textarea
                    id="message"
                    placeholder="お困りのことやご質問など"
                    rows={3}
                    className="rounded-lg resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full text-base py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "送信中..." : "無料査定を申し込む"}
                </Button>
              </form>
            )}
          </div>
          */}
        </div>
      </div>
    </section>
  )
}
