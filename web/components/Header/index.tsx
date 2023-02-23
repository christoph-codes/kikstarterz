import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import NavLink from "../NavLink";

const Header = () => {
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
			<NavLink href="/white-paper">Whitepaper</NavLink>
		</Flex>
	);
};

export default Header;
