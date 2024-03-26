import { CustomPropsToStyle } from "@/theme";
import { ImgHTMLAttributes } from "react";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fullWidth?: boolean;
  fullHeight?: boolean;
  maxHeight?: string;
  maxWidth?: string;
};

export type CustomImageProps = CustomPropsToStyle<
  Pick<ImageProps, "fullWidth" | "fullHeight" | "maxHeight" | "maxWidth">
>;
