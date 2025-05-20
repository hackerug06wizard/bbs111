import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Bespoke Baby Store" width={40} height={40} />
              <span className="font-semibold">Bespoke Baby Store</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">Let us grow your Baby</p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products?category=bottles" className="text-muted-foreground hover:text-primary">
                  Baby Bottles
                </Link>
              </li>
              <li>
                <Link href="/products?category=clothing" className="text-muted-foreground hover:text-primary">
                  Baby Clothing
                </Link>
              </li>
              <li>
                <Link href="/products?category=accessories" className="text-muted-foreground hover:text-primary">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/products?category=feeding" className="text-muted-foreground hover:text-primary">
                  Feeding Supplies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Kampala, Uganda</li>
              <li>
                <a href="tel:+256784973404" className="text-muted-foreground hover:text-primary">
                  +256 784 973404
                </a>
              </li>
              <li>
                <a href="tel:+256783468608" className="text-muted-foreground hover:text-primary">
                  +256 783 468608
                </a>
              </li>
              <li>
                <a href="mailto:info@bespokebabystore.com" className="text-muted-foreground hover:text-primary">
                  info@bespokebabystore.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bespoke Baby Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
