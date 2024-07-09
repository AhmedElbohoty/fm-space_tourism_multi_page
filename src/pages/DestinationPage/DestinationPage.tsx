import Scrollbar from "components/Scrollbar/Scrollbar";

import Main from "pages/DestinationPage/Main/Main";

// CSS prefix: .destpage-
import "./style.css";

function DestinationPage() {
  return (
    <div className="destpage">
      <Scrollbar className="destpage-scrollbar">
        <Main />
      </Scrollbar>
    </div>
  );
}

export default DestinationPage;
