import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import SkillTree from "./routes/SkillTree";
import Apps from "./routes/Apps";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/apps", element: <Apps /> },
  { path: "/skill-tree", element: <SkillTree /> },
]);
