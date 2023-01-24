import { Box, BoxProps, Text } from "@chakra-ui/react";
import { forwardRef, LegacyRef, ReactNode, Ref } from "react";
import Container from "@/components/Container";
import Title from "@/components/Title";
import styles from "./Section.module.scss";

export interface ISectionProps extends BoxProps {
	children?: ReactNode;
	className?: string;
	containerClass?: string;
	hideContainer?: boolean;
	bgColor?: string;
	bgImg?: string;
	title?: string;
	description?: string;
}

const Section = forwardRef(
	(
		{
			children,
			className,
			containerClass,
			hideContainer,
			bgColor,
			bgImg,
			title,
			description,
			...rest
		}: ISectionProps,
		ref: LegacyRef<HTMLDivElement>,
	) => {
		const content = (
			<>
				{title && (
					<Title
						h2
						className={styles.Section__title}
						textAlign="center"
						marginBottom={16}
					>
						{title}
					</Title>
				)}
				{description && (
					<Text className={styles.Section__description}>
						{description}
					</Text>
				)}
				{children}
			</>
		);
		return (
			<Box
				as="section"
				bgColor={bgColor || ""}
				className={`${styles.Section} ${className}`}
				paddingX={{ base: 4, md: 0 }}
				backgroundImage={bgImg && `url(${bgImg})`}
				ref={ref}
				{...rest}
			>
				{!hideContainer ? (
					<Container className={containerClass}>{content}</Container>
				) : (
					content
				)}
			</Box>
		);
	},
);
Section.displayName = "Section";
export default Section;
