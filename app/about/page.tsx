import Image from "next/image"

export const metadata = {
  title: "About Us | Bespoke Baby Store",
  description: "Learn about Bespoke Baby Store and our mission to provide quality baby products",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-sunny">About Bespoke Baby Store</h1>

        <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=400&width=800" alt="Bespoke Baby Store" fill className="object-cover" />
        </div>

        <div className="prose max-w-none">
          <h2 className="text-sunny">Our Story</h2>
          <p>
            Bespoke Baby Store (BBS) was founded with a simple mission: to provide parents with high-quality, safe, and
            affordable baby products. We understand the challenges of parenthood and aim to make at least one aspect of
            it easier – finding the right products for your little ones.
          </p>

          <h2 className="text-sunny">Our Mission</h2>
          <p>
            At Bespoke Baby Store, our mission is to "Let us grow your Baby" by offering products that support healthy
            development and make parenting more convenient. We carefully select each item in our inventory to ensure it
            meets our high standards for quality, safety, and functionality.
          </p>

          <h2 className="text-sunny">Our Values</h2>
          <ul>
            <li>
              <strong className="text-sunny">Quality:</strong> We only offer products that we would use for our own
              children.
            </li>
            <li>
              <strong className="text-sunny">Safety:</strong> All our products meet or exceed safety standards.
            </li>
            <li>
              <strong className="text-sunny">Affordability:</strong> We believe quality baby products should be
              accessible to all families.
            </li>
            <li>
              <strong className="text-sunny">Customer Service:</strong> We're here to support you throughout your
              parenting journey.
            </li>
          </ul>

          <h2 className="text-sunny">Our Promise</h2>
          <p>
            When you shop with Bespoke Baby Store, you're not just buying products – you're joining a community of
            parents who prioritize their children's well-being. We promise to continue providing the best products and
            service to help you and your baby thrive.
          </p>
        </div>
      </div>
    </div>
  )
              }
