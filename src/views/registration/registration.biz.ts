import { useState } from "react";
import { RegistrationSteps, TregistrationForm } from "./registration.types";
import { useLocation, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiV2 } from "@core/utils/axios";
import { farsiToEnglish } from "@core/utils/farsiToEnglish";

const useRegistration = () => {
  const [step, setStep] = useState<RegistrationSteps>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const { state } = useLocation();
  const navigate = useNavigate();

  const methods = useForm<TregistrationForm>({
    defaultValues: {
      address: "",
      agency_type: "",
      agent_code: "",
      city_code: "",
      county: "",
      first_name: "",
      insurance_branch: "",
      last_name: "",
      phone: "",
      phone_number: `0${state}`,
      province: "",
    },
  });

  const { mutate: sendLastPayload } = useMutation({
    // POST to /check_agency_code/ ????
    mutationFn: ({ payload }: { payload: TregistrationForm }) =>
      apiV2
        .post("/check_agency_code/", {
          ...payload,
        })
        .then((res) => {
          if (res.data.response === "OK") {
            navigate("/report");
          } else {
            setOpen(true);
            setErrorMsg(res.data.message || "موفقیت آمیز نبود");
          }
        }),
  });

  const { mutate: checkAgentCode } = useMutation({
    mutationFn: ({ payload }: { payload: TregistrationForm }) =>
      apiV2
        .post("/check_agency_code/", {
          agent_code: payload.agent_code,
        })
        .then((res) => {
          if (!res.data.error_details) {
            sendLastPayload({ payload });
          } else {
            setOpen(true);
            // I don't know what I'm getting
            setErrorMsg(res.data.message || "موفقیت آمیز نبود");
          }
        }),
  });

  const onSubmit: SubmitHandler<TregistrationForm> = (payload) => {
    payload.phone_number = `0${state}`;
    payload.agent_code = farsiToEnglish(payload.agent_code);
    payload.city_code = farsiToEnglish(payload.city_code);
    payload.insurance_branch = farsiToEnglish(payload.insurance_branch);
    payload.phone = farsiToEnglish(payload.phone);
    if (step === RegistrationSteps.getFullName) {
      setStep(RegistrationSteps.registrationForm);
    }
    if (step === RegistrationSteps.registrationForm) {
      checkAgentCode({ payload });
    }
  };

  return { onSubmit, methods, errorMsg, open, setOpen, step };
};

export default useRegistration;
