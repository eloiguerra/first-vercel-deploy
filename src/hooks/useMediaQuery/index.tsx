import { BreakpointsValues, theme } from "@/theme";
import { useEffect, useState } from "react";

export const useMediaQuery = (breakpointValue: keyof BreakpointsValues) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const minWidth = `(max-width: ${theme.breakpoints.values[breakpointValue]}px)`;
    const mediaQuery = window.matchMedia(minWidth);
    setMatches(mediaQuery.matches);

    const handleChange = () => {
      setMatches(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [breakpointValue]);

  return matches;
};
