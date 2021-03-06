import styled from "styled-components";
import { theme, mixins, media } from "@styles";

const { headerMargin } = theme;

export const BodyCSS = styled.div`
  ${mixins.mobilePadding}

  ${media.bigDesktop`
    padding-left: 0;
    padding-right: 0;
    ${mixins.desktopVerticalPadding}
  `}
`;

export const BodyImageContainerCSS = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1rem;

  img {
    width: 40%;
  }
`;

export const DecentralizedCSS = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  margin-bottom: 0;
`;

export const MooncakeBodyCSS = styled.div`
  margin-bottom: 1rem;
  h3 {
    font-weight: 500;
    margin-bottom: ${headerMargin.small};
  }

  p {
    font-size: 0.9rem;
  }
`;

export const ButtonsCSS = styled.div`
  display: flex;
`;
