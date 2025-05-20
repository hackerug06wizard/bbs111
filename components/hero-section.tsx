import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="py-12 md:py-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-primary">Let us grow</span>
            <span className="block">your Baby</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            Premium baby bottles and accessories designed with love and care for your little one's comfort and health.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/products">
              <Button size="lg" className="gap-2">
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src="/placeholder.svg?height=500&width=500"
            alt="Bespoke Baby Store Products"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  )
}
