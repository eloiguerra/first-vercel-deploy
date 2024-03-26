import { Suspense, useMemo } from "react";
import { IconProps } from "./interface";

import { svgs } from "@/assets/icons";
import { SvgButton, SvgLinkButton } from "./styles";

export function Icon({
  name,
  className /*, size = "md", variant*/,
  container,
  to,
  onClick,
}: IconProps) {
  const SvgIcon = useMemo(() => svgs[name], [name]);

  if (!SvgIcon) return null;

  return (
    <Suspense fallback={null}>
      {container === "button" && (
        <SvgButton onClick={onClick}>
          <SvgIcon className={className} />
        </SvgButton>
      )}
      {container === "link" && (
        <SvgLinkButton to={to || ""} onClick={onClick}>
          <SvgIcon className={className} />
        </SvgLinkButton>
      )}
      {!container && <SvgIcon className={className} />}
    </Suspense>
  );
}
