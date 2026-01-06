"use client"

import type React from "react"

import { useState } from "react"
import { products } from "@/lib/data"

export function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    product: "",
    duration: "",
    paymentMethod: "transfer",
  })

  const [submitted, setSubmitted] = useState(false)

  const selectedProduct = products.find((p) => p.id === formData.product)
  const selectedDuration = selectedProduct?.durations.find((d) => d.label === formData.duration)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "product" && { duration: "" }),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.whatsapp || !formData.product || !formData.duration) {
      alert("Mohon lengkapi semua field yang diperlukan")
      return
    }

    // Create WhatsApp message
    const message = `
Halo, saya ingin memesan:

📦 Produk: ${selectedProduct?.name}
⏱️ Durasi: ${formData.duration}
💰 Total: Rp ${(selectedProduct?.price || 0).toLocaleString()}

Nama: ${formData.name}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
Metode Pembayaran: ${formData.paymentMethod === "transfer" ? "Transfer Bank" : "E-Wallet"}

Terima kasih!
    `.trim()

    // Redirect to WhatsApp
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/6285159883830?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")

    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        product: "",
        duration: "",
        paymentMethod: "transfer",
      })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Nama Lengkap *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Masukkan nama Anda"
          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="contoh@email.com"
          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
        />
      </div>

      {/* WhatsApp */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">WhatsApp / Telepon *</label>
        <input
          type="tel"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          placeholder="08123456789"
          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
        />
      </div>

      {/* Product Selection */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-2">Pilih Produk *</label>
        <select
          name="product"
          value={formData.product}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
        >
          <option value="">-- Pilih Produk --</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name} - Rp {product.price.toLocaleString()}
            </option>
          ))}
        </select>
      </div>

      {/* Duration Selection */}
      {selectedProduct && (
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Pilih Durasi *</label>
          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          >
            <option value="">-- Pilih Durasi --</option>
            {selectedProduct.durations.map((duration, idx) => (
              <option key={idx} value={duration.label}>
                {duration.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Payment Method */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">Metode Pembayaran</label>
        <div className="space-y-2">
          <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:border-accent transition-colors">
            <input
              type="radio"
              name="paymentMethod"
              value="transfer"
              checked={formData.paymentMethod === "transfer"}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span className="text-foreground">Transfer Bank (bri)</span>
          </label>
          <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:border-accent transition-colors">
            <input
              type="radio"
              name="paymentMethod"
              value="ewallet"
              checked={formData.paymentMethod === "ewallet"}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span className="text-foreground">qris </span>
          </label>
        </div>
      </div>

      {/* Order Summary */}
      {selectedProduct && formData.duration && (
        <div className="bg-accent/10 border border-accent rounded-lg p-4">
          <h3 className="text-sm font-semibold text-accent mb-3">Ringkasan Pesanan</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Produk</span>
              <span className="text-foreground font-medium">{selectedProduct.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Durasi</span>
              <span className="text-foreground font-medium">{formData.duration}</span>
            </div>
            <div className="border-t border-accent/20 pt-2 flex justify-between">
              <span className="text-foreground font-semibold">Total</span>
              <span className="text-accent font-bold text-lg">Rp {(selectedProduct.price || 0).toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
      >
        {submitted ? "✓ Pesanan Dikirim" : "Lanjutkan ke WhatsApp"}
      </button>

      <p className="text-xs text-muted-foreground text-center">
        * Diperlukan untuk melakukan pemesanan. Anda akan diarahkan ke WhatsApp untuk konfirmasi dan pembayaran.
      </p>
    </form>
  )
}
