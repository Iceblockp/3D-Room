/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'gradient-cover': 'linear-gradient(to right, #0000006b, transparent 30%,transparent 70%,#0000006b)'
      }
    },
  },
  plugins: [],
}

