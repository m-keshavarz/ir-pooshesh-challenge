import {
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import {
  formControlStyles,
  NoFlip,
  phoneNumberStyles,
  submitButtonStyles,
  subTextStyles,
  titleTextStyles,
} from "./getPhoneNumber.styles";
import { farsiToEnglish } from "@core/utils/farsiToEnglish";
import { LoadingButton } from "@mui/lab";
import useGetPhoneNumber from "./getPhoneNumber.biz";
import { TgetPhoneNumberProps } from "./getPhoneNumber.types";

const GetPhoneNumber = (props: TgetPhoneNumberProps) => {

  const { errors, handleSubmit, isPending, onSubmit, register, setValue } =
    useGetPhoneNumber(props);

  return (
    <>
      <Typography sx={titleTextStyles}>
        شماره موبایل خود را وارد نمایید.
      </Typography>
      <Typography sx={subTextStyles}>
        کد تأیید برای شما ارسال خواهد شد.
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={formControlStyles} error={!!errors.phoneNumber}>
          <TextField
            placeholder="9123456789"
            label="تلفن همراه"
            sx={phoneNumberStyles}
            component={NoFlip}
            type="tel"
            autoComplete="off"
            {...register("phoneNumber", {
              required: "تکمیل کردن این فیلد الزامی است.",
              pattern: {
                value: /^9[0-9]{9}$/g,
                message: "شماره تماس بدون صفر اول وارد شود.",
              },
            })}
            onChange={(e) =>
              setValue("phoneNumber", farsiToEnglish(e.target.value))
            }
          />
          <FormHelperText>{errors.phoneNumber?.message}</FormHelperText>
        </FormControl>
        <LoadingButton
          type="submit"
          variant="contained"
          loading={isPending}
          sx={submitButtonStyles}
        >
          ادامه
        </LoadingButton>
      </form>
    </>
  );
};

export default GetPhoneNumber;
