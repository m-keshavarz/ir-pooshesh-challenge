import { UseMutateFunction } from "@tanstack/react-query";
import { StepsEnum } from "@views/otp/otp.types";

export type TcheckOtpProps = {
  phoneNumber: string;
  setStep: React.Dispatch<React.SetStateAction<StepsEnum>>;
  sendCode: UseMutateFunction<void, Error, string, unknown>;
  createCodePending: boolean
};
