import React from "react";
import { screenSize } from "@styles";
import getWindowSize from "@utils/getScreenSize";
import ResponsiveExampleMobile from "./components/mobile";
import ResponsiveExampleDesktop from "./components/desktop";

const ResponseExample = () => {
  const { width } = getWindowSize();
  if (!width || width <= screenSize.tablet) {
    return <ResponsiveExampleMobile />;
  }
  return <ResponsiveExampleDesktop />;
};

export default ResponseExample;