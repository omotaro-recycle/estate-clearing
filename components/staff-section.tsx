import Image from "next/image"

const staff = [
  {
    name: "鈴木 太郎",
    role: "代表・整理収納アドバイザー1級",
    image: "/images/staff-1.jpg",
    message: "お客様の「ありがとう」の言葉が、私たちの原動力です。一つひとつの品物に込められた思いを大切にしながら、心を込めてお手伝いいたします。"
  },
  {
    name: "高橋 花子",
    role: "シニアコーディネーター",
    image: "/images/staff-2.jpg",
    message: "長年の経験を活かし、お客様のお気持ちに寄り添った対応を心がけています。何でもお気軽にご相談ください。"
  },
  {
    name: "伊藤 健一",
    role: "整理スタッフリーダー",
    image: "/images/staff-3.jpg",
    message: "丁寧で迅速な作業をモットーに、お客様に安心していただける空間づくりをお手伝いします。"
  }
]

export function StaffSection() {
  return (
    <section id="staff" className="py-20 sm:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 text-sm">OUR TEAM</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground mb-4">
            スタッフ紹介
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            経験豊富なスタッフが、お客様の大切な整理を
            心を込めてサポートいたします。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {staff.map((member, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl overflow-hidden border border-border"
            >
              <div className="relative h-64 sm:h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
