"use client"

interface CategoryFilterProps {
  categories: Array<{ id: string; label: string }>
  selectedCategory: string | null
  onSelectCategory: (category: string | null) => void
}

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      <button
        onClick={() => onSelectCategory(null)}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
          selectedCategory === null
            ? "bg-accent text-accent-foreground"
            : "bg-card border border-border text-foreground hover:border-accent"
        }`}
      >
        Semua
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            selectedCategory === cat.id
              ? "bg-accent text-accent-foreground"
              : "bg-card border border-border text-foreground hover:border-accent"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
