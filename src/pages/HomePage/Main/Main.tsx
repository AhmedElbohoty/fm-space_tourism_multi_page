import { Link } from "react-router-dom";

import Scrollbar from "components/Scrollbar/Scrollbar";

// CSS prefix: .homemain-
import "./style.css";

function Main() {
  return (
    <main className="homemain-main">
      <Scrollbar className="homemain-scrollbar">
        <div className="homemain-const">
          <div className="homemain-texts">
            <p className="heading-xs">SO, YOU WANT TO TRAVEL TO</p>
            <h1 className="heading-xl">SPACE</h1>
            <p className="body-text">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <Link to="/destination" className="homemain-explore-link">
            <button className="homemain-explore-btn heading-s">Explore</button>
          </Link>
        </div>
      </Scrollbar>
    </main>
  );
}

export default Main;
