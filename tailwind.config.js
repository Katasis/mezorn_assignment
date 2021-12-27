module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'companyColor': '#4A4A4A'
      },
      spacing: {
        '84': '21rem',
        '100': '36rem',
      }
    },
  },
  plugins: [],
}
