import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "m3-sys-light-primary": "#6750a4",
        "m3-sys-light-on-primary": "#fff",
        "m3-sys-light-on-surface-variant": "#49454f",
        "m3-sys-light-outline": "#79747e",
        "m3-sys-light-surface": "#fef7ff",
        cornflowerblue: {
          "100": "#008edd",
          "200": "rgba(0, 142, 221, 0.25)",
        },
        blueviolet: "#9747ff",
        tomato: {
          "100": "#f44336",
          "200": "rgba(244, 67, 54, 0.2)",
        },
        black: "#000",
        forestgreen: {
          "100": "#4caf50",
          "200": "rgba(76, 175, 80, 0.2)",
        },
        gray: {
          "100": "#938f99",
          "200": "rgba(0, 0, 0, 0.4)",
        },
        darkslategray: "#3f3d56",
        "grey-grey900": "#212934",
        firebrick: "#b3261e",
        lavender: "#f0edff",
        gold: {
          "100": "#ffd400",
          "200": "rgba(255, 212, 0, 0.15)",
          "300": "rgba(255, 212, 0, 0.75)",
        },
        gainsboro: "#d9d9d9",
        whitesmoke: "#f2f2f2",
      },
      spacing: {},
      fontFamily: {
        "m3-label-large": "Roboto",
        inter: "Inter",
        lalezar: "Lalezar",
      },
      borderRadius: {
        "81xl": "100px",
        "8xs": "5px",
        "10xs": "3px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      "9xl": "28px",
      "13xl": "32px",
      "7xl": "26px",
      inherit: "inherit",
    },
  },
  plugins: [],
}
export default config