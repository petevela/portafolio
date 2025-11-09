/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937', // gray-800
        accent: '#0ea5e9'   // sky-500
      }
    }
  },
  plugins: [],
}
