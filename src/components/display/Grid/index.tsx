import { GridColumnProps } from "./interface";
import { CustomColumn, CustomContainer, CustomRow } from "./styles";

const Column = ({
  xs,
  sm,
  md,
  lg,
  xl,
  children,
  ...props
}: GridColumnProps) => {
  return (
    <CustomColumn $xs={xs} $sm={sm} $md={md} $lg={lg} $xl={xl} {...props}>
      {children}
    </CustomColumn>
  );
};

export const Grid = {
  Container: CustomContainer,
  Row: CustomRow,
  Column,
};
