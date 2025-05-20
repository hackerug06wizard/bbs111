"use client"

import Image from "next/image"
import { useState } from "react"

export default function ProductGallery({ images }: { images: string[] }) {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="grid gap-4">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image src={mainImage || "/placeholder.svg"} alt="Product image" fill className="object-cover" />
      </div>

      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              className={`relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md ${
                image === mainImage ? "ring-2 ring-primary" : "ring-1 ring-muted"
              }`}
              onClick={() => setMainImage(image)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Product thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
