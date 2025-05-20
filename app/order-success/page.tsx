import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Order Success | Bespoke Baby Store",
  description: "Your order has been successfully placed",
}

export default function OrderSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center max-w-md">
      <CheckCircle className="h-16 w-16 mx-auto mb-6 text-primary" />
      <h1 className="text-2xl font-bold mb-4">Order Placed Successfully!</h1>
      <p className="text-muted-foreground mb-8">
        Thank you for your purchase. Your order details have been sent to our WhatsApp. Please complete the transaction
        by sending the message.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/products">
          <Button>Continue Shopping</Button>
        </Link>
        <Link href="/">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}
