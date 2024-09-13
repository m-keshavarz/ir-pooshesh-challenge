import { SxProps } from "@mui/material";

export const containerStyles: SxProps = {
  display: "flex",
  flexDirection: "row-reverse",
  gap: ".5rem",
  justifyContent: "space-between",
  alignItems: "center",
  mt: "1.5rem",
};

export const inputStyles: SxProps = {
  borderRadius: ".75rem",
  "& > input": {
    textAlign: "center",
    fontSize: "1rem",
    aspectRatio: 1,
  },
};
