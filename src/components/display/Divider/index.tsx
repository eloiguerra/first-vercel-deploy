import { DividerProps } from "./interface";
import { CustomDivider } from "./styles";

export const Divider = ({
  orientation = "horizontal",
  ...props
}: DividerProps) => {
  return <CustomDivider $orientation={orientation} {...props} />;
};
