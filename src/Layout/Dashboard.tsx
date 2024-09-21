import { Outlet } from "react-router-dom";

const Dashboard = () => {
	return (
		<div>
			<h1 className="bg-draftBg w-20 h-8 m-20 items-center flex justify-center rounded-md relative text-draft">
				Draft
			</h1>
			<Outlet />
		</div>
	);
};
export default Dashboard;
