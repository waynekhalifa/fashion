import { Directions, Languages } from "@/constants/enums";
import { ThemeOptions } from "@mui/material/styles";

const lightThemeOptions = (locale: string) => {
  const options: ThemeOptions = {
    direction: locale === Languages.ARABIC ? Directions.RTL : Directions.LTR,
    palette: {
      primary: {
        light: "#7576aa",
        main: "#535495",
        dark: "#3a3a68",
      },
      secondary: {
        light: "#333349",
        main: "#00001C",
        dark: "#000013",
      },
      background: {
        paper: "#00001C",
        default: "#00001C",
      },
      text: {
        primary: "#fff",
        secondary: "rgba(255,255,255,0.7)",
      },
    },
    typography: {
      fontFamily:
        locale === "ar"
          ? ["Poppins", "serif"].join(",")
          : ["Poppins", "serif"].join(","),
    },
  };

  return options;
};

export default lightThemeOptions;
