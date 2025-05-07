import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores Primárias
        black: "#0A0A0A",
        white: "#FFFFFF",
        
        // Cores Secundárias
        purple: "#5E17EB",
        blue: "#0066FF",
        
        // Cores com nomes semânticos para componentes
        primary: "#5E17EB", // Roxo principal
        secondary: "#0066FF", // Azul elétrico
        
        // Cores Terciárias
        gray: {
          100: "#F8F8F8",
          200: "#E0E0E0",
          300: "#B0B0B0",
          400: "#606060",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
        'xxl': '64px',
      },
      boxShadow: {
        'card': '0px 8px 24px rgba(0, 0, 0, 0.06)',
        'dropdown': '0px 4px 12px rgba(0, 0, 0, 0.08)',
        'card-hover': '0px 12px 32px rgba(0, 0, 0, 0.1)',
        'highlight': '0px 12px 32px rgba(94, 23, 235, 0.1)',
      },
      borderRadius: {
        'card': '12px',
        'button': '6px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;