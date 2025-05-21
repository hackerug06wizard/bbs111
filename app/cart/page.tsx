"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/components/cart-provider"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  const handleCheckout = () => {
    setLoading(true)

    try {
      // Format cart items for WhatsApp message
      const items = cart
        .map((item) => `${item.name} x${item.quantity} - ${(item.price * item.quantity).toLocaleString()} UGX`)
        .join("\n")

      const message = `*New Order from Bespoke Baby Store*\n\n*Items:*\n${items}\n\n*Total:* ${subtotal.toLocaleString()} UGX`

      // Format phone number (remove spaces and ensure it has the country code)
      const phoneNumber = "256783468608"

      // Create WhatsApp URL with encoded message
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank")

      toast({
        title: "Redirecting to WhatsApp",
        description: "Complete your order by sending the message in WhatsApp",
      })

      // Clear cart after successful redirection
      clearCart()
    } catch (error) {
      toast({
        title: "Error processing order",
        description: "Please try again or contact us for assistance.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingCart className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
        <h1 className="text-2xl font-bold mb-4 text-sunny">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8">Looks like you haven't added any products to your cart yet.</p>
        <Link href="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-sunny">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-lg border shadow-sm">
            <div className="hidden md:grid md:grid-cols-6 font-medium text-sm p-4">
              <div className="col-span-3">Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Total</div>
            </div>
            <Separator className="hidden md:block" />

            {cart.map((item) => (
              <div key={item.id}>
                <div className="p-4 grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                  <div className="md:col-span-3 flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium line-clamp-2">{item.name}</h3>
                      <p className="text-sm text-sunny md:hidden mt-1">{item.price.toLocaleString()} UGX</p>
                    </div>
                  </div>
                  <div className="hidden md:block text-center text-sunny">{item.price.toLocaleString()} UGX</div>
                  <div className="flex items-center md:justify-center">
                    <span className="text-sm mr-2 md:hidden">Quantity:</span>
                    <Input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                      className="w-16 text-center"
                    />
                  </div>
                  <div className="flex items-center justify-between md:justify-end gap-2">
                    <div className="flex md:hidden items-center">
                      <span className="text-sm mr-2">Total:</span>
                    </div>
                    <span className="font-medium text-sunny">{(item.price * item.quantity).toLocaleString()} UGX</span>
                    <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)} className="ml-2">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove</span>
                    </Button>
                  </div>
                </div>
                <Separator />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="rounded-lg border p-6 shadow-sm sticky top-20">
            <h2 className="text-xl font-semibold mb-4 text-sunny">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-sunny">{subtotal.toLocaleString()} UGX</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>

              <Separator />

              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span className="text-sunny">{subtotal.toLocaleString()} UGX</span>
              </div>

              <Button className="w-full" size="lg" onClick={handleCheckout} disabled={loading}>
                {loading ? "Redirecting..." : "Checkout with WhatsApp"}
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-2">
                By proceeding to checkout, you agree to our terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
        }
                        
