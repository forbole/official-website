import styled from "styled-components";
import { media, theme } from "@styles";

const { colors } = theme;

export const ForboleCSS = styled.div`
  color: ${colors.offwhite};
  padding-bottom: 1rem;
  img {
    width: 100px;
  }
  p {
    font-weight: 300;
  }

  a {
    color: white;
  }

  ${media.bigDesktop`
  img {
    width: 125px;
  }
  p {
    font-size: 0.8rem;
  }
  `}
`;
