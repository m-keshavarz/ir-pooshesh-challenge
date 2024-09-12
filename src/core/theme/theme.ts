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
    },
    error: {
      main: "#CB1A52",
    },
  },
});

export default theme;
