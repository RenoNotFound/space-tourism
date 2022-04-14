import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

import MainLayout from "./components/main/MainLayout";
import HomeView from "./components/home/HomeView";
import DestinationView from "./components/destination/DestinationView";
import CrewView from "./components/crew/CrewView";
import TechnologyView from "./components/technology/TechnologyView";

const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "*", element: <Navigate to="/404" /> },
      { path: "/", element: <HomeView /> },
      { path: "/destination", element: <DestinationView /> },
      { path: "/crew", element: <CrewView /> },
      { path: "/technology", element: <TechnologyView /> },
      // { path: "404", element: <PageNotFoundView /> },
    ],
  };

  const routing = useRoutes([mainRoutes]);

  return <>{routing}</>;
};

export default App;
