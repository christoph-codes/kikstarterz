import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { Text } from "@chakra-ui/react";
import Card from "@/components/Card";
import Form from "@/components/Form";
import Section from "@/components/Section";
import Title from "@/components/Title";
import PageTemplate from "@/templates/Page";
import { kikapi } from "@/utils/helpers";

const Signup = () => {
	const [error, setError] = useState("");
	const signup = (newUser: any) => {
		kikapi
			.post("/api/athletes/create", { user: newUser })
			.then((res) => {
				console.log("Create user result", res);
				setError("");
				signInWithEmailAndPassword(
					auth,
					newUser.email,
					newUser.password
				)
					.then((userCredential) => {
						setError("");
						// Signed in
						const user = userCredential.user;
						console.log("LOGGED IN USER", user);
						// ...
					})
					.catch((error) => {
						setError(error.message);
					});
			})
			.catch((err) => {
				console.log("Error", err);
				setError(err.response.data.error);
			});
	};
	return (
		<PageTemplate
			metaTitle="Sign Up » Kikstarterz"
			metaDescription="Sign up today to showcase your talents and connect with other athletes. It's time to elevate your athletic career today!"
			container
			containerStyles={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<Section
				width="100%"
				backgroundSize={{ base: "cover", md: "contain" }}
				bgImage="/signup_bg.png"
				backgroundPosition="center"
				height="50vh"
				marginTop={8}
			/>
			<Card
				marginTop={-8}
				textAlign="center"
				maxWidth={{ base: "100%", md: "70%" }}
			>
				<Title marginBottom={8}>Create Account</Title>
				<Text marginY={4}>
					Kickoff your athletic journey today by connecting with other
					athletes and presenting yourself like a pro for elevating
					your athletic career to the next level.
				</Text>
				<Form
					formName="signup"
					onSubmit={signup}
					submitButton={{ children: "Submit" }}
					error={error}
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
