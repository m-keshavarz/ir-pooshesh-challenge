import { TinputProps } from "./otpInput.types";
import { Box, OutlinedInput } from "@mui/material";
import { containerStyles, inputStyles } from "./otpInput.styles";
import useOtpInput from "./otpInput.biz";

const OTPInput = (props: TinputProps) => {
  const { hasError } = props;
  const { OTP, handleTextChange, inputRef, handleKeyDown } = useOtpInput(props);

  return (
    <Box sx={containerStyles}>
      {Array.from({ length }, (_, index) => (
        <OutlinedInput
          error={hasError}
          key={index}
          type="tel"
          value={OTP[index]}
          onChange={(e) => handleTextChange(e.target.value, index)}
          inputRef={(ref) =>
            (inputRef.current[index] = ref as HTMLInputElement)
          }
          inputProps={{ maxLength: 1 }}
          sx={inputStyles}
          autoComplete="off"
          inputComponent={"input"}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </Box>
  );
};

export default OTPInput;
