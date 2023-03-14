import { useAuth } from "@/providers/AuthProvider";
import PageTemplate from "@/templates/Page";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Dashboard = () => {
	const router = useRouter();
	const { user } = useAuth();

	console.log("USER", user);

	useEffect(() => {
		if (!user) {
			router.push("/login");
		}
	}, [user]);

	return (
		<PageTemplate metaTitle="Dashboard » Kikstarterz">
			<Text color="white">{user?.fname} is officially logged in</Text>
		</PageTemplate>
	);
};

export default Dashboard;
