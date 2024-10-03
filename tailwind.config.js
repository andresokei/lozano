/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"], // Indica que Tailwind revise todos los archivos HTML en tu proyecto
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // Agrega el plugin DaisyUI

  daisyui: {
    themes: ["dark", "dark", "cupcake","cyberpunk"],
  },
}
