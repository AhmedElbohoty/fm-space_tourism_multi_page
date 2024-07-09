import { MouseEvent, useCallback } from "react";
import { Link, To } from "react-router-dom";

import CloseIcon from "assets/shared/icon-close.svg";

import { useLocationPathname } from "services/hooks";

// CSS prefix: .navmenu-
import "./style.css";

interface NavMenuProp {
  close(): void;
}

function NavMenu({ close }: NavMenuProp) {
  const pathname = useLocationPathname();
  const dialogRef = useCallback((node: HTMLDialogElement) => {
    if (!node) return;

    node.showModal();
  }, []);

  function onClickDialog(e: MouseEvent<HTMLDialogElement>) {
    if (e.target !== e.currentTarget) return;
    close();
  }

  return (
    <dialog ref={dialogRef} className="navmenu-dialog" onClick={onClickDialog}>
      <nav className="navmenu-nav" aria-label="primary">
        <div className="navmenu-header">
          <div className="navmenu-header-close" onClick={close}>
            <CloseIcon />
          </div>
        </div>

        <div className="navmenu-links">
          <MenuLinkWrapper
            to="/"
            index="00"
            label="HOME"
            isActive={pathname === "/"}
            ariaLabel="Link to home page"
          />
          <MenuLinkWrapper
            to="/destination"
            index="01"
            label="DESTINATION"
            isActive={pathname === "/destination"}
            ariaLabel="Link to destination page"
          />
          <MenuLinkWrapper
            to="/crew"
            index="02"
            label="CREW"
            isActive={pathname === "/crew"}
            ariaLabel="Link to crew page"
          />
          <MenuLinkWrapper
            to="/technology"
            index="03"
            label="TECHNOLOGY"
            isActive={pathname === "/technology"}
            ariaLabel="Link to technology page"
          />
        </div>
      </nav>
    </dialog>
  );
}

interface MenuLinkWrapperProp {
  to: To;
  index: string;
  label: string;
  isActive: boolean;
  ariaLabel: string;
}

function MenuLinkWrapper({
  to,
  index,
  label,
  isActive,
  ariaLabel,
}: MenuLinkWrapperProp) {
  return (
    <Link
      to={to}
      className="navmenu-link"
      data-active={isActive}
      aria-label={ariaLabel}
    >
      <span className="navmenu-link-index">{index}</span>
      <span className="navmenu-link-label">{label}</span>
    </Link>
  );
}

export default NavMenu;
