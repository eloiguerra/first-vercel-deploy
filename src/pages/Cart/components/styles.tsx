import styled from "styled-components";

import { Divider } from "@/components/display/Divider";

export const CardFooterDivider = styled(Divider)`
  margin: ${({ theme: { spacing } }) => `${spacing(3)} 0`};
`;
