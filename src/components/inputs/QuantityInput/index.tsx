import { Icon } from "@/components/images/Icon";
import { Container, CustomQuantityInput } from "./styles";
import { InputQuantityProps } from "./interface";

export const QuantityInput = ({
  onDecrease,
  onIncrease,
  ...props
}: InputQuantityProps) => {
  return (
    <Container>
      <Icon container="button" name="Minus" onClick={onDecrease} />
      <CustomQuantityInput {...props} />
      <Icon container="button" name="Plus" onClick={onIncrease} />
    </Container>
  );
};
