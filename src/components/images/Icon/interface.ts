import { HTMLAttributes } from "react";

import { svgs } from "@/assets/icons";

export type IconName = keyof typeof svgs;

export type IconSize = "sm" | "md" | "lg" | "xl" | "xxl" | "3xl";

export type IconVariant = "success" | "error" | "default" | "inherit";

export type IconContainer = "link" | "button";

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  name: IconName;
  className?: string;
  size?: IconSize;
  variant?: IconVariant;
  type?: boolean;
  container?: IconContainer;
  to?: string;
  onClick?: () => void;
}
