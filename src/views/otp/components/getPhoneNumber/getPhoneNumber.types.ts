import { UseMutateFunction } from "@tanstack/react-query";
import { StepsEnum } from "@views/otp/otp.types";

export type TphoneNumber = {
  phoneNumber: string;
};

export type TgetPhoneNumberProps = {
  setStep: React.Dispatch<React.SetStateAction<StepsEnum>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  sendCode: UseMutateFunction<void, Error, string, unknown>;
  createCodePending: boolean
};
