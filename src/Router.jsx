import App from "./App";
import Home from "./App/components/Home";
import Play from "./App/components/Play";

import {
  createRoutesFromElements,
  createBrowserRouter,
  createHashRouter,
  Route,
} from "react-router-dom";

export const Router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/play" element={<Play />} />
    </Route>
  )
);
