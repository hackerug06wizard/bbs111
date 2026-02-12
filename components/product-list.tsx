import ProductCard from "./product-card"

type Product = {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
}

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
