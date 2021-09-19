import styled from "styled-components";
import { headerBGColor, headerTextColor } from "../../themes";

export const Header = styled.header`
  grid-area: header;
  padding: 1em;
  background-color: ${headerBGColor};
  color: ${headerTextColor};
  text-align: center;
  font-weight: bold;
`;
