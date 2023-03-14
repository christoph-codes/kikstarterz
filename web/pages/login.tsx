import Card from "@/components/Card";
import Form from "@/components/Form";
import Section from "@/components/Section";
import Title from "@/components/Title";
import { auth } from "@/config/firebase";
import { useAuth } from "@/providers/AuthProvider";
import PageTemplate from "@/templates/Page";
import { kikapi } from "@/utils/helpers";
import { Text } from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";

const Login = () => {
	const navigate = useRouter();
	const { user } = useAuth();
	const [error, setError] = useState<string>("");
	const login = (userCreds: any) => {
		setError("");
		console.log("logging in");
		kikapi
			.get(`/api/athletes/${userCreds.username}`)
			.then((res) => {
				console.log("res", res.data.data.email);
				signInWithEmailAndPassword(
					auth,
					res.data.data.email,
					userCreds.password
				)
					.then((fbUser) => {
						if (fbUser) {
							console.log("FIREBASE USER", fbUser);
						} else {
							setError(
								"This username and password does not match our records"
							);
						}
					})
					.catch((err) => {
						setError(err.message);
					});
			})
			.catch((err) => {
				console.log("login error", err.response.data.error);
				setError(err.response.data.error);
			});
	};
	if (user?.fname) {
		navigate.push("/dashboard");
	}
	return (
		<PageTemplate
			metaTitle="Login » Kikstarterz"
			metaDescription="Log in to your Kikstarterz account to continue your athletic journey and access exclusive features designed to help you succeed in sports."
			fullpage
			container
		>
			<Section
				width="100%"
				backgroundSize={{ base: "cover", md: "contain" }}
				bgImage="/login_bg.png"
				backgroundPosition="center"
				height="50vh"
				marginTop={8}
			/>
			<Card
				marginTop={-8}
				textAlign="center"
				maxWidth={{ base: "100%", md: "50%" }}
			>
				<Title marginBottom={8}>Login</Title>
				<Text marginY={4}>
					Log in to your Kikstarterz account to continue your athletic
					journey and access exclusive features designed to help you
					succeed in sports.
				</Text>
				<Form
					formName="login"
					onSubmit={login}
					submitButton={{ children: "Login" }}
					error={error}
					inputs={[
						{
							type: "username",
							name: "username",
							label: "Username",
							placeholder: "christoph_codes",
							required: true,
						},
						{
							type: "password",
							name: "password",
							label: "Password",
							placeholder: "°°°°°°°°°°°°",
							required: true,
						},
					]}
				/>
			</Card>
		</PageTemplate>
	);
};

export default Login;
