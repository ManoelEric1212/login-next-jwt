import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  space: {
    none: "0",
    small: "4px",
    medium: "8px",
    large: "16px",
    "1/2": "50%",
    "1/5": "20%",
    "1/8": "12.5%"
  },
  color: {
    white: "#fff",
    black: "#000",
    orange: "#FFA500",
    primary: "#764abc",
    blue200: "#6790d6",
    blue300: "#447bda",
    blue800: "#29293D",
    blue900: "#1a1a27",
    grey600: "#636363",
    grey300: "#cecece",
    grey200: "#c7c7c7c7",
    grey700: "#808080",
    grey100: "#ececec",
    textPrimary: "#302E45",
    textSecondary: "#6D6C7B",
  },
  fontFamily: {
    body: '-apple-system, "Segoe UI", Verdana, Arial',
  },
  fontSize: {
    small: "1em",
    medium: "1.4em",
    large: "1.8em",
  },
  gridRepeat: {
    "4x": "repeat(4, 1fr)",
    "2x": "repeat(2, 1fr)",
  },
});