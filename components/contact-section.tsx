"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
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
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 text-sm">CONTACT</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground mb-4">
            無料相談・お問い合わせ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            どんな小さなことでもお気軽にご相談ください。
            専門スタッフが丁寧にお答えいたします。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-medium text-foreground mb-6">お電話でのご相談</h3>
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">フリーダイヤル</p>
                  <a href="tel:0120-000-000" className="text-2xl font-medium text-foreground hover:text-primary transition-colors">
                    0120-000-000
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>受付時間：9:00〜18:00（年中無休）</span>
              </div>
            </div>

            <h3 className="text-xl font-medium text-foreground mb-6">会社情報</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">所在地</p>
                  <p className="text-muted-foreground text-sm">〒100-0001 東京都千代田区千代田1-1-1</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">メール</p>
                  <a href="mailto:info@kokoro-seiri.jp" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    info@kokoro-seiri.jp
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">営業時間</p>
                  <p className="text-muted-foreground text-sm">9:00〜18:00（年中無休）</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-primary text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-medium text-foreground mb-4">
                  お問い合わせありがとうございます
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  内容を確認の上、担当者より
                  <br />
                  2営業日以内にご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">ご住所（整理対象の場所）</Label>
                  <Input
                    id="address"
                    placeholder="東京都〇〇区..."
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">ご希望のサービス</Label>
                  <select
                    id="service"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">選択してください</option>
                    <option value="seizenseiri">生前整理</option>
                    <option value="ihinseiri">遺品整理</option>
                    <option value="fuyohin">不用品整理</option>
                    <option value="akiya">空き家整理</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">ご相談内容 <span className="text-destructive">*</span></Label>
                  <Textarea
                    id="message"
                    placeholder="お困りのことやご質問など、お気軽にお書きください"
                    rows={4}
                    required
                    className="rounded-lg resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-full text-base py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "送信中..." : "無料相談を申し込む"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  ※ ご入力いただいた情報は、お問い合わせへのご対応にのみ使用いたします。
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
