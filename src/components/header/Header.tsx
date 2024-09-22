//* Packages Import *//
import { useEffect, useState } from "react";

//* Styles Import *//
import { BellIcon } from "@/assets/icons/BellIcon";
import Styles from "./Header.module.scss";

const Header = () => {
	const [showLogout, setShowLogout] = useState(false);
	const [isHovering, setIsHovering] = useState(false);

	useEffect(() => {
		let timer: number;
		if (!isHovering) {
			timer = setTimeout(() => setShowLogout(false), 300);
		} else {
			setShowLogout(true);
		}

		return () => clearTimeout(timer);
	}, [isHovering]);

	return (
		<header className={Styles.headerContainer}>
			<p className={Styles.status}>
				<span className={Styles.statusTitle}></span>
				Your are an admin
			</p>
			<div className={Styles.headerRightSide}>
				<div className="flex">
					<BellIcon />
					<span className={Styles.notificationDot}></span>
				</div>
				<div
					className="relative inline-block cursor-pointer"
					onMouseEnter={() => setIsHovering(true)}
					onMouseLeave={() => setIsHovering(false)}
				>
					<span className={Styles.logout}>U</span>
					{showLogout && (
						<button onClick={() => {}} className={Styles.logoutBtn}>
							Logout
						</button>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
