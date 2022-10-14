import App from "./App";
import Home from "./App/components/Home";
import Play from "./App/components/Play";

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/play" element={<Play />} />
    </Route>
  )
);