import styled from "styled-components";
import { media, mixins } from "@styles";

export const CosmosContentCSS = styled.div`
  padding: 1.5rem 1rem;
  p {
    font-size: 1rem;
    margin-bottom: 2em;
  }
  ${mixins.mobileLastContainerPadding}
  ${media.tablet`
  padding: 3rem;
p {
    font-size: 2rem;
}`}
  ${media.bigDesktop`
  ${mixins.desktopMaxWidth}
  width: 100%;
  height: 100%;
  padding: 3rem 0;
  ${mixins.desktopBottomPadding}
p {
    justify-content: flex-start;
    width: 100%;
    font-weight: 100;
    font-size: 1rem;
  }`}
`;
