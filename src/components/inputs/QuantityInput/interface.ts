import { InputProps } from "@/components/inputs/Input/interface";

export interface InputQuantityProps extends InputProps {
  onIncrease: () => void;
  onDecrease: () => void;
}
