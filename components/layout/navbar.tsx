"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-13 h-13 from-primary to-accent rounded-lg flex items-center justify-center">
              {/* <span className="text-white font-bold text-lg">P</span> */}
              <img src="/logo.png" alt="logo" />
            </div>
            <span className="font-bold text-lg text-foreground">LumiSoft Storess</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/produk" className="text-foreground hover:text-accent transition">
              Produk
            </Link>
            <Link href="/tentang" className="text-foreground hover:text-accent transition">
              Tentang Kami
            </Link>
            <Link href="/faq" className="text-foreground hover:text-accent transition">
              FAQ
            </Link>
            <Link href="/kontak" className="text-foreground hover:text-accent transition">
              Kontak
            </Link>
            
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/produk" className="block px-4 py-2 text-foreground hover:text-accent transition">
              Produk
            </Link>
            <Link href="/tentang" className="block px-4 py-2 text-foreground hover:text-accent transition">
              Tentang Kami
            </Link>
            <Link href="/faq" className="block px-4 py-2 text-foreground hover:text-accent transition">
              FAQ
            </Link>
            <Link href="/kontak" className="block px-4 py-2 text-foreground hover:text-accent transition">
              Kontak
            </Link>
            <Link
              href="/admin"
              className="block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
            >
              Admin
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
