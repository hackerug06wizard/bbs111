"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open(`https://wa.me/256783468608`, "_blank")
  }

  return (
    <Button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] shadow-lg"
      size="icon"
    >
      <MessageCircle className="h-7 w-7 text-white" />
      <span className="sr-only">Contact us on WhatsApp</span>
    </Button>
  )
}
