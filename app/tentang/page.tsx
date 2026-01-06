import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Shield, Zap, Users, Award } from "lucide-react"

export default function TentangPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Tentang Kami</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Premium Accounts adalah marketplace terpercaya untuk jual beli akun dan aplikasi premium dengan harga
              terjangkau.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Cerita Kami</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Kami memahami bahwa biaya berlangganan aplikasi premium bisa menjadi beban finansial. Oleh karena itu,
                kami didirikan untuk menyediakan solusi yang terjangkau dan terpercaya.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sejak tahun 2023, kami telah melayani ribuan pelanggan dengan tingkat kepuasan mencapai 99%. Komitmen
                kami adalah memberikan harga terbaik tanpa mengorbankan kualitas layanan.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-12 flex items-center justify-center min-h-72">
              <div className="text-6xl">🚀</div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Nilai-Nilai Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Aman & Terpercaya",
                  description: "Semua transaksi dilindungi dengan sistem keamanan tingkat tinggi",
                },
                {
                  icon: Zap,
                  title: "Cepat & Efisien",
                  description: "Pengiriman akun instan setelah pembayaran dikonfirmasi",
                },
                {
                  icon: Users,
                  title: "Customer First",
                  description: "Kepuasan pelanggan adalah prioritas utama kami",
                },
                {
                  icon: Award,
                  title: "Kualitas Terbaik",
                  description: "Menjamin akun asli 100% dan bergaransi seumur hidup",
                },
              ].map((value, idx) => {
                const Icon = value.icon
                return (
                  <div key={idx} className="bg-card border border-border rounded-xl p-6">
                    <Icon className="w-8 h-8 text-accent mb-3" />
                    <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 bg-card/50 rounded-xl p-8">
            {[
              { number: "10K+", label: "Pelanggan Puas" },
              { number: "12", label: "Produk Premium" },
              { number: "99%", label: "Tingkat Kepuasan" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Team Message */}
          <div className="bg-accent/10 border border-accent rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Pesan dari Tim Kami</h3>
            <p className="text-muted-foreground mb-4">
              Terima kasih telah memilih Premium Accounts. Kami berkomitmen untuk terus meningkatkan layanan dan harga
              kami agar dapat melayani Anda lebih baik.
            </p>
            <p className="text-muted-foreground">
              Jika Anda memiliki saran atau masukan, jangan ragu untuk menghubungi kami melalui WhatsApp atau email.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
