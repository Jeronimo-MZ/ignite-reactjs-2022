import { Scroll, Timer } from "phosphor-react";
import { Link, NavLink } from "react-router-dom";

import logo from "@/assets/logo.svg";

import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
