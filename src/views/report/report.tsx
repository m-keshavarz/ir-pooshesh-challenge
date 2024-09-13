import { Box, Button, Typography } from "@mui/material";
import WaitingImg from "@assets/images/waiting.png";
import { useNavigate } from "react-router-dom";
import {
  containerStyles,
  redirectButtonStyles,
  waitingBoxStyles,
} from "./report.styles";

const Report = () => {
  const navigate = useNavigate();
  return (
    <Box sx={containerStyles}>
      <Box sx={waitingBoxStyles}>
        <img src={WaitingImg} />
        <Box>
          <Typography>نماینده محترم؛</Typography>
          <Typography>
            درخواست ثبت نام شما در حال بررسی است، در صورت تأیید اطلاعات،
            اپلیکیشن مورد نظر فعال خواهد شد
          </Typography>
        </Box>
        <Button sx={redirectButtonStyles} onClick={() => navigate("/")}>
          ورود با حساب کاربری دیگر
        </Button>
      </Box>
    </Box>
  );
};

export default Report;
