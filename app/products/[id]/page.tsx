import { getProduct, getRelatedProducts } from "@/lib/products"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import AddToCartButton from "@/components/add-to-cart-button"
import ProductGallery from "@/components/product-gallery"
import RelatedProducts from "@/components/related-products"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    return {
      title: "Product Not Found | Bespoke Baby Store",
    }
  }

  return {
    title: `${product.name} | Bespoke Baby Store`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = await getRelatedProducts(product.category, product.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <ProductGallery images={[product.image]} />

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold text-primary">{product.price.toLocaleString()} UGX</p>

          <div className="my-4">
            <h3 className="text-lg font-medium mb-2">Description</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div className="flex gap-4 my-6">
            <AddToCartButton product={product} />
            <Button variant="outline" size="icon">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
          </div>

          <div className="border-t pt-4 mt-4">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Category:</span> {product.category}
            </p>
          </div>
        </div>
      </div>

      <RelatedProducts products={relatedProducts} />
    </div>
  )
}
