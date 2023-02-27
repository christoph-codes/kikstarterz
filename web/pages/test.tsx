import { useEffect } from "react";
import PageTemplate from "@/templates/Page";
import { auth } from "@/config/firebase";
import Button from "@/components/Button";
import { useAuth } from "@/providers/AuthProvider";

const Test = () => {
	const { signin, user } = useAuth();
	useEffect(() => {
		auth?.currentUser
			?.getIdToken(/* forceRefresh */ true)
			.then((idToken: string) => {
				console.log("id", idToken);
				// Send token to your backend via HTTPS
				// ...
			})
			.catch((error: any) => {
				console.log("error:", error);
				// Handle error
			});
	}, []);
	return (
		<PageTemplate>
			<h1>Hello{user && user.email}</h1>
			<Button
				onClick={() =>
					signin && signin("chris@kikstarterz.com", "password1234")
				}
			>
				Sign Me In
			</Button>
		</PageTemplate>
	);
};

export default Test;
