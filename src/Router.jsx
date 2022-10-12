import App from "./App";
import Portfolio from "./App/components/Portfolio";
import Play from "./App/components/Play";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Portfolio />} />
      <Route path="/play" element={<Play />} />
    </Route>
  )
);