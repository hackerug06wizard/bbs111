"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [priceRange, setPriceRange] = useState([0, 100000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  // Initialize filters from URL params
  useEffect(() => {
    const category = searchParams.get("category")
    const minPrice = searchParams.get("minPrice")
    const maxPrice = searchParams.get("maxPrice")

    if (category) {
      setSelectedCategories([category])
    }

    if (minPrice && maxPrice) {
      setPriceRange([Number(minPrice), Number(maxPrice)])
    }
  }, [searchParams])

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category)
      } else {
        return [...prev, category]
      }
    })
  }

  const applyFilters = () => {
    const params = new URLSearchParams()

    if (selectedCategories.length === 1) {
      params.set("category", selectedCategories[0])
    }

    if (priceRange[0] > 0) {
      params.set("minPrice", priceRange[0].toString())
    }

    if (priceRange[1] < 100000) {
      params.set("maxPrice", priceRange[1].toString())
    }

    router.push(`/products?${params.toString()}`)
  }

  const resetFilters = () => {
    setPriceRange([0, 100000])
    setSelectedCategories([])
    router.push("/products")
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Categories</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="category-bottles"
              checked={selectedCategories.includes("bottles")}
              onCheckedChange={() => handleCategoryChange("bottles")}
            />
            <Label htmlFor="category-bottles">Baby Bottles</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="category-clothing"
              checked={selectedCategories.includes("clothing")}
              onCheckedChange={() => handleCategoryChange("clothing")}
            />
            <Label htmlFor="category-clothing">Baby Clothing</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="category-accessories"
              checked={selectedCategories.includes("accessories")}
              onCheckedChange={() => handleCategoryChange("accessories")}
            />
            <Label htmlFor="category-accessories">Accessories</Label>
          </div>
          <div className="flex items-center space-x-2">
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Price Range</h3>
        <Slider
          defaultValue={[0, 100000]}
          max={100000}
          step={1000}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-6"
        />
        <div className="flex items-center justify-between">
          <span>{priceRange[0].toLocaleString()} UGX</span>
          <span>{priceRange[1].toLocaleString()} UGX</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Button onClick={applyFilters}>Apply Filters</Button>
        <Button variant="outline" onClick={resetFilters}>
          Reset Filters
        </Button>
      </div>
    </div>
  )
}
