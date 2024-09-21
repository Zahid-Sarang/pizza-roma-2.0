import { Navigate, Outlet } from "react-router-dom";

const NonAuth = () => {
	const user = true;

	if (user !== null) {
		const returnTo = new URLSearchParams(location.search).get("returnTo") || "/";
		return <Navigate to={returnTo} replace={true} />;
	}

	return (
		<div>
			<Outlet />
		</div>
	);
};

export default NonAuth;
