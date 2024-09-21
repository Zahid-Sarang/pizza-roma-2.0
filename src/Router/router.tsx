import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Dashboard from "../Layout/Dashboard";
import Home from "../Pages/HomePage";
import NonAuth from "../Layout/NonAuth";
import LoginPage from "../Pages/LoginPage";
import ProtectedRoute from "./Protected";

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
