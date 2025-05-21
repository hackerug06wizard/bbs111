"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Menu, Search, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useCart } from "./cart-provider"
import { useRouter } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { cart } = useCart()
  const router = useRouter()

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setIsSearchOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <Image src="/logo.png" alt="Bespoke Baby Store" width={40} height={40} />
              <span className="font-semibold text-sunny">Bespoke Baby Store</span>
            </Link>
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-lg font-medium text-sunny" onClick={() => document.body.click()}>
                Home
              </Link>
              <Link href="/products" className="text-lg font-medium text-sunny" onClick={() => document.body.click()}>
                Products
              </Link>
              <Link href="/about" className="text-lg font-medium text-sunny" onClick={() => document.body.click()}>
                About
              </Link>
              <Link href="/contact" className="text-lg font-medium text-sunny" onClick={() => document.body.click()}>
                Contact
              </Link>
              <Link href="/faq" className="text-lg font-medium text-sunny" onClick={() => document.body.click()}>
                FAQ
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center gap-2">
          <Image src="/logo.png" alt="Bespoke Baby Store" width={40} height={40} />
          <span className="hidden font-semibold sm:inline-block text-sunny">Bespoke Baby Store</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="font-medium transition-colors hover:text-sunny">
            Home
          </Link>
          <Link href="/products" className="font-medium transition-colors hover:text-sunny">
            Products
          </Link>
          <Link href="/about" className="font-medium transition-colors hover:text-sunny">
            About
          </Link>
          <Link href="/contact" className="font-medium transition-colors hover:text-sunny">
            Contact
          </Link>
          <Link href="/faq" className="font-medium transition-colors hover:text-sunny">
            FAQ
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {isSearchOpen ? (
            <form onSubmit={handleSearch} className="relative w-full max-w-sm">
              <Input
                type="search"
                placeholder="Search..."
                className="w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </form>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
              }
            
