import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/router";

import "./index.css";

const root = document.getElementById("root");
if (!root) throw new Error("No root element found");

createRoot(root!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
