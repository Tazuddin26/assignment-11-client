const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        fs: "abel, serif",
      },
      boxShadow: {
        "custom-light": `8px 8px 25px
                         rgba(0, 0, 0, 0.2)`,
        "custom-dark": `10px 10px 15px
                        rgba(0, 0, 0, 0.3)`,
        "custom-color": `5px 5px 20px
                         rgba(34, 60, 80, 0.7)`,
      },
    },
  },
  plugins: [require("daisyui"), flowbite.plugin()],
  daisyui: {
    themes: ["light", "dark"],
  },
};
