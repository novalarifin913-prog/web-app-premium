export type Product = {
  id: string
  name: string
  category: "streaming" | "editing" | "ai" | "entertainment"
  icon: string
  price: number
  durations: { label: string; value: number }[]
  description: string
  features: string[]
}

export const products: Product[] = [
  {
    id: "netflix",
    name: "Netflix Premium semi",
    category: "streaming",
    icon: "🎬",
    price: 27000,
    durations: [
      { label: "1 Bulan", value: 1 },
      { label: "3 Bulan", value: 3 },
      { label: "1 Tahun", value: 12 },
    ],
    description: "Akun Netflix Premium dengan akses ke semua konten dan kualitas 4K",
    features: ["4K Ultra HD", "Multi Device", "Offline Download", "Ad-Free"],
  },
  {
    id: "spotify",
    name: "Spotify Premium",
    category: "streaming",
    icon: "🎵",
    price: 17000,
    durations: [
      { label: "1 Bulan", value: 1 },
      { label: "3 Bulan", value: 3 },
      { label: "1 Tahun", value: 12 },
    ],
    description: "Nikmati musik tanpa iklan dengan kualitas tinggi",
    features: ["Ad-Free", "Unlimited Skips", "High Quality Audio", "Offline Download"],
  },
  {
    id: "chatgpt",
    name: "ChatGPT Plus",
    category: "ai",
    icon: "🤖",
    price: 15000,
    durations: [
      { label: "1 Bulan", value: 1 },
      { label: "3 Bulan", value: 3 },
      { label: "1 Tahun", value: 12 },
    ],
    description: "Akses unlimited ke ChatGPT Plus dengan fitur premium",
    features: ["GPT-4 Access", "Image Upload", "Web Search", "Code Interpreter"],
  },
  {
    id: "canva",
    name: "Canva Pro",
    category: "editing",
    icon: "🎨",
    price: 13000,
    durations: [
      { label: "1 Bulan", value: 1 },
      { label: "3 Bulan", value: 3 },
      { label: "1 Tahun", value: 12 },
    ],
    description: "Tools design profesional untuk membuat konten kreatif",
    features: ["Unlimited Templates", "Premium Elements", "Background Remover", "Team Collab"],
  },
  {
    id: "motionpro",
    name: "Motion Pro",
    category: "editing",
    icon: "🎥",
    price: 15000,
    durations: [
      { label: "1 Bulan", value: 1 },
      { label: "3 Bulan", value: 3 },
      { label: "1 Tahun", value: 12 },
    ],
    description: "Aplikasi editing video profesional dengan banyak fitur",
    features: ["4K Export", "Effects Library", "Color Grading", "Keyframe Animation"],
  },
  {
    id: "capcut",
    name: "CapCut Pro",
    category: "editing",
    icon: "✂️",
    price: 15000,
    durations: [
      { label: "1 Bulan", value: 1 },
      { label: "3 Bulan", value: 3 },
      { label: "1 Tahun", value: 12 },
    ],
    description: "Editor video semua-dalam-satu dengan fitur advanced",
    features: ["AI Features", "Premium Transitions", "Sound Effects", "Custom Fonts"],
  },
  {
    id: "dazzcam",
    name: "dazzcam ios Premium",
    category: "editing",
    icon: "📸",
    price: 17000,
    durations: [
      { label: "1 Bulan", value: 1 },
      { label: "3 Bulan", value: 3 },
      { label: "1 Tahun", value: 12 },
    ],
    description: "populer untuk ponsel yang memungkinkan pengguna menciptakan foto dan video dengan efek film klasik, vintage, dan retro yang estetis",
    features: ["AI Retouch", "Beauty Filters", "Face Enhancement", "Background Removal"],
  },
  {
    id: "music",
    name: "music ios Premium",
    category: "editing",
    icon: "🎵",
    price: 10000,
    durations: [
      { label: "1 Bulan", value: 1 },
      { label: "3 Bulan", value: 3 },
    ],
    description: "Aplikasi ios musik",
    features: ["tanpa iklan", "bebas lagu",],
  },
  {
    id: "vidio",
    name: "Vidio Platinum",
    category: "streaming",
    icon: "📺",
    price: 25000,
    durations: [
      { label: "1 Bulan", value: 1 },
      { label: "3 Bulan", value: 3 },
      { label: "1 Tahun", value: 12 },
    ],
    description: "Streaming konten lokal dan internasional tanpa batas",
    features: ["Live Sports", "Original Series", "4K Streaming", "Multi Device"],
  },
 
  
  {
    id: "robux",
    name: "Robux vilog",
    category: "entertainment",
    icon: "🎮",
    price: 151000,
    durations: [
      { label: "1000 Robux", value: 1 },
      { label: "2000 Robux", value: 2 },
      { label: "5000 Robux", value: 5 },
    ],
    description: "Virtual currency untuk Roblox dengan harga murah",
    features: ["Instant Delivery", "Safe Transaction", "100% Authentic", "Best Price"],
  },
]

export const categories = [
  { id: "streaming", label: "Streaming" },
  { id: "editing", label: "Editing" },
  { id: "ai", label: "AI" },
  { id: "entertainment", label: "Entertainment" },
]
