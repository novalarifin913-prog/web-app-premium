import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Geist Sans - font modern dari Vercel (sangat minimalis)
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Premium Accounts - Jual Akun Premium Terpercaya",
    template: "%s | Premium Accounts",
  },
  description:
    "Jual akun premium Netflix, Spotify, ChatGPT, Canva, dan lainnya dengan harga murah dan terpercaya. Aman & Bergaransi",
  keywords: ["akun premium", "netflix premium", "spotify premium", "chatgpt premium", "akun murah"],
  authors: [{ name: "Premium Accounts" }],
  creator: "Premium Accounts",
  publisher: "Premium Accounts",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://domain-anda.com",
    title: "Premium Accounts - Jual Akun Premium Terpercaya",
    description: "Jual akun premium Netflix, Spotify, ChatGPT, Canva dengan harga murah dan terpercaya",
    siteName: "Premium Accounts",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Premium Accounts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Accounts - Jual Akun Premium Terpercaya",
    description: "Jual akun premium Netflix, Spotify, ChatGPT, Canva dengan harga murah dan terpercaya",
    images: ["/twitter-image.png"],
    creator: "@premiumaccounts",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#3b82f6",
      },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    // Tambahkan verifikasi untuk Google Search Console dll
    // google: "verification_token",
    // yandex: "verification_token",
    // yahoo: "verification_token",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}