import { apiV2 } from "@core/utils/axios";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TcheckOtpProps } from "./checkOtp.types";

const useCheckOtp = (props: TcheckOtpProps) => {
  const { phoneNumber, sendCode } = props;
  const [timeLeft, setTimeLeft] = useState<number>(120);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationFn: ({
      code,
      phone_number,
    }: {
      code: string;
      phone_number: string;
    }) =>
      apiV2
        .post("/validate_otp/", {
          code: +code,
          phone_number,
        })
        .then((res) => {
          if (res.data.response === "OK") {
            navigate("/registration");
          }
        })
        .catch(() => {
          setError(true);
        }),
  });

  const handleSubmit = (code: string) => {
    mutate({ code, phone_number: `0${phoneNumber}` });
  };

  const handleRetry = () => {
    if (!timeLeft) {
      sendCode(`0${phoneNumber}`);
      setTimeLeft(120);
    }
  };

  useEffect(() => {
    if (timeLeft === 0) {
      return;
    }
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return { handleRetry, handleSubmit, isPending, error, timeLeft };
};

export default useCheckOtp;
