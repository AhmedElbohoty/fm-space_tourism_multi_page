import { useState } from "react";

import Steps from "pages/CrewPage/Steps/Steps";

import { crews } from "pages/CrewPage/data";

// CSS prefix: .crewpage-
import "./style.css";

function CrewPage() {
  const [index, setIndex] = useState(0);

  const crew = crews[index];

  return (
    <main className="crewpage-main">
      <div className="crewpage-cont">
        <div className="crewpage-content">
          <h2 className="crewpage-h2">
            <span className="crewpage-h2-index">02</span>
            <span>MEET YOUR CREW</span>
          </h2>
          <div className="crewpage-sections">
            {/* Crew info */}
            <section className="crewpage-info">
              <p className="crewpage-role">{crew.role}</p>
              <h1 className="crewpage-name">{crew.name}</h1>
              <div className="crewpage-bio">{crew.bio}</div>

              <Steps index={index} setIndex={setIndex} />
            </section>

            {/* Crew image */}
            <div className="crewpage-img-cont">
              <img
                src={crew.images.png}
                alt={crew.alt}
                className="crewpage-img"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CrewPage;
