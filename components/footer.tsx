import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-lg font-medium">心</span>
              </div>
              <span className="text-xl font-medium text-background">こころ整理</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              人生の大切な思い出を、一緒に整理します。
              生前整理・遺品整理・不用品整理は
              「こころ整理」にお任せください。
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-background mb-4">サービス</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-sm text-background/70 hover:text-background transition-colors">
                  生前整理
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-background/70 hover:text-background transition-colors">
                  遺品整理
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-background/70 hover:text-background transition-colors">
                  不用品整理
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-background/70 hover:text-background transition-colors">
                  空き家整理
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-background mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#staff" className="text-sm text-background/70 hover:text-background transition-colors">
                  スタッフ紹介
                </Link>
              </li>
              <li>
                <Link href="#flow" className="text-sm text-background/70 hover:text-background transition-colors">
                  ご利用の流れ
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-background/70 hover:text-background transition-colors">
                  よくある質問
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-background/70 hover:text-background transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-background mb-4">お問い合わせ</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p>フリーダイヤル</p>
              <a href="tel:0120-000-000" className="text-xl font-medium text-background hover:text-primary transition-colors block">
                0120-000-000
              </a>
              <p className="text-xs">受付時間：9:00〜18:00（年中無休）</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © 2024 こころ整理 All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <Link href="/privacy" className="hover:text-background transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="hover:text-background transition-colors">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
