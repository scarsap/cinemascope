import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cinema: {
          red: '#C41E1E',
          gold: '#D4AF37',
          cream: '#FAF8F5',
          'light-cream': '#F5EDE6',
          charcoal: '#2A2520',
          grey: '#5A5550',
        },
      },
      fontFamily: {
        serif: ['Crimson Text', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
