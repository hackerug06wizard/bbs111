"use client"

import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "./cart-provider"
import { useToast } from "@/components/ui/use-toast"

type Product = {
  id: string
  name: string
  price: number
  image: string
}

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addToCart(product)

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <Button onClick={handleAddToCart} className="gap-2 hover:bg-blue-500 hover:text-white transition-colors">
      <ShoppingCart className="h-4 w-4" />
      Add to Cart
    </Button>
  )
}
