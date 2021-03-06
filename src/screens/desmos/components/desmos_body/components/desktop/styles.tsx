import styled from "styled-components";
import { media, theme } from "@styles";
import {
  CONTAINER_HEIGHT,
  CONTAINER_WIDTH,
  CONTAINER_MIN_HEIGHT,
} from "../../../../config";

const { colors } = theme;

export const DesktopCSS = styled.div`
  display: none;

  ${media.bigDesktop`
    display: block;
    background-image: linear-gradient(
        0deg,
        rgba(123, 135, 185, 0.33),
        rgba(123, 135, 185, 0.33)
      ),
      url("/static/images/assets/desmos-hero.jpg");
    background-repeat: no-repeat;
    background-position: 40% bottom;
    background-size: cover;
    display: flex;
    flex-direction: row-reverse;
  `}
`;

export const DesmosBodyCSS = styled.div`
  width: ${CONTAINER_WIDTH};
  background: white;
  height: ${CONTAINER_HEIGHT};
  min-height: ${CONTAINER_MIN_HEIGHT};
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: black;
  }

  p {
    color: black;
  }

  .ui.button {
    background: ${colors.orange};
    color: white;
    font-weight: 400;
    transition: 0.2s;

    &:hover {
      background: black;
    }
  }
`;

export const DesmosLogoCSS = styled.img`
  width: 60px;
  position: absolute;
  left: -60px;
  top: 0;
`;

export const DesmosBodyContainerCSS = styled.div`
  width: 70%;
  padding-left: 3.5rem;
  position: relative;
  max-width: 700px;
`;
