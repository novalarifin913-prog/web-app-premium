"use client"

import { ButtonHTMLAttributes, ReactNode } from "react"

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary" | "ghost"
  loading?: boolean
}

export function AnimatedButton({ 
  children, 
  variant = "primary",
  loading = false,
  className = "",
  ...props 
}: AnimatedButtonProps) {
  const baseStyles = "relative overflow-hidden rounded-lg font-semibold transition-all duration-300 active:scale-95"
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl",
    secondary: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700",
    ghost: "border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
  }

  return (
    <button
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${className}
        relative overflow-hidden
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-white/20
        before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500
      `}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          Loading...
        </div>
      ) : (
        <span className="relative z-10">{children}</span>
      )}
    </button>
  )
}