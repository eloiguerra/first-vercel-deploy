import { BreakpointsValues, CustomPropsToStyle } from "@/theme";

export type GridColumnProps = Partial<Record<keyof BreakpointsValues, number>> &
  React.HTMLAttributes<HTMLDivElement>;

export type CustomGridColumnProps = CustomPropsToStyle<
  Pick<GridColumnProps, "xs" | "sm" | "md" | "lg" | "xl">
>;
