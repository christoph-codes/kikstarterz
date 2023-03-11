import { useAuth } from "@/providers/AuthProvider";
import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import Button from "../Button";
import NavLink from "../NavLink";

const Header = () => {
	const { user, signOut } = useAuth();
	return (
		<Flex
			justifyContent="space-between"
			bgColor="brand.black.default"
			padding="8px 16px"
			alignItems="center"
			borderBottom="solid 1px"
			borderBottomColor="brand.black.hover"
		>
			<Link href="/">
				<Image
					src="/kikstarterz_hori_logo_light.svg"
					alt="Kikstarterz Logo"
					width="300px"
				/>
			</Link>
			<Flex>
				{!user ? (
					<>
						<NavLink href="/white-paper">Whitepaper</NavLink>
						<NavLink href="/login">Login</NavLink>
						<NavLink href="/signup" cta>
							Signup
						</NavLink>
					</>
				) : (
					<Button onClick={signOut}>Logout</Button>
				)}
			</Flex>
		</Flex>
	);
};

export default Header;
