"use client"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { OrderForm } from "@/components/order/order-form"

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Pesan Akun Premium</h1>
            <p className="text-lg text-muted-foreground">Isi formulir di bawah untuk melakukan pemesanan</p>
          </div>

          {/* Order Form */}
          <OrderForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}
