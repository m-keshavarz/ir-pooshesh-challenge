import { Controller } from "react-hook-form";
import {
  AgencyTypeEnum,
  TregistraionFormProps,
} from "./registrationForm.types";
import {
  Autocomplete,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import {
  formStyles,
  loadingButtonStyles,
  textInputStyles,
} from "./registrationForm.styles";
import { NoFlip } from "@views/otp/components/getPhoneNumber/getPhoneNumber.styles";
import { LoadingButton } from "@mui/lab";
import useRegistrationForm from "./registrationForm.biz";

const RegistrationForm = (props: TregistraionFormProps) => {
  const { onSubmit } = props;
  const {
    agencyType,
    control,
    handleSubmit,
    insuranceBranchOptions,
    myForm,
    selectedCity,
  } = useRegistrationForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={formStyles}>
      {myForm.map(({ name, label, placeholder, type, render, flip }) => (
        <Controller
          key={name}
          control={control}
          name={name}
          rules={{
            required: "تکمیل کردن این فیلد الزامی است.",
          }}
          render={({ field: { ...rest }, formState: { errors } }) => {
            if (type === "select") {
              return (
                <FormControl error={!!errors[name]}>
                  <InputLabel id={label}>{label}</InputLabel>
                  <Select
                    label={label}
                    labelId={label}
                    id={label}
                    disabled={name === "county" && !selectedCity}
                    {...rest}
                  >
                    {render}
                  </Select>
                  <FormHelperText>{errors[name]?.message}</FormHelperText>
                </FormControl>
              );
            }
            if (flip) {
              return (
                <FormControl error={!!errors[name]}>
                  <TextField
                    key={name}
                    sx={textInputStyles}
                    label={label}
                    placeholder={placeholder}
                    component={NoFlip}
                    autoComplete="off"
                    {...rest}
                  />
                  <FormHelperText>{errors[name]?.message}</FormHelperText>
                </FormControl>
              );
            }
            if (name === "insurance_branch") {
              return (
                <FormControl error={!!errors[name]}>
                  <Autocomplete
                    id={name}
                    options={insuranceBranchOptions || []}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        autoComplete="off"
                        label={label}
                        disabled={!selectedCity}
                        {...rest}
                      />
                    )}
                  />
                  <FormHelperText>{errors[name]?.message}</FormHelperText>
                </FormControl>
              );
            }
            if (type === "radio") {
              return (
                <>
                  <FormControl
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    error={!!errors[name]}
                  >
                    <FormLabel id={name}>{label}</FormLabel>
                    <RadioGroup {...rest} row>
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="حقیقی"
                      />
                      <FormControlLabel
                        value="2"
                        control={<Radio />}
                        label="حقوقی"
                      />
                    </RadioGroup>
                  </FormControl>
                  <FormHelperText sx={{ color: "error.main" }}>
                    {errors[name]?.message}
                  </FormHelperText>
                </>
              );
            }

            return (
              <FormControl error={!!errors[name]}>
                <TextField
                  key={name}
                  sx={textInputStyles}
                  label={label}
                  placeholder={placeholder}
                  multiline={type === "multiLine"}
                  minRows={3}
                  autoComplete="off"
                  {...rest}
                />
                <FormHelperText>{errors[name]?.message}</FormHelperText>
              </FormControl>
            );
          }}
        />
      ))}

      {/* There's no suck field in the pdf file, so I just put a field and won't do anything with it */}
      {+agencyType === AgencyTypeEnum.hoghoughi && (
        <TextField
          label="نام نمایندگی"
          placeholder="نام نمایندگی را انتخاب کنید"
        />
      )}

      <LoadingButton sx={loadingButtonStyles} type="submit">
        ادامه
      </LoadingButton>
    </form>
  );
};

export default RegistrationForm;
