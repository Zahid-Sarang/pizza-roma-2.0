import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const user = true;

	if (!user) {
		// If user is not authenticated, redirect to login page
		return <Navigate to="/auth/login" />;
	}

	return <Outlet />;
};

export default ProtectedRoute;
