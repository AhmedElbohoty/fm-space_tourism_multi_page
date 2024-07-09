import { Link, To } from "react-router-dom";

import MenuIcon from "assets/shared/icon-hamburger.svg";
import NavMenu from "components/AppHeader/NavMenu/NavMenu";

import { useWindowSizeContext } from "contexts/windowSizeContext";
import { useLocationPathname } from "services/hooks";

import { useNavMenuLogic } from "components/AppHeader/hooks";

// CSS prefix: .apphead-nav-
import "./style.css";

function Nav() {
  const pathname = useLocationPathname();

  const { isSmallScr } = useWindowSizeContext();

  const { isOpened, open, close } = useNavMenuLogic();

  if (isSmallScr) {
    return (
      <div className="apphead-nav">
        <div className="apphead-nav-menuicon" onClick={open}>
          <MenuIcon />
        </div>
        {isOpened && <NavMenu close={close} />}
      </div>
    );
  }

  return (
    <nav className="apphead-nav" role="navigation" aria-label="primary">
      <LinkWrapper to="/" index="00" label="HOME" isActive={pathname === "/"} />
      <LinkWrapper
        to="/destination"
        index="01"
        label="DESTINATION"
        isActive={pathname === "/destination"}
      />
      <LinkWrapper
        to="/crew"
        index="02"
        label="CREW"
        isActive={pathname === "/crew"}
      />
      <LinkWrapper
        to="/technology"
        index="03"
        label="TECHNOLOGY"
        isActive={pathname === "/technology"}
      />
    </nav>
  );
}

interface LinkWrapperProp {
  to: To;
  index: string;
  label: string;
  isActive: boolean;
}

function LinkWrapper({ to, index, label, isActive }: LinkWrapperProp) {
  return (
    <Link to={to} className="apphead-nav-link" data-active={isActive}>
      <span className="apphead-navlink-index">{index}</span>
      <span className="apphead-navlink-label">{label}</span>
    </Link>
  );
}

export default Nav;
