"use client"

import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ChevronDown } from "lucide-react"

export default function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      question: "Apakah semua akun dijamin aman?",
      answer:
        "Ya, semua akun yang kami jual adalah 100% asli dan resmi. Kami bekerja sama langsung dengan provider resmi untuk memastikan keaslian akun.",
    },
    {
      id: 2,
      question: "Bagaimana cara pemesanan?",
      answer:
        "Caranya sangat mudah. Pilih produk yang Anda inginkan, isi form order dengan data Anda, kemudian Anda akan diarahkan ke WhatsApp untuk konfirmasi dan pembayaran.",
    },
    {
      id: 3,
      question: "Berapa lama waktu pengiriman akun?",
      answer:
        "Akun akan dikirim secara instan setelah pembayaran Anda dikonfirmasi, biasanya dalam waktu kurang dari 1 menit.",
    },
    {
      id: 4,
      question: "Apakah akun bisa digunakan di beberapa device?",
      answer:
        "Ya, tergantung dari kebijakan masing-masing aplikasi. Namun rata-rata akun streaming dan AI bisa digunakan di 4-5 device secara bersamaan.",
    },
    {
      id: 5,
      question: "Apa yang terjadi jika akun bermasalah?",
      answer:
        "Jika akun yang Anda terima bermasalah, kami akan menggantinya dengan akun yang baru. Hubungi customer service kami melalui WhatsApp.",
    },
    {
      id: 6,  
      question: "Bagaimana jika saya lupa password?",
      answer:
        "Jika Anda lupa password, hubungi customer service kami. Kami akan membantu Anda mereset password atau mengirimkan akun pengganti.",
    },
    {
      id: 7,
      question: "Metode pembayaran apa saja yang diterima?",
      answer:
        "Kami menerima transfer bank (BCA, Mandiri, BNI, CIMB) dan e-wallet (GCash, Dana, OVO). Pembayaran akan dikonfirmasi melalui WhatsApp.",
    },
    {
      id: 8,
      question: "Apakah ada garansi uang kembali?",
      answer:
        "Kami tidak menawarkan refund karena produk digital tidak dapat dikembalikan. Namun kami menjamin 100% keaslian akun dan siap mengganti jika ada masalah.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground">Temukan jawaban untuk pertanyaan umum tentang layanan kami</p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-card border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-background/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                      openId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openId === faq.id && (
                  <div className="px-6 py-4 bg-background/50 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-accent/10 border border-accent rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-3">Pertanyaan Lainnya?</h3>
            <p className="text-muted-foreground mb-6">
              Jika Anda tidak menemukan jawaban, hubungi tim customer service kami yang siap membantu 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6285159883830"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                WhatsApp Kami
              </a>
              <a
                href="mailto:novalarifin@gmail.com"
                className="inline-block px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:border-accent transition"
              >
                Kirim Email
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
