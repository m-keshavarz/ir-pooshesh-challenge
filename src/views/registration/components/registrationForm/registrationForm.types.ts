import { TregistrationForm } from "@views/registration/registration.types";
import { ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";

export type TregistraionFormProps = {
  onSubmit: SubmitHandler<TregistrationForm>;
};

export type TmyForm = {
  name: keyof TregistrationForm;
  label: string;
  type: "input" | "select" | "multiLine" | "radio";
  placeholder?: string;
  render?: ReactNode;
  flip?: boolean;
};

export enum AgencyTypeEnum {
  haghighi = 1,
  hoghoughi,
}
