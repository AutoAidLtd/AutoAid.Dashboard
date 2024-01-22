import { RouteObject, createBrowserRouter } from "react-router-dom";
import LandingLayout from "../base/components/layout/LandingLayout";
import appRoutes from "@/base/app/route";
import MainLayout from "@/base/mantis/layout/MainLayout";
import LoginPage from "@/base/mantis/auth/LoginPage";
import GaragePage from "@/modules/garage/pages/GaragePage";
import CustomerPage from "@/modules/customer/pages/CustomerPage";
import DashboardPage from "@/modules/dashboard/pages/DashboardPage";
import AnalyticPage from "@/modules/analytic/page/AnalyticPage";
import InboxPage from "@/modules/inbox/pages/InboxPage";
import InvoicesPage from "@/modules/invoice/pages/InvoicesPage";

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
				path: "/",
				element: <DashboardPage/>,
			},
			{
				path: "/garage",
				element: <GaragePage/>
			},
			{
				path: "/customer",
				element: <CustomerPage/>
			},
			{
				path: "/analytic",
				element: <AnalyticPage/>,
			},
			
			{
				path: "/invoice",
				element: <InvoicesPage/>,
			},

      {
        path: "/contact",
        element: <h1>Click below to contact</h1>,
      },
      {
        path: "/inbox",
        element: <InboxPage/>,
      },

    ],
  },
];

export const router = createBrowserRouter(routes);
