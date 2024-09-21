//* Packages Import //
import { Outlet } from "react-router-dom";

//* Components Import *//
import SideBar from "@/components/sidebar/SideBar";

const Dashboard = () => {
	return (
		<section className="flex w-screen h-screen">
			<SideBar />
			<div className="w-screen">
				<header className="h-16 bg-white">
					<p className="ml-3 text-sm text-charcoalBlack leading-[64px]">
						<span className="h-[6px] w-[6px] bg-greenStatus rounded-[50%] relative inline-block mr-1"></span>Your are an
						admin
					</p>
				</header>

				<main>
					<Outlet />
				</main>
			</div>
		</section>
	);
};
export default Dashboard;
