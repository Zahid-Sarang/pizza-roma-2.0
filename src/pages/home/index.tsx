//* Packages Import  *//
import clsx from "clsx";

//* Utils Import  *//
import { recentOrdersList } from "@/utils/recentOrders";

//* Icons Import  *//
import BasketIcon from "@/assets/icons/BasketIcon";
import { BagIcon } from "@/assets/icons/BagIcon";
import { BarChartIcon } from "@/assets/icons/BarChart";
import { Graph } from "@/assets/icons/Graph";

//* Styles Import *//
import Styles from "./Home.module.scss";

const Home = () => {
	return (
		<section className={Styles.homeContainer}>
			<p className={Styles.greeting}>
				<span className="text-lightCharcoal">Hello </span>Zahid 🤗
			</p>
			<div className={Styles.content}>
				{/* left side */}
				<div className={Styles.orderInfo}>
					<div className={Styles.orderTotals}>
						{/* Order Info */}
						<div className={Styles.sales}>
							<div className={Styles.headig}>
								<span className="p-2 rounded-full text-draft bg-draftBg">
									<BagIcon />
								</span>
								<div>
									<p className={Styles.text}>Sales</p>
									<p className="font-bold text-charcoalGray">30</p>
								</div>
							</div>
						</div>
						<div className={Styles.sales}>
							<div className={Styles.headig}>
								<span className="p-2 rounded-full text-greenText bg-lightGreen">
									<BarChartIcon />
								</span>
								<div>
									<p className={Styles.text}>Total Sales</p>
									<p className="font-bold text-greenStatus">₹ 50,000.00</p>
								</div>
							</div>
						</div>
					</div>
					{/* Stats Graph */}
					<div className={Styles.salesStats}>
						<div className={Styles.statsHeading}>
							<span className="p-2 rounded-full text-blueStatus bg-blueStatusBg">
								<Graph />
							</span>
							<span className="text-lg font-extrabold text-charcoalGray">Sales statistics</span>
						</div>

						{/* Statistics Graph */}
					</div>
				</div>

				{/* right side */}
				<div className={Styles.recentInfo}>
					<div className={Styles.recentOrders}>
						<span className="p-2 rounded-full text-tomatoRed bg-tomatoRedBg">
							<BasketIcon />
						</span>
						<span className="text-lg font-extrabold text-charcoalGray">Recent Orders</span>
					</div>

					{/* Orders List */}
					{recentOrdersList.map((item, index) => (
						<div className={Styles.ordersList} key={index}>
							<div>
								<p className="font-semibold text-charcoalBlack">{item.OrderSummary}</p>
								<p className="text-lightCharcoal">{item.address}</p>
							</div>
							<p className="font-bold text-charcoalGray">₹{item.amount}</p>
							<span
								className={clsx(Styles.orderStatus, {
									[Styles.preparing]: item.status === "preparing",
									[Styles.onTheWay]: item.status === "on the way",
									[Styles.delivered]: item.status === "Delivered",
								})}
							>
								{item.status}
							</span>
						</div>
					))}
					<div className="p-5">
						<span
							style={{ cursor: "pointer" }}
							className="ml-2 font-semibold underline transition-colors duration-500 text-tomatoRed hover:text-draft"
						>
							See all orders
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
