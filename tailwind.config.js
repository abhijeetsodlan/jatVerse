/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can add custom animations here if you want to use them directly
      animation: {
        'move-tractor': 'moveTractor 2s linear infinite',
      },
    },
  },
  plugins: [],
}
