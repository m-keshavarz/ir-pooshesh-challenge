import { styled, SxProps } from "@mui/material";

export const subTextStyles: SxProps = {
  fontSize: "0.875rem",
  textAlign: "center",
  marginTop: "0.5rem",
};

export const titleTextStyles: SxProps = {
  fontWeight: "bold",
  fontSize: "1.125rem",
  textAlign: "center",
};

export const phoneNumberStyles: SxProps = {
  width: "100%",
  marginTop: "1.5rem",
};

export const NoFlip = styled("div")`
  /* @noflip */
  direction: ltr;
`;

export const submitButtonStyles: SxProps = {
  width: "100%",
  marginTop: "3rem",
  height: "3rem",
};

export const formControlStyles: SxProps = { width: "100%" };
