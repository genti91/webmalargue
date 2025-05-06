module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // rutas donde Tailwind escanea clases usadas
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  prefix: "tw-", // evita conflictos con Bootstrap o clases propias de SCSS
};
