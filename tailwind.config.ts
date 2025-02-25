import type { Config } from "tailwindcss";
import daisyui from "daisyui"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "Helvetica", "Arial", "Lucida", "sans-serif"]
        
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
        {
        mytheme: {
          "primary": "#FCF048", // "#ffff63",
          "primary-content": "#121217",
          "secondary": "#ED2D5F",
          "accent": "#121217",
          "accent-content": "#ffff63",
          "neutral": "#fff", // text
          "base-100": "#000", // "#121217", // background          
          "info": "#0891b2",                    
          "success": "#00ff00",                    
          "warning": "#121217",                   
          "error": "#ED2D5F",
        },
      }
    ],
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
} satisfies Config;
