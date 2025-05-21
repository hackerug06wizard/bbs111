import { MapPin, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "Contact Us | Bespoke Baby Store",
  description: "Get in touch with Bespoke Baby Store for any questions or inquiries",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-sunny">Contact Us</h1>

      <div className="max-w-2xl mx-auto bg-background rounded-lg border p-8 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 text-sunny">Get In Touch</h2>
        <p className="text-muted-foreground mb-8">
          Have questions about our products or need assistance? We're here to help! Contact us directly using the
          information below or reach out via WhatsApp for immediate assistance.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-sunny mt-0.5" />
            <div>
              <h3 className="font-medium text-lg mb-1 text-sunny">Phone</h3>
              <p className="text-muted-foreground">
                <a href="tel:+256784973404" className="hover:text-sunny">
                  +256 784 973404
                </a>
              </p>
              <p className="text-muted-foreground">
                <a href="tel:+256783468608" className="hover:text-sunny">
                  +256 783 468608
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-sunny mt-0.5" />
            <div>
              <h3 className="font-medium text-lg mb-1 text-sunny">Email</h3>
              <p className="text-muted-foreground">
                <a href="mailto:info@bespokebabystore.com" className="hover:text-sunny">
                  info@bespokebabystore.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-sunny mt-0.5" />
            <div>
              <h3 className="font-medium text-lg mb-1 text-sunny">Address</h3>
              <p className="text-muted-foreground">
                Bespoke Baby Store
                <br />
                Kampala, Uganda
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
      }
    
