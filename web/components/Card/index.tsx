import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface ICard {
	children?: ReactNode;
}

const Card = ({ children, ...styles }: ICard & BoxProps) => {
	return (
		<Box
			marginBottom={{ base: 4, md: 8 }}
			p={{ base: 8, md: 12 }}
			bgGradient="linear(to-tr, #0c191a, #2e2912)"
			borderRadius={16}
			width="100%"
			{...styles}
		>
			{children}
		</Box>
	);
};

export default Card;
