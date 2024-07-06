import { Link } from "react-router-dom";

import Nav from "components/AppHeader/Nav/Nav";

import Logo from "assets/shared/logo.svg";

// CSS prefix: .appheader-
import "./style.css";

function AppHeader() {
  return (
    <header className="appheader">
      <div className="appheader-logo-cont">
        <Link className="appheader-logo" to="/">
          <Logo />
        </Link>
        <span className="appheader-logo-line" />
      </div>

      <Nav />
    </header>
  );
}

export default AppHeader;
