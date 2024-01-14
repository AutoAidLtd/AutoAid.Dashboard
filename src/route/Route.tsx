import { RouteObject, createBrowserRouter } from "react-router-dom";
import LandingLayout from "../base/components/layout/LandingLayout";
import appRoutes from "@/base/app/route";
import MainLayout from "@/base/mantis/layout/MainLayout";
import LoginPage from "@/base/mantis/auth/LoginPage";
import GaragePage from "@/pages/garage/GaragePage";

const routes: RouteObject[] = [
	{
		path: "/login",
		element: <LoginPage/>
	},
  {
    path: "/",
    element: <MainLayout />,
    children: [
      appRoutes,
			{
				path: "/garage",
				element: <GaragePage/>
			},
      {
        path: "/contact",
        element: <h1>Click below to contact</h1>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
