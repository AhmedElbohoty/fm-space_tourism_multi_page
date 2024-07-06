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
      <nav className="navmenu-nav">
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
          />
          <MenuLinkWrapper
            to="/destination"
            index="01"
            label="DESTINATION"
            isActive={pathname === "/destination"}
          />
          <MenuLinkWrapper
            to="/crew"
            index="02"
            label="CREW"
            isActive={pathname === "/crew"}
          />
          <MenuLinkWrapper
            to="/technology"
            index="03"
            label="TECHNOLOGY"
            isActive={pathname === "/technology"}
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
}

function MenuLinkWrapper({ to, index, label, isActive }: MenuLinkWrapperProp) {
  return (
    <Link to={to} className="navmenu-link" data-active={isActive}>
      <span className="navmenu-link-index">{index}</span>
      <span className="navmenu-link-label">{label}</span>
    </Link>
  );
}

export default NavMenu;
