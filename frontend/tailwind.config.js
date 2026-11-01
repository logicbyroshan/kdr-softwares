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
          50: '#EEF4FF',
          100: '#E0EBFF',
          200: '#C7D9FE',
          300: '#A4BEFD',
          400: '#7B9BFC',
          500: '#4F6FF5',
          600: '#304AE0',
          700: '#2238C1',
          800: '#1D2F9C',
          900: '#1C297B',
          950: '#111749',
        },
        slate: {
          850: '#131C2E',
          900: '#0B0F19',
          950: '#07090E',
        },
        accent: {
          cyan: '#06B6D4',
          indigo: '#6366F1',
          violet: '#8B5CF6',
          emerald: '#10B981',
          amber: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(59, 130, 246, 0.3)',
        'glow': '0 0 35px -5px rgba(59, 130, 246, 0.35)',
        'glow-lg': '0 0 55px -10px rgba(59, 130, 246, 0.4)',
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.08)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.04), 0 10px 25px -5px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.1), 0 0 1px 1px rgba(0,0,0,0.06)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(99, 102, 241, 0.08) 1px, transparent 1px)",
        'mesh-gradient': 'radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.12) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(139, 92, 246, 0.12) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
}

