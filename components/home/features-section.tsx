import { Check, Lock, Zap, Users } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Lock,
      title: "Aman & Terpercaya",
      description: "Transaksi Anda dilindungi dengan sistem keamanan tingkat enterprise.",
    },
    {
      icon: Zap,
      title: "Pengiriman Instan",
      description: "Akun premium langsung tersedia setelah pembayaran dikonfirmasi.",
    },
    {
      icon: Users,
      title: "Customer Support 24/7",
      description: "Tim support kami siap membantu Anda kapan saja melalui WhatsApp dan Email.",
    },
    {
      icon: Check,
      title: "Bergaransi 100%",
      description: "Jika akun bermasalah, kami ganti dengan yang baru tanpa biaya tambahan.",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Mengapa Memilih Kami?</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Kami menyediakan layanan terbaik untuk kebutuhan akun premium Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 bg-background border border-border rounded-xl hover:border-accent transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
