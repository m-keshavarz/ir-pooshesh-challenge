export type TinputProps = {
  length?: number;
  onComplete: (pin: string) => void;
  hasError: boolean
};
