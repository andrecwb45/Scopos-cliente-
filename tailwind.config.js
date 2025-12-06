/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: '#FF6B6B',
        'warm-orange': '#FF8E53',
        'deep-blue': '#1E3A8A',
        indigo: '#4F46E5',
      },
    },
  },
  plugins: [],
};
