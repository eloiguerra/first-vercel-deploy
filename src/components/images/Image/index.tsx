import { ImageProps } from "./interface";
import { CustomImage } from "./styles";

export function Image({
  fullHeight,
  fullWidth,
  maxHeight,
  maxWidth,
  ...props
}: ImageProps) {
  return (
    <CustomImage
      $fullHeight={fullHeight}
      $fullWidth={fullWidth}
      $maxHeight={maxHeight}
      $maxWidth={maxWidth}
      {...props}
    />
  );
}
