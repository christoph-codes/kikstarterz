import { Flex, Image } from "@chakra-ui/react";

const Header = () => {
	return (
		<Flex
			justifyContent="center"
			bgColor="brand.black.default"
			paddingY="8px"
		>
			<Image
				src="/kikstarterz_hori_logo_light.svg"
				alt="Kikstarterz Logo"
				width="300px"
			/>
		</Flex>
	);
};

export default Header;
