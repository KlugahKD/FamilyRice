// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#755723', // Dark brown from logo
          light: '#8a6b35',
          dark: '#604719'
        },
        secondary: {
          DEFAULT: '#8aad67', // Green from logo
          light: '#9dbb7e',
          dark: '#738e54'
        },
        accent: {
          DEFAULT: '#d4af37', // Gold from logo
          light: '#e0c05c',
          dark: '#b8972f'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      boxShadow: {
        card: '0 2px 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}