/* eslint-disable @typescript-eslint/no-explicit-any */
//* Packages Import *//
import { RefCallBack } from "react-hook-form";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import clsx from "clsx";

//* Styles Import *//
import Styles from "./Input.module.scss";

//* Interface *//
interface BaseInputProps {
	label?: string;
	placeholder?: string;
	className?: string;
	variant?: "solid" | "error";
	multiline?: boolean;
	labelPosition?: "top" | "left";
	inputRef?: RefCallBack | null;
	helperText?: string | any;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, BaseInputProps {}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, BaseInputProps {}

type CustomProps = InputProps & TextareaProps;

const Input = (props: CustomProps) => {
	const {
		label,
		placeholder,
		className,
		variant = "solid",
		multiline,
		labelPosition = "top",
		inputRef,
		helperText,
		...rest
	} = props;

	return (
		<div>
			<div
				className={clsx(Styles.inputContainer, {
					[Styles.labelLeft]: labelPosition === "left",
				})}
			>
				<label htmlFor={props.id} className={Styles.label}>
					<span className="text-error mr-[2px]">{props.required && "*"}</span>
					{label}
				</label>
				{multiline ? (
					<>
						<textarea
							placeholder={placeholder}
							ref={inputRef}
							className={clsx(Styles.input, Styles[variant], className)}
							{...rest}
						/>
					</>
				) : (
					<input
						placeholder={placeholder}
						ref={inputRef}
						className={clsx(Styles.input, Styles[variant], className)}
						{...rest}
					/>
				)}
			</div>
			{helperText && (
				<span className={clsx(Styles.helperText, { [Styles.labelLeftHelper]: labelPosition === "left" })}>
					{helperText}
				</span>
			)}
		</div>
	);
};

export default Input;
