module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#141414",
        lightNight: "rgba(0,0,0,0.9);",
        grayText: "#8c8c8c",
        red: "#e50914",
      },
      fontSize: {
        "clamp-sm": "clamp(0.75rem, 3vw, 20px)",
        "clamp-xl": "clamp(1.5rem, 5vw, 80px)",
      },
      screens: {
        "sm-2xl": "956px",
      },
    },
  },
  plugins: [],
};
