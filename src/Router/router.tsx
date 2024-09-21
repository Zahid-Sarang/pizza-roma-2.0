import { createBrowserRouter } from "react-router-dom";

//* Components Import *//

import Dashboard from "@/layout/Dashboard";
import Home from "@/pages/home";
import ProtectedRoute from "./Protected";
import NonAuth from "@/layout/NonAuth";
import LoginPage from "@/pages/login";
import Root from "@/layout/Root";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				element: <ProtectedRoute />,
				children: [
					{
						path: "",
						element: <Dashboard />,
						children: [
							{
								path: "",
								element: <Home />,
							},
						],
					},
				],
			},

			{
				path: "/auth",
				element: <NonAuth />,
				children: [
					{
						path: "login",
						element: <LoginPage />,
					},
				],
			},
		],
	},
]);
