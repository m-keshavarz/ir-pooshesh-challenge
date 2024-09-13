import { SubmitHandler, useForm } from "react-hook-form";
import { TgetPhoneNumberProps, TphoneNumber } from "./getPhoneNumber.types";
import { useMutation } from "@tanstack/react-query";
import { apiV2 } from "@core/utils/axios";
import { StepsEnum } from "@views/otp/otp.types";

const useGetPhoneNumber = (props: TgetPhoneNumberProps) => {
  const { setStep, setPhoneNumber } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TphoneNumber>();

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

  const onSubmit: SubmitHandler<TphoneNumber> = (data) => {
    setPhoneNumber(data.phoneNumber);
    mutate(`0${data.phoneNumber}`);
  };

  return { register, handleSubmit, setValue, isPending, onSubmit, errors };
};

export default useGetPhoneNumber;
