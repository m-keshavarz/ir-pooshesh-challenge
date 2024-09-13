import { farsiToEnglish } from "@core/utils/farsiToEnglish";
import { useEffect, useRef, useState } from "react";
import { TinputProps } from "./otpInput.types";

const useOtpInput = (props: TinputProps) => {
  const { onComplete, length = 5 } = props;

  const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));
  const [OTP, setOTP] = useState<string[]>(Array(length).fill(""));

  const handleTextChange = (input: string, index: number) => {
    const convertedInput = farsiToEnglish(input);
    if (!Number.isInteger(+convertedInput)) return;
    const newPin = [...OTP];
    newPin[index] = convertedInput;
    setOTP(newPin);

    if (convertedInput.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    if (newPin.every((digit) => digit !== "")) {
      onComplete(newPin.join(""));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace") {
      if (OTP[index] === "" && index > 0) {
        const newPin = [...OTP];
        newPin[index - 1] = "";
        setOTP(newPin);
        inputRef.current[index - 1]?.focus();
      } else {
        const newPin = [...OTP];
        newPin[index] = "";
        setOTP(newPin);
      }
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current[0].focus();
    }
  }, []);

  return { OTP, inputRef, handleTextChange, handleKeyDown };
};

export default useOtpInput;
