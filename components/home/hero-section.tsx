"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4">
      <div className="max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                Marketplace Premium Terpercaya
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Jual Akun Premium Murah & Terpercaya
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              Netflix, Spotify, Canva, ChatGPT, dan lainnya – Aman & Bergaransi. Dapatkan akses premium dengan harga
              terbaik hanya di sini.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/produk"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 group"
              >
                Beli Sekarang
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 border border-border rounded-lg font-semibold text-foreground hover:bg-card transition-all duration-300"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-muted-foreground text-sm">Aman & Terpercaya</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-muted-foreground text-sm">Bergaransi</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span className="text-muted-foreground text-sm">Harga Terjangkau</span>
              </div>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>

              {/* Cards Stack */}
              <div className="relative space-y-4">
                {[
                  { name: "Netflix", color: "from-red-600 to-red-700" },
                  { name: "Spotify", color: "from-green-600 to-green-700" },
                  { name: "ChatGPT", color: "from-purple-600 to-purple-700" },
                ].map((product, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl bg-gradient-to-r ${product.color} text-white font-semibold text-lg shadow-lg transform hover:scale-105 transition-transform duration-300`}
                    style={{
                      transform: `rotate(${index * 2 - 2}deg) translateY(${index * 12}px)`,
                    }}
                  >
                    {product.name} Premium
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
