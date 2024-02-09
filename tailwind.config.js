/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        "ebook-green": "#55e748",
      },
      colors: { "ebook-green": "#55e748" },
      backgroundImage: {
        "about-us": "url('assets/images/bg.jpg')",
      },
    },
  },
  plugins: [],
};
