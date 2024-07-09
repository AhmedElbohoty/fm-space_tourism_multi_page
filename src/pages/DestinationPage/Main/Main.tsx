import { Navigate } from "react-router-dom";

import { destinations } from "pages/DestinationPage/data";
import Nav from "pages/DestinationPage/Nav/Nav";

import { Destinations } from "pages/DestinationPage/types";
import { useLocationHash } from "services/hooks";

// CSS prefix: .destmain-
import "./style.css";

function isKeyOfDestinations(key: string): key is keyof Destinations {
  return key in destinations;
}

function Main() {
  const hash = useLocationHash();

  const key: string = hash.substring(1);
  if (!key || !isKeyOfDestinations(key)) {
    return <Navigate to="#moon" />;
  }

  const destination = destinations[key];

  const { name, description, images, alt } = destination;
  const image = images.png;

  return (
    <div className="destmain-cont">
      <main className="destmain">
        <h2 className="destmain-h1">
          <span className="destmain-h1-index">01 </span>
          <span>PICK YOUR DESTINATION</span>
        </h2>

        <div className="destmain-content">
          <div className="destmain-img-cont">
            <img src={image} alt={alt} className="destmain-img" />
          </div>

          <section>
            <div className="destmain-info">
              <Nav />

              <div>
                <h1 className="destmain-name">{name}</h1>
                <p className="destmain-desc">{description}</p>
              </div>

              <span className="destmain-line"></span>

              <div className="destmain-details">
                <div className="destmain-detail">
                  <p className="destmain-detail-label">AVG. DISTANCE</p>
                  <p className="destmain-detail-value">384,400 km</p>
                </div>

                <div className="destmain-detail">
                  <p className="destmain-detail-label">Est. travel time</p>
                  <p className="destmain-detail-value">3 days</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Main;
