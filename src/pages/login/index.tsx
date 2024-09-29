//* Componets Imports *//
import Input from "@/components/core/Input";
import Styles from "./Login.module.scss";
import LockIcon from "@/assets/icons/LockIcon";
import { Link } from "react-router-dom";

const LoginPage = () => {
	return (
		<section className={Styles.container}>
			<h1 className={Styles.logo}>
				<span className="text-greenText">Pizza</span> Roma
			</h1>
			<div className={Styles.loginCard}>
				<div className={Styles.cardTitle}>
					<span>
						<LockIcon />
					</span>
					<span>Sign In</span>
				</div>
				<div className="px-[20px]">
					<Input className="py-[4px] px-[11px]" placeholder="Email" />
					<Input className="py-[4px] px-[11px]" placeholder="password" />
					<div className="flex items-center justify-between mt-3 gap-7">
						<div className="flex items-center justify-between gap-2">
							<input type="checkbox" defaultChecked />
							<span>Remember me</span>
						</div>
						<Link to="/" className="text-sm">
							Forget Password
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LoginPage;
