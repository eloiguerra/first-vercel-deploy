import { Link } from "react-router-dom";
import styled from "styled-components";

export const SvgButton = styled.button`
  height: fit-content;
  width: fit-content;
  background: transparent;
  cursor: pointer;
`;

export const SvgLinkButton = styled(Link)`
  height: fit-content;
  width: fit-content;
  text-decoration: none;
  cursor: pointer;
`;
