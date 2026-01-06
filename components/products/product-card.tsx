"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import type { Product } from "@/lib/data"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group">
      {/* Icon & Name */}
      <div className="p-6 border-b border-border">
        <div className="text-5xl mb-3">{product.icon}</div>
        <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
      </div>

      {/* Description */}
      <div className="px-6 py-4 bg-background/50">
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </div>

      {/* Price */}
      <div className="px-6 py-4">
        <div className="text-2xl font-bold text-accent mb-1">Rp {product.price.toLocaleString()}</div>
        <p className="text-xs text-muted-foreground">Harga mulai dari</p>
      </div>

      {/* Expandable Features */}
      <div className="px-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between py-3 text-sm font-medium text-foreground hover:text-accent transition-colors"
        >
          <span>Fitur Unggulan</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
        </button>

        {isExpanded && (
          <div className="pb-4 space-y-2">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                {feature}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Durations */}
      <div className="px-6 py-4 space-y-3">
        {product.durations.map((duration, idx) => (
          <button
            key={idx}
            className="w-full py-2 bg-background border border-border rounded-lg text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-all duration-300"
          >
            {duration.label}
          </button>
        ))}
      </div>

      {/* Buy Button */}
      <div className="px-6 pb-6 pt-2">
        <Link
          href="/order"
          className="block w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-center hover:bg-primary/90 transition-all duration-300"
        >
          Pesan Sekarang
        </Link>
      </div>
    </div>
  )
}
