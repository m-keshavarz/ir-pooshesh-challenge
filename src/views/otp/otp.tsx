import { useState } from "react";
import GetPhoneNumber from "./components/getPhoneNumber";
import CheckOtp from "./components/checkOtp";
import { StepsEnum } from "./otp.types";
import { apiV2 } from "@core/utils/axios";
import { useMutation } from "@tanstack/react-query";

const Otp = () => {
  const [step, setStep] = useState<StepsEnum>(StepsEnum.getPhoneNumber);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const { isPending, mutate } = useMutation({
    mutationFn: (phone_number: string) =>
      apiV2
        .post("/create_otp/", {
          phone_number,
        })
        .then((res) => {
          if (res.data.response === "OK") {
            setStep(StepsEnum.checkOtp);
          }
        }),
  });

  if (step === StepsEnum.getPhoneNumber) {
    return (
      <GetPhoneNumber
        sendCode={mutate}
        createCodePending={isPending}
        setPhoneNumber={setPhoneNumber}
        setStep={setStep}
      />
    );
  } else {
    return (
      <CheckOtp
        sendCode={mutate}
        createCodePending={isPending}
        setStep={setStep}
        phoneNumber={phoneNumber}
      />
    );
  }
};

export default Otp;
