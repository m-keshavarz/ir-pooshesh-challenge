import { RegistrationSteps } from "./registration.types";
import GetFullName from "./components/getFullName";
import RegistrationForm from "./components/registrationForm/registrationForm";
import { FormProvider } from "react-hook-form";
import MySnackBar from "@components/snackBar/snackBar";
import useRegistration from "./registration.biz";

const Registration = () => {
  const { errorMsg, methods, onSubmit, open, setOpen, step } =
    useRegistration();

  return (
    <FormProvider {...methods}>
      {step === RegistrationSteps.getFullName ? (
        <GetFullName onSubmit={onSubmit} />
      ) : (
        <RegistrationForm onSubmit={onSubmit} />
      )}
      <MySnackBar
        open={open}
        handleClose={() => setOpen(false)}
        message={errorMsg}
      />
    </FormProvider>
  );
};

export default Registration;
