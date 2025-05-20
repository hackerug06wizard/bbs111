"use client"

import type React from "react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "./cart-provider"
import { useToast } from "@/components/ui/use-toast"

type Product = {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
}

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="h-full overflow-hidden transition-all hover:shadow-md">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium line-clamp-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{product.description}</p>
          <p className="font-semibold text-primary mt-2">{product.price.toLocaleString()} UGX</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button
            variant="secondary"
            className="w-full gap-2 hover:bg-blue-500 hover:text-white transition-colors"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
