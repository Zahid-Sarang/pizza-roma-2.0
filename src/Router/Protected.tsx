import { user } from "@/utils/recentOrders";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	if (!user) {
		// If user is not authenticated, redirect to login page
		return <Navigate to="/auth/login" replace={true} />;
	}

	return <Outlet />;
};

export default ProtectedRoute;
