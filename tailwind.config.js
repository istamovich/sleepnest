/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bgAndTextPulse: {
          "0%": {
            backgroundColor: "rgb(236, 218, 191)", 
          },
          "25%": {
            backgroundColor: "rgb(220, 186, 148)", 
          },
          "50%": {
            backgroundColor: "rgb(234, 187, 116)", 
          },
          "75%": {
            backgroundColor: "rgb(220, 186, 148)", 
          },
          "100%": {
            backgroundColor: "rgb(236, 218, 191)",
          },
        },
      },
      animation: {
        bgAndTextPulse: "bgAndTextPulse 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
