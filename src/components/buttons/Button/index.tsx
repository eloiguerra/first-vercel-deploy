import { ButtonProps } from "./interface";
import { CustomButton } from "./styles";

export const Button = ({
  children,
  variant,
  fullWidth,
  ...props
}: ButtonProps) => {
  return (
    <CustomButton $variant={variant} $fullWidth={fullWidth} {...props}>
      {children}
    </CustomButton>
  );
};
