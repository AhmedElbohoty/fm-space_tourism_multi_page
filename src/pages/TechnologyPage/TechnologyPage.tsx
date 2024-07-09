import { useState } from "react";

import Scrollbar from "components/Scrollbar/Scrollbar";

import { technologies } from "pages/TechnologyPage/data";
import Steps from "pages/TechnologyPage/Steps/Steps";
import { useWindowSizeContext } from "contexts/windowSizeContext";

// CSS prefix: .techpage-
import "./style.css";

function TechnologyPage() {
  const [index, setIndex] = useState(0);
  const { isLargeScr } = useWindowSizeContext();

  const technology = technologies[index];
  const image = isLargeScr
    ? technology.images.portrait
    : technology.images.landscape;

  return (
    <main className="techpage-main">
      <div className="techpage-cont">
        <Scrollbar className="techpage-scrollbar">
          <section className="techpage-section">
            <h2 className="techpage-h2">
              <span className="techpage-h2-index">03</span>
              <span>SPACE LAUNCH 101</span>
            </h2>

            <div className="techpage-content">
              <div className="techpage-steps-cont">
                <Steps index={index} setIndex={setIndex} />
                <div className="techpage-info">
                  <p className="techpage-role">THE TERMINOLOGY…</p>
                  <h1 className="techpage-name">{technology.name}</h1>
                  <div className="techpage-desc">{technology.description}</div>
                </div>
              </div>

              <div className="techpage-img-cont">
                <div
                  style={{ backgroundImage: `url(${image})` }}
                  className="techpage-img"
                />
              </div>
            </div>
          </section>
        </Scrollbar>
      </div>
    </main>
  );
}

export default TechnologyPage;
