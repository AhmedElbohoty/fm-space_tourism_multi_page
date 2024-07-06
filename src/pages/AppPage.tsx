import AppHeader from "components/AppHeader/AppHeader";
import HomePage from "pages/HomePage/HomePage";
import Providers from "pages/Providers/Providers";

// CSS prefix: .app-page-
import "./style.css";

function AppPage() {
  return (
    <Providers>
      <div className="app-page">
        <AppHeader />
        <HomePage />
      </div>
    </Providers>
  );
}

export default AppPage;
