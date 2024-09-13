import { createTheme } from "@mui/material";
import "@assets/fonts/fonts.css";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "IranSans",
  },
  palette: {
    primary: {
      main: "#048E9E",
      light: "#909090",
    },
    error: {
      main: "#CB1A52",
    },
  },
});

export default theme;
