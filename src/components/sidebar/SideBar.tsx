//* Packages Imports *//
import { NavLink, useLocation } from "react-router-dom";

//* Icons Imports *//
import Home from "@/assets/icons/Home";
import UserIcon from "@/assets/icons/UserIcon";
import FoodIcon from "@/assets/icons/FoodIcon";
import BasketIcon from "@/assets/icons/BasketIcon";
import CategoryIcon from "@/assets/icons/CategoryIcon";
import ToppingIcon from "@/assets/icons/ToppingIcon";
import GiftIcon from "@/assets/icons/GiftIcon";

//* Styles Import *//
import Styles from "./SideBar.module.scss";
import { clsx } from "clsx";

const menuListConfig = [
	{
		key: "/",
		icon: <Home />,
		label: "Home",
	},
	{
		key: "/users",
		icon: <UserIcon />,
		label: "Users",
		allowedTo: ["admin"],
	},
	{
		key: "/restaurants",
		icon: <FoodIcon />,
		label: "Restaurants",
		allowedTo: ["admin"],
	},
	{
		key: "/orders",
		icon: <BasketIcon />,
		label: "Orders",
	},
	{
		key: "/products",
		icon: <FoodIcon />,
		label: "Products",
	},
	{
		key: "/categories",
		icon: <CategoryIcon />,
		label: "Categories",
		allowedTo: ["admin"],
	},
	{
		key: "/toppings",
		icon: <ToppingIcon />,
		label: "Toppings",
	},
	{
		key: "/coupons",
		icon: <GiftIcon />,
		label: "Coupons",
	},
];

const SideBar = () => {
	const location = useLocation();

	return (
		<aside className={Styles.sidebar}>
			<h1 className={Styles.logo}>
				<span className="text-greenText">Pizza</span> Roma
			</h1>
			<div className={Styles.menuList}>
				<ul>
					{menuListConfig.map((list, index) => (
						<NavLink to={list.key}>
							<li
								key={index}
								className={clsx(Styles.menuListItem, location.pathname === list.key ? Styles.active : Styles.unActive)}
							>
								<span>{list.icon}</span>
								<span>{list.label}</span>
							</li>
						</NavLink>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default SideBar;
