import OTPInput from "@components/otpInput";
import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";
import { submitButtonStyles } from "../getPhoneNumber/getPhoneNumber.styles";
import { TcheckOtpProps } from "./checkOtp.types";
import EditIcon from "@mui/icons-material/Edit";
import {
  editButtonStyles,
  phoneNumberStyles,
  titleStyles,
} from "./checkOtp.styles";
import { StepsEnum } from "@views/otp/otp.types";
import { formatTime } from "@core/utils/formatTime";
import RefreshIcon from "@mui/icons-material/Refresh";
import useCheckOtp from "./checkOtp.biz";
import MySnackBar from "@components/snackBar/snackBar";

const CheckOtp = (props: TcheckOtpProps) => {
  const { phoneNumber, setStep, createCodePending } = props;

  const {
    errorMsg,
    open,
    setOpen,
    handleRetry,
    handleSubmit,
    isPending,
    timeLeft,
  } = useCheckOtp(props);

  return (
    <>
      <Typography sx={titleStyles}>کد تأیید را وارد نمایید.</Typography>
      <Typography sx={phoneNumberStyles}>
        <EditIcon
          sx={editButtonStyles}
          onClick={() => setStep(StepsEnum.getPhoneNumber)}
        />
        {`98${phoneNumber}+`}
      </Typography>
      <OTPInput hasError={!!errorMsg} onComplete={handleSubmit} />
      <Typography
        sx={{
          marginTop: "1.5rem",
          textAlign: "center",
          fontSize: ".75rem",
          color: "primary.light",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: ".25rem",
        }}
        onClick={handleRetry}
      >
        ارسال مجدد کد{" "}
        {timeLeft ? (
          formatTime(timeLeft)
        ) : (
          <RefreshIcon
            sx={{ color: "primary.main", cursor: "pointer", width: "1rem" }}
          />
        )}
      </Typography>
      <LoadingButton
        type="submit"
        variant="contained"
        loading={isPending || createCodePending}
        sx={submitButtonStyles}
      >
        ادامه
      </LoadingButton>
      <MySnackBar
        open={open}
        handleClose={() => setOpen(false)}
        message={errorMsg}
      />
    </>
  );
};

export default CheckOtp;
