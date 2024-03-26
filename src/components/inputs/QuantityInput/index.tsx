import { Icon } from "@/components/images/Icon";
import { Container, CustomQuantityInput } from "./styles";
import { InputQuantityProps } from "./interface";

export const QuantityInput = ({
  onDecrease,
  onIncrease,
  onChange,
  ...props
}: InputQuantityProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (isNaN(Number(value)) || !onChange) return;

    onChange(event);
  };

  return (
    <Container>
      <Icon container="button" name="Minus" onClick={onDecrease} />
      <CustomQuantityInput onChange={handleChange} {...props} />
      <Icon container="button" name="Plus" onClick={onIncrease} />
    </Container>
  );
};
