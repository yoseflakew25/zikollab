/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        bounceUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out",
         'bounce-up-down': 'bounceUpDown 4s infinite'
      },
      colors: {
        primary: {
          50: "#B8C7E2",
          100: "#A3B7DA",
          200: "#7A98CA",
          300: "#5278BA",
          400: "#29589A",
          500: "#003899",
          600: "#002F81",
          700: "#002668",
          800: "#001D50",
          900: "#10B981",
        },
        secondary: {
          50: "#BAD4F1",
          100: "#A7C8ED",
          200: "#80AFE5",
          300: "#5896DD",
          400: "#317ED5",
          500: "#0A65CD",
          600: "#0855AC",
          700: "#07458B",
          800: "#05356B",
          900: "#04244A",
        },
        success: {
          50: "#BEDFCA",
          100: "#ACD5BB",
          200: "#87C39D",
          300: "#62B07F",
          400: "#39BE61",
          500: "#18B843",
          600: "#147538",
          700: "#105F2E",
          800: "#0C4823",
          900: "#093218",
        },
        warning: {
          50: "#F0DBBA",
          100: "#EBD1A6",
          200: "#E2BD7E",
          300: "#DAA956",
          400: "#D1942F",
          500: "#C88007",
          600: "#A86C06",
          700: "#885705",
          800: "#684304",
          900: "#482E03",
        },
        error: {
          50: "#E9C6C6",
          100: "#E3B6B6",
          200: "#D69595",
          300: "#C97474",
          400: "#BD5454",
          500: "#B03333",
          600: "#942B2B",
          700: "#782323",
          800: "#5C1B1B",
          900: "#3F1212",
        },
      },
    },
  },
  plugins: [],
};
