import { Route, Routes } from "react-router-dom";

import AppHeader from "components/AppHeader/AppHeader";
import HomePage from "pages/HomePage/HomePage";
import DestinationPage from "pages/DestinationPage/DestinationPage";
import CrewPage from "pages/CrewPage/CrewPage";
import Providers from "pages/Providers/Providers";

// CSS prefix: .app-page-
import "./style.css";

function AppPage() {
  return (
    <Providers>
      <div className="app-page">
        <AppHeader />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} />

          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Providers>
  );
}

export default AppPage;
