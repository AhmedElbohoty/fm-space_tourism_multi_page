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
    <nav className="apphead-nav" aria-label="primary">
      <LinkWrapper
        to="/"
        index="00"
        label="HOME"
        isActive={pathname === "/"}
        ariaLabel="Link to home page"
      />
      <LinkWrapper
        to="/destination"
        index="01"
        label="DESTINATION"
        isActive={pathname === "/destination"}
        ariaLabel="Link to destination page"
      />
      <LinkWrapper
        to="/crew"
        index="02"
        label="CREW"
        isActive={pathname === "/crew"}
        ariaLabel="Link to crew page"
      />
      <LinkWrapper
        to="/technology"
        index="03"
        label="TECHNOLOGY"
        isActive={pathname === "/technology"}
        ariaLabel="Link to technology page"
      />
    </nav>
  );
}

interface LinkWrapperProp {
  to: To;
  index: string;
  label: string;
  isActive: boolean;
  ariaLabel: string;
}

function LinkWrapper({
  to,
  index,
  label,
  isActive,
  ariaLabel,
}: LinkWrapperProp) {
  return (
    <Link
      to={to}
      className="apphead-nav-link"
      data-active={isActive}
      aria-label={ariaLabel}
    >
      <span className="apphead-navlink-index">{index}</span>
      <span className="apphead-navlink-label">{label}</span>
    </Link>
  );
}

export default Nav;
