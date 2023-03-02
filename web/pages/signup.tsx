import Card from "@/components/Card";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Title from "@/components/Title";
import PageTemplate from "@/templates/Page";
import { Box } from "@chakra-ui/react";

const Signup = () => {
	const signup = () => {
		console.log("Signing up the user");
	};
	return (
		<PageTemplate
			metaTitle="Sign Up » Kikstarterz"
			metaDescription="Sign up today to showcase your talents and connect with other athletes. It's time to elevate your athletic career today!"
			container
			containerStyles={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Card
				marginTop={8}
				textAlign="center"
				maxWidth={{ base: "100%", md: "70%" }}
			>
				<Title marginBottom={8}>Sign Up</Title>
				<Form
					formName="signup"
					onSubmit={() => signup()}
					submitButton={{ children: "Submit" }}
					inputs={[
						{
							name: "fname",
							label: "First Name",
							placeholder: "Christoph",
							required: true,
						},
						{
							name: "lname",
							label: "Last Name",
							placeholder: "Jones",
							required: true,
						},
						{
							name: "username",
							label: "Username",
							placeholder: "christoph_codes",
							required: true,
						},
						{
							type: "date",
							name: "birthday",
							label: "Birthdate",
							placeholder: "Jones",
							required: true,
						},
						{
							name: "location",
							label: "Location",
							placeholder: "Las Vegas, NV",
							required: true,
						},
						{
							type: "multifield",
							name: "sports",
							label: "Sports",
							placeholder: "Please Choose",
							required: true,
							options: [
								{
									label: "Football",
									value: "football",
								},
								{
									label: "Golf",
									value: "golf",
								},
							],
						},
						{
							type: "email",
							name: "email",
							label: "Email",
							placeholder: "chris@kikstarterz.com",
							required: true,
						},
						{
							type: "password",
							name: "password",
							label: "Password",
							placeholder: "°°°°°°°°°°°°",
							required: true,
						},
						{
							type: "password",
							name: "confirmPassword",
							label: "Confirm Password",
							placeholder: "°°°°°°°°°°°°",
							required: true,
						},
					]}
				/>
			</Card>
		</PageTemplate>
	);
};

export default Signup;
