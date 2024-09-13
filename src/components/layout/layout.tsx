import { Box } from "@mui/material";
import { ReactNode } from "react";
import DayLogo from "@assets/images/dey.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import {
  arrowForwardStyles,
  containerStyles,
  logoStyles,
  mainBoxStyles,
  topBoxStyles,
} from "./layout.styles";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={containerStyles}>
      <Box sx={topBoxStyles}>
        <ArrowForwardIcon sx={arrowForwardStyles} />
        <img src={DayLogo} style={logoStyles} />
        <Box component="main" sx={mainBoxStyles}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
