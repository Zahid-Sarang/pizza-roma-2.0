//* packages Imports *//
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

//* Components Imports *//
import { router } from "./router/router";

//* Styles Import *//
import "./index.css";

const root = document.getElementById("root");
if (!root) throw new Error("No root element found");

createRoot(root!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
