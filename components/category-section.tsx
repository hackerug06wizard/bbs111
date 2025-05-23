import Link from "next/link"
import Image from "next/image"

export default function CategorySection() {
  const categories = [
    {
      name: "Baby Bottles",
      image: "/babybottles.jpg?height=300&width=300",
      link: "/products?category=bottles",
    },
    {
      name: "Baby Clothing",
      image: "/babyclothing.jpg?height=300&width=300",
      link: "/products?category=clothing",
    },
    {
      name: "Accessories",
      image: "/accessories.jpg?height=300&width=300",
      link: "/products?category=accessories",
    },
    
  ]

  return (
    <section className="my-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-sunny mb-2">Shop by Category</h2>
        <p className="text-muted-foreground">Find the perfect products for your baby</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.name} href={category.link}>
            <div className="group relative overflow-hidden rounded-lg">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">{category.name}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
                  }
                  
