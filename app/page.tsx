import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import FeaturedProducts from "@/components/featured-products"
import HeroSection from "@/components/hero-section"
import CategorySection from "@/components/category-section"
import TestimonialSection from "@/components/testimonial-section"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />

      <section className="my-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-sunny mb-2">Featured Products</h2>
          <p className="text-muted-foreground">Discover our most popular baby essentials</p>
        </div>
        <FeaturedProducts />
        <div className="text-center mt-8">
          <Link href="/products">
            <Button className="gap-2">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <CategorySection />

      <section className="my-16 bg-muted/50 py-12 px-6 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-sunny mb-2">Why Choose Bespoke Baby Store?</h2>
          <p className="text-muted-foreground">We prioritize quality, safety, and comfort for your little ones</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background p-6 rounded-lg shadow-sm text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-sunny"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Safe Materials</h3>
            <p className="text-muted-foreground">All our products are made from BPA-free, food-grade materials</p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-sunny"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-muted-foreground">Durable products designed to last through your baby's growth</p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-sunny"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-muted-foreground">Our team is always ready to help with your questions</p>
          </div>
        </div>
      </section>

      <TestimonialSection />
    </div>
  )
                  }
                
