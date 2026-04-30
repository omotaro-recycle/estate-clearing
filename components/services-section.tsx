import Image from "next/image"
import { Heart, Home, Package, Users } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "生前整理",
    description: "お元気なうちに、ご自身の意思で大切なものを整理。ご家族への想いを形にするお手伝いをします。",
    image: "/images/service-1.jpg"
  },
  {
    icon: Home,
    title: "遺品整理",
    description: "故人様の思い出を大切にしながら、ご遺族の心に寄り添った丁寧な整理を行います。",
    image: "/images/service-2.jpg"
  },
  {
    icon: Package,
    title: "不用品整理",
    description: "引っ越しや住み替えに伴う整理から、長年溜まった物の片付けまで、幅広く対応いたします。",
    image: "/images/service-3.jpg"
  },
  {
    icon: Users,
    title: "空き家整理",
    description: "遠方にあるご実家やご親族の空き家整理も、責任を持って対応いたします。",
    image: "/images/service-4.jpg"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-3 text-sm">OUR SERVICES</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground mb-4">
            サービス内容
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            お客様一人ひとりの状況やお気持ちに合わせて、
            最適なプランをご提案いたします。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 sm:h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground">{service.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
