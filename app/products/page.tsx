import ProductList from "@/components/product-list"
import ProductFilters from "@/components/product-filters"
import { Suspense } from "react"
import { getProducts } from "@/lib/products"

export const metadata = {
  title: "Products | Bespoke Baby Store",
  description: "Browse our collection of premium baby bottles and accessories",
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const products = await getProducts()

  // Handle filtering
  const category = searchParams.category as string | undefined
  const minPrice = searchParams.minPrice ? Number(searchParams.minPrice) : undefined
  const maxPrice = searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined

  let filteredProducts = products

  if (category) {
    filteredProducts = filteredProducts.filter((product) => product.category.toLowerCase() === category.toLowerCase())
  }

  if (minPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.price >= minPrice)
  }

  if (maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter((product) => product.price <= maxPrice)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-sunny">Our Products</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ProductFilters />
        </div>
        <div className="lg:col-span-3">
          <Suspense fallback={<div>Loading products...</div>}>
            <ProductList products={filteredProducts} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
