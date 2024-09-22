//* Packages Import //
import { Outlet } from "react-router-dom";

//* Components Import *//
import SideBar from "@/components/sidebar/SideBar";
import Header from "@/components/header/Header";

const Dashboard = () => {
	return (
		<section className="flex w-screen h-screen">
			<SideBar />
			<div className="w-screen">
				<Header />
				<main>
					<Outlet />
				</main>
			</div>
		</section>
	);
};
export default Dashboard;
