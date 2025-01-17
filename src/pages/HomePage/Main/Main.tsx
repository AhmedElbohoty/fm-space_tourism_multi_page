import { Link } from "react-router-dom";

// CSS prefix: .homemain-
import "./style.css";

function Main() {
  return (
    <main className="homemain-main">
      <div className="homemain-const">
        <div className="homemain-texts">
          <p className="homemain-texts-want">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="homemain-texts-h1">SPACE</h1>
          <p className="homemain-texts-desc">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link
          to="/destination"
          className="homemain-explore-link"
          aria-label="Explore destinations"
        >
          Explore
        </Link>
      </div>
    </main>
  );
}

export default Main;
