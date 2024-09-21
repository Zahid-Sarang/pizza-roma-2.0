//* Packages Imports *//
import { NavLink } from "react-router-dom";

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

const menuListConfig = [
	{
		key: "/",
		icon: <Home />,
		label: <NavLink to="/">Home</NavLink>,
	},
	{
		key: "/users",
		icon: <UserIcon />,
		label: <NavLink to="/users">Users</NavLink>,
		allowedTo: ["admin"],
	},
	{
		key: "/restaurants",
		icon: <FoodIcon />,
		label: <NavLink to="/restaurants">Restaurants</NavLink>,
		allowedTo: ["admin"],
	},
	{
		key: "/order",
		icon: <BasketIcon />,
		label: <NavLink to="/orders">Orders</NavLink>,
	},
	{
		key: "/products",
		icon: <FoodIcon />,
		label: <NavLink to="/products">Products</NavLink>,
	},
	{
		key: "/category",
		icon: <CategoryIcon />,
		label: <NavLink to="/products">Category</NavLink>,
		allowedTo: ["admin"],
	},
	{
		key: "/toppings",
		icon: <ToppingIcon />,
		label: <NavLink to="/toppings">Toppings</NavLink>,
	},
	{
		key: "/coupons",
		icon: <GiftIcon />,
		label: <NavLink to="/coupons">Coupons</NavLink>,
	},
];

const SideBar = () => {
	return (
		<aside className={Styles.sidebar}>
			<h1 className={Styles.logo}>Logo - Pizza Roma </h1>
			<div>
				<ul className={Styles.menuList}>
					{menuListConfig.map((list, index) => (
						<li key={index} className={Styles.menuListItem}>
							<span>{list.icon}</span>
							<span>{list.label}</span>
						</li>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default SideBar;
