import styled from "styled-components";
import { CoverCSS } from "@styles/components";
import { theme, media, mixins } from "@styles";
const { headerMargin } = theme;

export const StakingCoverCSS = styled(CoverCSS)`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.68),
      rgba(0, 0, 0, 0.68)
    ),
    url("/static/images/assets/staking.jpg");
  background-position: 55% bottom;

  .content-container {
    h2 {
      color: white;
      margin: 3rem 0 ${headerMargin.small};
      font-weight: 400;
    }

    p {
      color: white;
      margin-bottom: 2rem;
    }

    .social-media-container {
      margin-bottom: 1rem;
      a {
        margin-right: 0.875rem;

        svg {
          path {
            fill: white;
          }
        }
      }
    }
  }

  ${media.tablet`
    background-image: url("/static/images/assets/staking.jpg");
  `}

  ${media.bigDesktop`
    height: 42vh;
    background-position: 55% center;
    padding: 0;
    justify-content: center;

    .content-container {
      ${mixins.desktopMaxWidth}
      width: 100%;
      padding: 1rem;
      h2 {
        font-size: 3.75rem;
      }
      p {
        font-size: 1.5rem;
      }
      svg {
        height: 30px;
        width: 30px;
      }
    }
  `}
`;
