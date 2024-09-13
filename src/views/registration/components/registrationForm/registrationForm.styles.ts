import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

export const textInputStyles: SxProps = {
  width: "100%",
};

export const formStyles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
};

export const loadingButtonStyles: SxProps = {
  width: "100%",
  height: "3rem",
  marginTop: "2.5rem",
  backgroundColor: "primary.main",
  color: "white",
};