"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-primary/5 pt-24 pb-12 sm:pt-28 sm:pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Attention Grabber */}
        <div className="text-center mb-6">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
            不用品整理をお考えの方、ちょっと待ってください!
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-foreground mb-4">
              <span className="text-primary">買取</span>してから整理すれば
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl">
                費用がグッとお得に!
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              地元で20年、リサイクルショップを運営する
              <span className="font-medium text-foreground">二児の父</span>
              が対応!
              <br />
              一つひとつ丁寧に査定・対応いたします。
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-4 py-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                見積もり無料
              </span>
              <span className="inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-4 py-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                出張費無料
              </span>
              <span className="inline-flex items-center gap-1.5 bg-card border border-border rounded-full px-4 py-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                追加料金なし
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="rounded-full text-base px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a href="tel:080-3125-7555">
                  <Phone className="w-5 h-5 mr-2" />
                  080-3125-7555
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-base px-8 py-6 bg-card"
                onClick={() =>
                  window.open("https://line.me/R/ti/p/@705qbjqc", "_blank")
                }
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                LINEで相談する
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3 text-center lg:text-left">
              年中無休　9:00〜24:00
            </p>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <Image
                src="/images/boss_image.jpg"
                alt="スタッフ"
                fill
                className="object-cover rounded-3xl"
                priority
              />
            </div>
            {/* Trust Badge */}
            <div className="absolute -top-2 -right-2 sm:top-2 sm:right-2 bg-accent text-accent-foreground rounded-full w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center text-center shadow-lg">
              <span className="text-xs font-medium">地域密着</span>
              <span className="text-sm font-bold">20年の実績</span>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="mt-12 bg-card rounded-2xl border border-border p-6 sm:p-8">
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-muted-foreground text-sm mb-2">
                そのまま処分すると...
              </div>
              <div className="bg-muted rounded-xl p-4">
                <p className="text-foreground font-medium">
                  価値あるものも処分
                </p>
                <p className="text-destructive font-bold text-lg">
                  費用が高くなる
                </p>
              </div>
            </div>
            <div className="text-center flex items-center justify-center">
              <div className="bg-primary text-primary-foreground rounded-full px-6 py-3 font-bold">
                先に買取査定!
              </div>
            </div>
            <div className="text-center">
              <div className="text-muted-foreground text-sm mb-2">
                買取後に整理すると...
              </div>
              <div className="bg-primary/10 rounded-xl p-4 border-2 border-primary">
                <p className="text-foreground font-medium">
                  価値あるものを現金化
                </p>
                <p className="text-primary font-bold text-lg">
                  トータル費用を削減!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
