module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      alterno: "#E2EEFC",
      azulprincipalhkf: "#012754",
      secundariohkf: "#3D88E2",
      nuevogrishkf: "#A3A3A3",
      nuevoazulhkf: "#1058C1",
      unnamedcolorff4880: "#FF4880",
      unnamedcolorf2f9ff: "#F2F9FF",
      unnamedcolord0ede9: "#D0EDE9",
      unnamedcolorc4c4c4: "#C4C4C4",
      unnamedcolor697ea5: "#697EA5",
      unnamedcolor4bb9f4: "#4BB9F4",
      unnamedcolor5d5f7c: "#5D5F7C",
      unnamedcolor08c8d0: "#08C8D0",
      unnamedcolor08d0b1: "#08D0B1",
      unnamedcolor088bd0: "#088BD0",
      unnamedcolor063894: "#063894",
      unnamedcolor707070: "#707070",
      unnamedcolor000000: "#000000",
      unnamedcolorffffff: "#FFFFFF",
      ondos: "#F1F6FF",
      unnamedcolorfafafa: "#FAFAFA",
    },
    extend: {
      fontFamily: {
        OpenSans: "'Open Sans', sans-serif",
      }
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}
