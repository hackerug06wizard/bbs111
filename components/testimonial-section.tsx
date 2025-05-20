import Image from "next/image"

export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Mother of two",
      content: "The bottles from Bespoke Baby Store are amazing! My baby loves them and they're so easy to clean.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "David K.",
      role: "First-time dad",
      content:
        "The quality of the baby clothes is exceptional. They've survived countless washes and still look great!",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Michelle T.",
      role: "Mother of twins",
      content: "I love the bottle warmer! It's been a lifesaver for late-night feedings with my twins.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="my-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2">What Our Customers Say</h2>
        <p className="text-muted-foreground">Trusted by parents across Uganda</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium">{testimonial.name}</h3>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
            <p className="italic text-muted-foreground">&ldquo;{testimonial.content}&rdquo;</p>
          </div>
        ))}
      </div>
    </section>
  )
}
