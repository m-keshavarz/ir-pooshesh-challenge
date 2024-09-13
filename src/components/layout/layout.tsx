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
import { useLocation, useNavigate } from "react-router-dom";

const Layout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Box sx={containerStyles}>
      <Box sx={topBoxStyles}>
        {pathname !== "/" && (
          <ArrowForwardIcon
            sx={arrowForwardStyles}
            onClick={() => navigate(-1)}
          />
        )}
        <img src={DayLogo} style={logoStyles} />
        <Box component="main" sx={mainBoxStyles}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
