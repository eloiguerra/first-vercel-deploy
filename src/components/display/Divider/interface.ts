import { CustomPropsToStyle } from "@/theme";

export interface DividerProps {
  orientation?: Orientation;
}

export type CustomDividerProps = CustomPropsToStyle<
  Pick<DividerProps, "orientation">
>;

export type Orientation = "horizontal" | "verical";
