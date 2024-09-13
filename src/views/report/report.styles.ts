import { SxProps } from "@mui/material";

export const redirectButtonStyles: SxProps = {
  width: "100%",
  height: "3rem",
  backgroundColor: "primary.main",
  color: "white",
};

export const waitingBoxStyles: SxProps = {
  position: "absolute",
  bottom: "0",
  right: "0",
  left: "0",
  width: "100%",
  height: "45vh",
  backgroundColor: "white",
  borderRadius: "1.5rem 1.5rem 0 0",
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  justifyContent: "center",
  alignItems: "center",
};

export const containerStyles: SxProps = {
  width: "100vw",
  height: "100vh",
  position: "absolute",
  top: "0",
  right: "0",
  left: "0",
  bottom: "0",
  zIndex: "10",
  backgroundColor: "rgba(223, 222, 222, .9)",
};
