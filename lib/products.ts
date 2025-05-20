// This file simulates a database of products

export type Product = {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
}

const products: Product[] = [
  {
    id: "1",
    name: "Breast Milk Collector",
    price: 10000,
    description:
      "Convenient silicone breast milk collector to save every drop of precious milk during feeding or pumping.",
    image: "/breastmilkcollector.jpg?height=400&width=400",
    category: "feeding",
  },
  {
    id: "2",
    name: "Newborn Gift Set",
    price: 25000,
    description: "Complete gift set for newborns including essential items for baby care.",
    image: "/newbornset.jpg?height=400&width=400",
    category: "accessories",
  },
  {
    id: "3",
    name: "Breastfeeding Nipple Protector",
    price: 10000,
    description: "Soft silicone nipple protectors to provide relief during breastfeeding.",
    image: "/nipple.jpg?height=400&width=400",
    category: "feeding",
  },
  {
    id: "4",
    name: "Wide Mouth Silicone Nipple Bottles",
    price: 10000,
    description: "Wide mouth silicone nipple bottles designed for comfortable feeding.",
    image: "/silicon.jpg?height=400&width=400",
    category: "bottles",
  },
  {
    id: "5",
    name: "Silicone Feeding Bottle with Straw (Brown)",
    price: 10000,
    description: "Brown silicone feeding bottle with straw for easy transition from bottle to cup.",
    image: "/bottle1.jpg?height=400&width=400",
    category: "bottles",
  },
  {
    id: "6",
    name: "Feeding Bottle 250ml (Green Stripe)",
    price: 30000,
    description: "250ml feeding bottle with green stripe at the top, suitable for babies 6 months and above.",
    image: "/green.jpg?height=400&width=400",
    category: "bottles",
  },
  {
    id: "7",
    name: "Feeding Bottle 250ml (Brown Stripe)",
    price: 30000,
    description: "250ml feeding bottle with brown stripe at the top, suitable for babies 6 months and above.",
    image: "/placeholder.svg?height=400&width=400",
    category: "bottles",
  },
  {
    id: "8",
    name: "Nano Color Baby Feeding Bottle",
    price: 40000,
    description: "Nano color baby feeding bottle with advanced anti-colic system.",
    image: "/placeholder.svg?height=400&width=400",
    category: "bottles",
  },
  {
    id: "9",
    name: "Peach Color Silicone Bottle",
    price: 30000,
    description: "Peach color silicone bottle without straw, soft and easy to grip.",
    image: "/placeholder.svg?height=400&width=400",
    category: "bottles",
  },
  {
    id: "10",
    name: "Baby Overall (White)",
    price: 25000,
    description: "White baby overall, comfortable and perfect for everyday wear.",
    image: "/placeholder.svg?height=400&width=400",
    category: "clothing",
  },
  {
    id: "11",
    name: "Baby Overall (Brown)",
    price: 25000,
    description: "Brown baby overall, comfortable and perfect for everyday wear.",
    image: "/placeholder.svg?height=400&width=400",
    category: "clothing",
  },
  {
    id: "12",
    name: "Baby Overalls Set (White & Brown)",
    price: 50000,
    description: "Set of 2 baby overalls in white and brown colors.",
    image: "/placeholder.svg?height=400&width=400",
    category: "clothing",
  },
  {
    id: "13",
    name: "Baby Rompers",
    price: 25000,
    description: "Comfortable baby rompers for everyday wear.",
    image: "/placeholder.svg?height=400&width=400",
    category: "clothing",
  },
  {
    id: "14",
    name: "Baby Bottle Drying Rack",
    price: 45000,
    description: "Convenient rack for drying baby bottles and accessories.",
    image: "/placeholder.svg?height=400&width=400",
    category: "accessories",
  },
  {
    id: "15",
    name: "Baby Sleep Suit (Navy Blue)",
    price: 35000,
    description: "Navy blue sleep suit for babies 6 months to 3 years.",
    image: "/placeholder.svg?height=400&width=400",
    category: "clothing",
  },
  {
    id: "16",
    name: "Baby Sleep Suit (Sky Pattern)",
    price: 35000,
    description: "Sleep suit with dolphins, pink balloons, and yellow stars pattern for babies 6 months to 3 years.",
    image: "/placeholder.svg?height=400&width=400",
    category: "clothing",
  },
  {
    id: "17",
    name: "Baby Sleep Suit (Pink Flowers)",
    price: 35000,
    description: "Sleep suit with pink flowers pattern for babies 6 months to 3 years.",
    image: "/placeholder.svg?height=400&width=400",
    category: "clothing",
  },
  {
    id: "18",
    name: "Girl Dresses (3-10 years)",
    price: 70000,
    description: "Beautiful dresses for girls aged 3 to 10 years.",
    image: "/placeholder.svg?height=400&width=400",
    category: "clothing",
  },
  {
    id: "19",
    name: "Toddler Sippy Cup (Green)",
    price: 20000,
    description: "250ml green toddler sippy cup with soft silicone mouth.",
    image: "/placeholder.svg?height=400&width=400",
    category: "feeding",
  },
  {
    id: "20",
    name: "Toddler Sippy Cup (Pink)",
    price: 20000,
    description: "250ml pink toddler sippy cup with soft silicone mouth.",
    image: "/placeholder.svg?height=400&width=400",
    category: "feeding",
  },
  {
    id: "21",
    name: "Toddler Sippy Glass Set (Blue & Pink)",
    price: 20000,
    description: "Set of blue and pink toddler sippy glasses for juice and water.",
    image: "/placeholder.svg?height=400&width=400",
    category: "feeding",
  },
  {
    id: "22",
    name: "Baby Bottle Warmer 4-in-1",
    price: 45000,
    description: "4-in-1 baby bottle warmer, defroster, steamer, and sterilizer.",
    image: "/placeholder.svg?height=400&width=400",
    category: "accessories",
  },
  {
    id: "23",
    name: "Multifunctional Baby Bottle Warmer with LED",
    price: 65000,
    description: "Multifunctional 4-in-1 baby bottle warmer, sterilizer, steamer, and defroster with LED light.",
    image: "/placeholder.svg?height=400&width=400",
    category: "accessories",
  },
]

export async function getProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return products
}

export async function getProduct(id: string): Promise<Product | undefined> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return products.find((product) => product.id === id)
}

export async function getRelatedProducts(category: string, currentId: string): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return products.filter((product) => product.category === category && product.id !== currentId).slice(0, 4)
}
