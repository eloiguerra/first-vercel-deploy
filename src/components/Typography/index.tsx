import { TypographyProps } from "./interface";
import { CustomTypography } from "./styles";

export const Typography = ({
  children,
  size,
  weight,
  color,
  align,
  ...props
}: TypographyProps) => {
  return (
    <CustomTypography
      $size={size}
      $weight={weight}
      $color={color}
      $align={align}
      {...props}
    >
      {children}
    </CustomTypography>
  );
};
