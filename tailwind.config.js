/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // Framer breakpoints: Phone 390 (base) / Tablet 768 / Desktop 1200
    screens: { tablet: '768px', desktop: '1200px' },
    extend: {
      colors: {
        primary: '#106AD9',            // Primary
        dark: '#1E293B',               // Dark
        'light-bg': '#F6F6F6',         // Light bg
        'bg-color': '#D9D9D9',         // BG Color (divider lines)
        body: '#555555',               // Body (White bg)
        'body-dark': 'rgba(255,255,255,0.8)', // Body (Dark bg)
        stroke: 'rgba(17,17,17,0.3)',  // Strock (White bg)
        'stroke-dark': 'rgba(255,255,255,0.2)', // Strock (Dark bg)
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        mona: ['"Mona Sans"', 'Geist', 'system-ui', 'sans-serif'],
      },
      maxWidth: { container: '1200px' },
    },
  },
  plugins: [],
}
