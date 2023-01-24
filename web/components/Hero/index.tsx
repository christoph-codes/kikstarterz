import { Box, Flex, Text } from "@chakra-ui/react";
import Button from "../Button";
import Section from "../Section";
import Title from "../Title";
import styles from "./Hero.module.scss";

export interface IHeroProps {
	bgImg?: string;
	align?: "right" | "left";
	theme?: "dark" | "light";
	title?: string;
	description?: string;
	btnLabel?: string;
	btnLink?: string;
}

const Hero = ({
	bgImg,
	align = "right",
	theme = "dark",
	title,
	description,
	btnLabel,
	btnLink,
	...rest
}: IHeroProps) => {
	return (
		<Section
			className={styles.Hero}
			bgImg={bgImg}
			backgroundSize="cover"
			backgroundRepeat="no-repeat"
			backgroundPosition="center"
			hideContainer
			{...rest}
		>
			<Flex
				justifyContent={align === "right" ? "flex-end" : "flex-start"}
				alignItems="center"
				height="60vh"
			>
				<Box
					padding={{ base: "32px", md: "0" }}
					backgroundColor={{
						base: "rgba(0,0,0,0.8)",
						md: "transparent",
					}}
					width={{ base: "100%", md: "40%" }}
					marginRight={
						align === "right" ? { base: 0, md: "5%" } : "0"
					}
					marginLeft={align === "left" ? { base: 0, md: "5%" } : "0"}
					borderRadius="16px"
				>
					<Title
						color={{
							base: "brand.primary.default",
							md:
								theme === "dark"
									? "brand.primary.default"
									: "brand.black.default",
						}}
						textAlign={{ base: "center", md: "left" }}
					>
						{title}
					</Title>
					<Text
						color={{
							base: "brand.white.default",
							md:
								theme === "dark"
									? "brand.white.default"
									: "brand.black.default",
						}}
						fontSize="xl"
						textAlign={{ base: "center", md: "left" }}
					>
						{description}
					</Text>
					<Button className={styles.Hero__button} href={btnLink}>
						{btnLabel}
					</Button>
				</Box>
			</Flex>
		</Section>
	);
};

export default Hero;
