/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#007bff",
        indigo: "#6610f2",
        purple: "#6f42c1",
        pink: "#e83e8c",
        red: "#dc3545",
        orange: "#fd7e14",
        yellow: "#FFD506",
        green: "#28a745",
        teal: "#20c997",
        cyan: "#17a2b8",
        white: "#fff",
        gray: "#6c757d",
        grayDark: "#343a40",
        primary: "#007bff",
        secondary: "#6c757d",
        success: "#28a745",
        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#dc3545",
        light: "#f8f9fa",
        dark: "#343a40",
        mint: "#6BCDB2",
        mint_green: "#CBF0E3",
        light_mint_green: "#E0FAF3",
        dark_green: "#006937",
        list_color: "#6bcdb2",
        light_gray: "#F6F6F6",
        green_bar: "#70C7AF",
        newM_mint_green:"#E0FAF3"
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],

        sofia: ['"Sofia Sans Semi Condensed"', "sans-serif"],

        monospace: [
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
      fontSize: {
        base: "1rem", // equivalent to 16px
      },

      fontWeight: {
        light: 300,
        bold: 900,
        regular: 400,
      },
      lineHeight: {
        relaxed: "1.5", // Line height used in `body`
      },
      screens: {
        xs: "0px",
        sm: "556px",
        md: "758px",
        lg: "982px",
        xl: "1014px",
        xxl: "1270px",
        "3xl": "1350px",
        "4xl": "1430px",
        "2xl": "1526px",
        xxxl: "1590px",
        "6xl": "1700px",
        "5xl": "1910px",
        "8xl":"2020px",
      },
      spacing: {
        swiperNavigation: "44px",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #087141, #6bcdb2)",
      },
      boxShadow: {
        inner:
          "rgb(204, 219, 232) 0px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
        c: "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px",
        box_shadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
      },
      backgroundColor: {
        "custom-black": "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(90deg)' },
        }
      },
  plugins: [
  function ({ addVariant }) {
    addVariant('ios-safari', '.ios-safari &');
    addVariant('ios-chrome', '.ios-chrome &');
  }
]
};
