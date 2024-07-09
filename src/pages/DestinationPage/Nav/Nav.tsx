import { Link, To } from "react-router-dom";

import { useLocationHash } from "services/hooks";

// CSS prefix: .destnav-
import "./style.css";

function Nav() {
  return (
    <nav className="destnav">
      <LinkWrapper to="#moon" label="MOON" />
      <LinkWrapper to="#mars" label="MARS" />
      <LinkWrapper to="#europa" label="EUROPA" />
      <LinkWrapper to="#titan" label="TITAN" />
    </nav>
  );
}

interface LinkWrapperProp {
  to: To;
  label: string;
}

function LinkWrapper({ to, label }: LinkWrapperProp) {
  const hash = useLocationHash();

  return (
    <Link to={to} className="destnav-link" data-active={hash === to}>
      {label}
    </Link>
  );
}

export default Nav;
