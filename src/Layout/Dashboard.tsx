//* Packages Import //
import SideBar from "@/components/sidebar/SideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
	return (
		<section className="flex w-screen h-screen">
			{/* Dasboard */}
			<SideBar />
			<div className="w-screen">
				{/* Header */}
				<header className="bg-white h-15">
					<h1>Your are an admin</h1>
				</header>

				{/* Outlet components */}
				<main>
					<Outlet />
				</main>
			</div>
		</section>
	);
};
export default Dashboard;
