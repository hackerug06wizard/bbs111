import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "FAQ | Bespoke Baby Store",
  description: "Frequently asked questions about Bespoke Baby Store products and services",
}

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-sunny">Frequently Asked Questions</h1>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sunny">What materials are your baby bottles made from?</AccordionTrigger>
            <AccordionContent>
              All our baby bottles are made from high-quality, BPA-free materials that are safe for your baby. We use
              food-grade silicone and plastic that meets international safety standards.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-sunny">How do I clean and sterilize the baby bottles?</AccordionTrigger>
            <AccordionContent>
              Our bottles can be cleaned with warm soapy water or in a dishwasher (top rack only). For sterilization,
              you can use a steam sterilizer, boiling water, or sterilizing tablets. Always follow the specific care
              instructions included with each product.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-sunny">What is your return policy?</AccordionTrigger>
            <AccordionContent>
              We accept returns within 14 days of purchase for unused items in their original packaging. Please contact
              us before returning any items. For hygiene reasons, certain products like nipples and teats cannot be
              returned once opened.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-sunny">How long does shipping take?</AccordionTrigger>
            <AccordionContent>
              For local deliveries within Kampala, we typically deliver within 1-2 business days. For other areas in
              Uganda, delivery may take 3-5 business days depending on the location.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-sunny">Do you offer international shipping?</AccordionTrigger>
            <AccordionContent>
              Currently, we only ship within Uganda. We're working on expanding our shipping options to other East
              African countries in the near future.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-sunny">
              How do I know which bottle size is right for my baby?
            </AccordionTrigger>
            <AccordionContent>
              For newborns and babies up to 3 months, we recommend 150ml bottles. For babies 3 months and older, 250ml
              bottles are more suitable. The nipple flow rate should also match your baby's age and feeding abilities.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-sunny">Are your products covered by warranty?</AccordionTrigger>
            <AccordionContent>
              Yes, all our products come with a standard 30-day warranty against manufacturing defects. Some products
              may have extended warranties - please check the product description for details.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-sunny">Do you offer gift wrapping?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer gift wrapping services for a small additional fee. You can select this option during
              checkout and even include a personalized message for the recipient.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
      }
      
