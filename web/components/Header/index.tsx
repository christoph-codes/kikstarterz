import { Flex, Image } from "@chakra-ui/react";
import NavLink from "../NavLink";

const Header = () => {
	return (
		<Flex
			justifyContent="space-between"
			bgColor="brand.black.default"
			paddingY="8px"
			alignItems="center"
			borderBottom="solid 1px"
			borderBottomColor="brand.black.hover"
		>
			<Image
				src="/kikstarterz_hori_logo_light.svg"
				alt="Kikstarterz Logo"
				width="300px"
			/>
			<NavLink href="/white-paper">View our Whitepaper</NavLink>
		</Flex>
	);
};

export default Header;
