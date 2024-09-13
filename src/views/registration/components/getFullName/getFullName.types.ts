import { TregistrationForm } from "@views/registration/registration.types";
import { SubmitHandler } from "react-hook-form";

export type TgetFullNameProps = {
  onSubmit: SubmitHandler<TregistrationForm>;
};
