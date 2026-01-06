import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Hubungi Kami</h1>
            <p className="text-lg text-muted-foreground">
              Tim kami siap membantu Anda kapan saja. Pilih cara yang paling nyaman untuk menghubungi kami.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Phone,
                title: "WhatsApp",
                description: "Chat langsung dengan tim kami",
                value: "+62 851-5988-3830",
                link: "https://wa.me/6285159883830",
                buttonText: "Hubungi WhatsApp",
              },
              {
                icon: Mail,
                title: "Email",
                description: "Kirim email ke kami",
                value: "novalarifin913.com",
                link: "mailto:info@premium.com",
                buttonText: "Kirim Email",
              },
              {
                title: "Discord",
                description: "Gabung ke server Discord kami",
                value: "FLAME TAPI FAMILY",
                link: "https://discord.gg/ENbDnW47RC",
                buttonText: "Gabung Discord",
                customIcon: "discord.png", // atau "discord.png", "discord-logo.png", dll
              },
              {
                icon: Clock,
                title: "Operasional",
                description: "Waktu layanan kami",
                value: "09.00-22.00 WIB, Senin - Minggu",
                link: null,
                buttonText: null,
              },
            ].map((contact, idx) => {
              const Icon = contact.icon
              return (
                <div key={idx} className="bg-card border border-border rounded-xl p-6">
                
                  {contact.customIcon ? (
                    <div className="mb-4">
                      <Image
                        src={`/${contact.customIcon}`}
                        alt={contact.title}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                  )  : contact.icon ? (
                    <contact.icon className="w-8 h-8 text-accent mb-4" />
                  ) : null}
                  
                  <h3 className="text-lg font-bold text-foreground mb-1">{contact.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{contact.description}</p>
                  <p className="font-semibold text-foreground mb-4">{contact.value}</p>
                  {contact.link && (
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition"
                    >
                      {contact.buttonText}
                    </a>
                  )}
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Form Kontak</h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nama</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Masukkan email Anda"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subjek</label>
                  <input
                    type="text"
                    placeholder="Masukkan subjek"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Pesan</label>
                  <textarea
                    rows={5}
                    placeholder="Masukkan pesan Anda"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>

          {/* Social Media */}
          
        </div>
      </div>
      <Footer />
    </main>
  )
}