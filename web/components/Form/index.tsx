import { FC, useState, ChangeEvent } from "react";
import inputValidations, { EErrorMessages } from "../../utils/inputValidations";
// eslint-disable-next-line import/no-unresolved
import Button, { IButtonProps } from "@/components/Button";
import Input, { IInputProps } from "@/components/Input";
import Loader from "@/components/Loader";
import styles from "./Form.module.scss";

export type TFormProps = {
	inputs: IInputProps[];
	className?: string;
	// eslint-disable-next-line no-unused-vars
	onSubmit: (e: {}) => void;
	submitButton: IButtonProps;
	formName: string;
};

const Form: FC<TFormProps> = ({
	inputs,
	className = "",
	onSubmit,
	submitButton,
	formName,
}) => {
	const [form, setForm] = useState({});
	const formUpdate = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		validation: EErrorMessages[],
	) => {
		const { name, value } = e.target;
		const validate = () =>
			validation.map((iv: EErrorMessages) => {
				if (
					inputValidations[
						iv as unknown as keyof typeof EErrorMessages
					]
				) {
					const isValid =
						inputValidations[
							iv as unknown as keyof typeof EErrorMessages
						](value);
					return isValid;
				}
				throw new Error("Not a valid input validator.");
			});
		setForm({
			...form,
			[name]: {
				value,
				isNotValid: [...validate()],
			},
		});
	};
	const renderInputs = inputs.map((input, index) => (
		<Input
			key={index}
			{...input}
			form={form}
			onChange={(e) => formUpdate(e, input.validation)}
		/>
	));
	const [submitting, setSubmitting] = useState(false);
	const submit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitting(true);

		const grabValuesOnly = () => {
			return Object.entries(form).reduce(
				(pv, cv: any) => {
					return {
						...pv,
						[cv[0]]: cv[1].value,
					};
				},
				{ formName },
			);
		};

		setTimeout(() => {
			setSubmitting(false);
			onSubmit(grabValuesOnly());
		}, 3000);
	};

	return (
		<form
			className={`${styles.Form} ${className}`}
			onSubmit={(e: ChangeEvent<HTMLFormElement>) => submit(e)}
		>
			{renderInputs}
			{submitting ? (
				<Loader marginTop={8} isLoading={submitting} />
			) : (
				<Button type="submit" {...submitButton}>
					{submitButton.children}
				</Button>
			)}
		</form>
	);
};

export default Form;
