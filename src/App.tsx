import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppPage from "pages/AppPage";

import "styles/base.css";

const router = createBrowserRouter([{ path: "*", element: <AppPage /> }]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
