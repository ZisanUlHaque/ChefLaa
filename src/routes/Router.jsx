import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../page/Homepage/Home";
import ScanPage from "../page/Scan/ScanPage";
import RecipeDetails from "../page/Recipe/RecipeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "/scan", Component: ScanPage },
      { path: "/recipe/:id", Component: RecipeDetails },
    ],
  },
]);
