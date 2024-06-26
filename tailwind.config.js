/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        floralwhite: {
          100: "#fffcf2",
          200: "#fffbf1",
        },
        whitesmoke: {
          100: "#ebebeb",
          200: "#eaeaea",
        },
        darkslategray: {
          100: "#474747",
          200: "#333548",
          300: "#313131",
          400: "#2f2f2f",
          500: "rgba(51, 53, 72, 0.5)",
          600: "rgba(51, 53, 72, 0.71)",
        },
        ghostwhite: {
          100: "#f7f7fc",
          200: "rgba(247, 247, 252, 0)",
        },
        slateblue: "rgba(46, 55, 164, 0.04)",
        dimgray: {
          100: "#626262",
          200: "#606060",
          300: "#585858",
          400: "#505050",
        },
        darkolivegreen: {
          100: "#3a643b",
          200: "rgba(58, 100, 59, 0.52)",
        },
        gainsboro: {
          100: "#e8e8e8",
          200: "#e5e5e5",
          300: "#e2e2e2",
          400: "#e1e1e1",
          500: "#e0dfdf",
          600: "#dcdcdc",
          700: "#d8d8d8",
        },
        gray: {
          100: "#fafafa",
          200: "#939393",
          300: "#8e8e8e",
          400: "#8a8a8a",
          500: "#818181",
          600: "#2b2b2b",
          700: "#212529",
          800: "#1f1f1f",
          900: "#131313",
          1000: "#0d0d0d",
        },
        "neutrals-900": "#2e2f2e",
        darkgray: "#979797",
        mintcream: {
          100: "#f2fbf2",
          200: "#eaf2ea",
        },
        goldenrod: "#f1b93a",
        tomato: "#d5512e",
        oldlace: "#fff7e2",
      },
      spacing: {},
      fontFamily: {
        "body-1-regular": "Nunito",
        poppins: "Poppins",
        inter: "Inter",
        lato: "Lato",
        "open-sans": "'Open Sans'",
        "noto-sans-jp": "'Noto Sans JP'",
      },
      borderRadius: {
        "4xs": "9px",
        lg: "18px",
        mid: "17px",
        "21xl": "40px",
        mini: "15px",
        "3xs": "10px",
        "3xl": "22px",
        "2xs": "11px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      mini: "15px",
      "5xl": "24px",
      lg: "18px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        floralwhite: {
          100: "#fffcf2",
          200: "#fffbf1",
        },
        whitesmoke: {
          100: "#f4f4f4",
          200: "#ededed",
          300: "#ebebeb",
          400: "#eaeaea",
        },
        darkslategray: {
          100: "#474747",
          200: "#3c3c3c",
          300: "#333548",
          400: "#313131",
          500: "#2f2f2f",
          600: "rgba(51, 53, 72, 0.5)",
          700: "rgba(51, 53, 72, 0.71)",
        },
        ghostwhite: {
          100: "#f7f7fc",
          200: "rgba(247, 247, 252, 0)",
        },
        slateblue: "rgba(46, 55, 164, 0.04)",
        dimgray: {
          100: "#646665",
          200: "#656565",
          300: "#626262",
          400: "#606060",
          500: "#585858",
          600: "#505050",
        },
        darkolivegreen: {
          100: "#3a643b",
          200: "rgba(58, 100, 59, 0.39)",
          300: "rgba(58, 100, 59, 0.52)",
        },
        gainsboro: {
          100: "#e8e8e8",
          200: "#e5e5e5",
          300: "#e3e3e3",
          400: "#e2e2e2",
          500: "#e1e1e1",
          600: "#e0dfdf",
          700: "#dcdcdc",
          800: "#d8d8d8",
        },
        gray: {
          100: "#fafafa",
          200: "#939393",
          300: "#8e8e8e",
          400: "#8a8a8a",
          500: "#818181",
          600: "#7b7b7b",
          700: "#767676",
          800: "#2b2b2b",
          900: "#212529",
          1000: "#1f1f1f",
          1100: "#131313",
          1200: "#0d0d0d",
        },
        "neutrals-900": "#2e2f2e",
        darkgray: "#979797",
        mintcream: "#f2fbf2",
        goldenrod: "#f1b93a",
        tomato: "#d5512e",
        "primary-tint-2": "#eaf2ea",
        oldlace: "#fff7e2",
        honeydew: "#dceedc",
        lightgray: {
          100: "#d4d4d4",
          200: "#cdcdcd",
        },
        beige: "rgba(207, 235, 207, 0.5)",
      },
      spacing: {},
      fontFamily: {
        "body-1-regular": "Nunito",
        poppins: "Poppins",
        "aushadham-text-styles-body-large-regular": "Inter",
        lato: "Lato",
        "open-sans": "'Open Sans'",
        "noto-sans-jp": "'Noto Sans JP'",
      },
      borderRadius: {
        "4xs": "9px",
        lg: "18px",
        mid: "17px",
        "21xl": "40px",
        mini: "15px",
        "3xs": "10px",
        "3xl": "22px",
        "2xs": "11px",
        "11xl": "30px",
        "12xl": "31px",
        "6xs": "7px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      mini: "15px",
      "5xl": "24px",
      lg: "18px",
      sm: "14px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
