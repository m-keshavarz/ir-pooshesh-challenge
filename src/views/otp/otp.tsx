import { Container, TextField, Typography } from "@mui/material";

const Otp = () => {
  return (
    <Container sx={{ padding: "2rem" }}>
      <TextField
        label="تست"
        variant="outlined"
        placeholder="نام و نام خانوادگی"
      />
      <Typography fontWeight="700">
        تست برای محمد کشاورز قدرتمند 1234567890
      </Typography>
    </Container>
  );
};

export default Otp;
