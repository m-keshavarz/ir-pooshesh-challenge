import { SxProps } from "@mui/material";
import DecorBg from "@assets/images/layoutBg.png";
import { CSSProperties } from "react";

export const containerStyles: SxProps = {
  height: "100vh",
  backgroundImage: `url(${DecorBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
};

export const topBoxStyles: SxProps = {
  backgroundColor: "primary.main",
  height: "31%",
  borderRadius: "0 0 2rem 2rem",
  padding: "2rem 1.5rem 0 1.5rem",
  position: "relative",
};

export const arrowForwardStyles: SxProps = {
  width: "1.5rem",
  height: "1,5rem",
  color: "white",
  cursor: "pointer",
};

export const logoStyles: CSSProperties = {
  height: "30px",
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
};

export const mainBoxStyles: SxProps = {
  marginTop: "2rem",
  backgroundColor: "white",
  boxShadow: "0 0 5px 3px rgba(0, 0, 0, .1)",
  borderRadius: ".75rem",
  padding: "1.5rem",
  "& > *": {
    width: "100%",
  },
};
