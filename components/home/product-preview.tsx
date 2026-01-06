import Link from "next/link"

export function ProductPreview() {
  const products = [
    { name: "Netflix Premium", price: "Rp 23.000", icon: "🎬" },
    { name: "Spotify Premium", price: "Rp 15.000", icon: "🎵" },
    { name: "ChatGPT Plus", price: "Rp 23.000", icon: "🤖" },
    { name: "Canva Pro", price: "Rp 10.000", icon: "🎨" },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Produk Populer</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Pilih dari ribuan akun premium dengan harga terbaik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="text-4xl mb-4">{product.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{product.name}</h3>
              <p className="text-2xl font-bold text-accent mb-4">{product.price}</p>
              <Link
                href="/produk"
                className="inline-block w-full text-center py-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium"
              >
                Lihat Detail
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/produk"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition"
          >
            Lihat Semua Produk
          </Link>
        </div>
      </div>
    </section>
  )
}
