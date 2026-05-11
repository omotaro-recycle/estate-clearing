import Link from "next/link"
import { Phone, Clock, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-lg font-bold">買</span>
              </div>
              <span className="text-xl font-bold text-background">買取+整理</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              買取してから整理すれば費用がお得に!
              地元で20年、信頼と実績のサービスです。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-background mb-4">サービス内容</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>不用品買取</li>
              <li>不用品整理・片付け</li>
              <li>遺品整理</li>
              <li>空き家整理</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-background mb-4">お問い合わせ</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:0120-000-000" className="flex items-center gap-2 text-background hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-lg font-bold">0120-000-000</span>
              </a>
              <div className="flex items-center gap-2 text-background/70">
                <Clock className="w-4 h-4" />
                <span>9:00〜19:00（年中無休）</span>
              </div>
              <div className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>東京都・神奈川県・埼玉県・千葉県<br />その他エリアもご相談ください</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © 2024 買取+整理 All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link href="/privacy" className="hover:text-background transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="hover:text-background transition-colors">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
