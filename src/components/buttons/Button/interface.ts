import { CustomPropsToStyle } from "@/theme";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export type CustomButtonProps = CustomPropsToStyle<
  Pick<ButtonProps, "variant" | "fullWidth">
>;

export type ButtonVariant = "primary" | "success";
