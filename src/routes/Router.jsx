// src/routes/Router.jsx
import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../page/Homepage/Home";
import ScanPage from "../page/Scan/ScanPage";
import RecipeDetails from "../page/Recipe/RecipeDetails";
import LoginPage from "../page/Auth/LoginPage";
import SignupPage from "../page/Auth/SignupPage";
import ProtectedRoute from "./ProtectedRoute";
import SavedRecipes from "../page/Recipe/SavedRecipes";
import ScanHistory from "../page/Scan/ScanHistory";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "scan", Component: ScanPage },
      { path: "recipe/:id", Component: RecipeDetails },
      { path: "login", Component: LoginPage },
      { path: "signup", Component: SignupPage },
      { 
        path: "saved-recipes", 
        element: <ProtectedRoute><SavedRecipes /></ProtectedRoute>
      },
      { 
        path: "scan-history", 
        element: <ProtectedRoute><ScanHistory /></ProtectedRoute>
      },
    ],
  },
]);