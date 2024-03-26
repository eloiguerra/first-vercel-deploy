import styled from "styled-components";

import { Input } from "@/components/inputs/Input";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme: { spacing } }) => spacing(1.375)};
`;

export const CustomQuantityInput = styled(Input)`
  height: 26px;
  width: 62px;
  text-align: center;
`;
