import tailwindcssContainerQueries from "@tailwindcss/container-queries";

const config = {
  plugins: {
    "@tailwindcss/postcss": {
      plugins: [tailwindcssContainerQueries],
    },
  },
};

export default config;
