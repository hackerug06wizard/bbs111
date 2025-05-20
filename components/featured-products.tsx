import { getProducts } from "@/lib/products"
import ProductCard from "./product-card"

export default async function FeaturedProducts() {
  const products = await getProducts()
  const featuredProducts = products.slice(0, 4) // Get first 4 products

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
