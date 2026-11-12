/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#B9DCFE',
          300: '#7CC2FD',
          400: '#36A5FC',
          500: '#0084FF',  // Electric Azure Highlight
          600: '#0062E3',  // Core Vivid Cobalt / Royal Blue
          700: '#004BB8',  // Deep Royal
          800: '#0A317B',  // Navy Cobalt
          900: '#0A2558',  // Deep Midnight Sapphire (Logo Lower Facet)
          950: '#051330',  // Midnight Ink
        },
        kdr: {
          dark: '#070D1A',
          navy: '#0A2558',
          cobalt: '#0062E3',
          azure: '#0084FF',
          ice: '#E0F2FE',
        },
        slate: {
          850: '#0F1B33',
          900: '#0B1325',
          950: '#060B16',
        },
        accent: {
          cyan: '#00A3FF',
          indigo: '#4F46E5',
          violet: '#7C3AED',
          emerald: '#10B981',
          amber: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(0, 132, 255, 0.35)',
        'glow': '0 0 35px -5px rgba(0, 98, 227, 0.4)',
        'glow-lg': '0 0 55px -10px rgba(0, 163, 255, 0.45)',
        'glass': '0 8px 32px 0 rgba(10, 37, 88, 0.08)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.04), 0 10px 25px -5px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 40px -15px rgba(10, 37, 88, 0.12), 0 0 1px 1px rgba(0, 98, 227, 0.08)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(0, 132, 255, 0.09) 1px, transparent 1px)",
        'mesh-gradient': 'radial-gradient(at 0% 0%, rgba(0, 132, 255, 0.14) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(10, 37, 88, 0.18) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
}

