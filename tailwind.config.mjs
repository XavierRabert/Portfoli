import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Inter", ...defaultTheme.fontFamily.sans],
      //   montserrat: ["montserrat", ...defaultTheme.fontFamily.montserrat],
      // },
      colors: {
        "x-dark-blue": "#222831",
        "x-dark-grey": "#31363F",
        "x-blue": "#76ABAE",
        "x-grey": "#EEEEEE",
        "x-red": "#bbd4d6", //"#d0b0b0",
      },
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      montserrat: ["Montserrat Alternates"],
    },
  },
  plugins: [],
};
