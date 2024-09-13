import { Button, FormControl, FormHelperText, TextField } from "@mui/material";
import { formStyles, submitButtonStyles } from "./getFullName.styles";
import { useFormContext } from "react-hook-form";
import { TgetFullNameProps } from "./getFullName.types";
import { TregistrationForm } from "@views/registration/registration.types";

const GetFullName = (props: TgetFullNameProps) => {
  const { onSubmit } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<TregistrationForm>();

  return (
    <form style={formStyles} onSubmit={handleSubmit(onSubmit)}>
      <FormControl error={!!errors.first_name}>
        <TextField
          label="نام"
          placeholder="نام خود را وارد کنید"
          {...register("first_name", {
            required: "کامل کردن این فیلد اجباری است.",
          })}
          autoComplete="off"
        />
        <FormHelperText>{errors.first_name?.message}</FormHelperText>
      </FormControl>
      <FormControl error={!!errors.last_name}>
        <TextField
          label="نام خانوادگی"
          placeholder="نام خانوادگی خود را وارد کنید"
          {...register("last_name", {
            required: "کامل کردن این فیلد اجباری است.",
          })}
          autoComplete="off"
        />
        <FormHelperText>{errors.last_name?.message}</FormHelperText>
      </FormControl>
      <Button type="submit" sx={submitButtonStyles}>
        ادامه
      </Button>
    </form>
  );
};

export default GetFullName;
