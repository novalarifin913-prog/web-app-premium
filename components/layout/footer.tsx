import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Tentang Premium</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Marketplace terpercaya untuk jual beli akun dan aplikasi premium dengan harga terjangkau, aman dan
              bergaransi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/produk" className="text-muted-foreground hover:text-accent transition">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-muted-foreground hover:text-accent transition">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-accent transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent transition">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Hubungi Kami</h3>
            <div className="space-y-3 text-sm">
              <a
                href="https://wa.me/6285159883830"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition"
              >
                <Phone size={16} />
                WhatsApp
              </a>
              <a
                href="mailto:novalarifin913.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            &copy; 2025 Premium Accounts. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
