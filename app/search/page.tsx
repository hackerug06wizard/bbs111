import { getProducts } from "@/lib/products"
import ProductList from "@/components/product-list"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export const metadata = {
  title: "Search | Bespoke Baby Store",
  description: "Search for baby bottles and accessories",
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const query = (searchParams.q as string) || ""
  const products = await getProducts()

  const filteredProducts = query
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()),
      )
    : []

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <form>
            <Input name="q" defaultValue={query} placeholder="Search for products..." className="pl-10" />
          </form>
        </div>
      </div>

      {query ? (
        <>
          <h1 className="text-2xl font-bold mb-6">
            {filteredProducts.length > 0 ? `Search results for "${query}"` : `No results found for "${query}"`}
          </h1>

          {filteredProducts.length > 0 ? (
            <ProductList products={filteredProducts} />
          ) : (
            <p className="text-center text-muted-foreground">
              Try searching for a different term or browse our products.
            </p>
          )}
        </>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Search Our Products</h1>
          <p className="text-muted-foreground">Enter a search term above to find products.</p>
        </div>
      )}
    </div>
  )
}
