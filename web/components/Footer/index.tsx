import { Flex, Image } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Flex
			justifyContent="center"
			bgColor="brand.black.hover"
			paddingY="8px"
		>
			<Image width="24px" src="/favicon@2x.png" alt="Kikstarterz Icon" />
		</Flex>
	);
};

export default Footer;
