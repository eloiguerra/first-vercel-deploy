import { CustomPropsToStyle, TypographySize, TypographyWeight } from "@/theme";

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: keyof TypographySize;
  weight?: keyof TypographyWeight;
  color?: string;

  align?: TextAlign;
  className?: string;
}

type TextAlign = "left" | "right" | "center" | "justify";

export type CustomTypographyProps = CustomPropsToStyle<
  Pick<TypographyProps, "size" | "weight" | "color" | "align">
>;
