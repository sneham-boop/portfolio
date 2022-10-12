import App from "./App";
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