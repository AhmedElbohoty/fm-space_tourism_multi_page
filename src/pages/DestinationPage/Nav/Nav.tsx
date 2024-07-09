import { Link, To } from "react-router-dom";

import { useLocationHash } from "services/hooks";

// CSS prefix: .destnav-
import "./style.css";

function Nav() {
  return (
    <nav className="destnav" aria-label="secondary">
      <LinkWrapper to="#moon" label="MOON" ariaLabel="Explore moon page" />
      <LinkWrapper to="#mars" label="MARS" ariaLabel="Explore mars page" />
      <LinkWrapper
        to="#europa"
        label="EUROPA"
        ariaLabel="Explore europa page"
      />
      <LinkWrapper to="#titan" label="TITAN" ariaLabel="Explore titan page" />
    </nav>
  );
}

interface LinkWrapperProp {
  to: To;
  label: string;
  ariaLabel: string;
}

function LinkWrapper({ to, label, ariaLabel }: LinkWrapperProp) {
  const hash = useLocationHash();

  return (
    <Link
      to={to}
      className="destnav-link"
      data-active={hash === to}
      aria-label={ariaLabel}
    >
      {label}
    </Link>
  );
}

export default Nav;
