import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { Forbole as ForboleLogo } from "@icons";
import { INavBar } from "../../interfaces";
import { MobileNavBarCSS } from "./styles";

const Navbar = (props: INavBar) => {
  const { isOpen, color, displayBackground } = props;

  return (
    <MobileNavBarCSS
      isOpen={isOpen}
      color={color}
      displayBackground={displayBackground}
      className={classNames("nav-bar")}
    >
      <Link href="/">
        <a>
          <ForboleLogo />
        </a>
      </Link>
    </MobileNavBarCSS>
  );
};

export default Navbar;
