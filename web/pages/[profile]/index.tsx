import { useRouter } from "next/router";
import useSWR from "swr";
import PageTemplate from "@/templates/Page";
import { fetcher } from "@/utils/helpers";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Title from "@/components/Title";
import DataPoint from "@/components/DataPoint";
import styles from "./Profile.module.scss";
import FourOhFour from "../404";
// import ReactPlayer from "react-player";

const Profile = () => {
	const { query, push } = useRouter();

	const { data, error, isLoading } = useSWR(
		query.profile !== undefined ? `/api/athletes/${query.profile}` : null,
		fetcher,
		{
			refreshInterval: 0,
			revalidateOnFocus: false,
		}
	);

	if (isLoading || !data) {
		return null;
	}

	if (error || data.error) {
		return <FourOhFour />;
		// push("/404");
		// return;
	}

	const user = data.data;
	return (
		<PageTemplate>
			<Flex
				className={styles.ProfileHero}
				as="section"
				p={{ base: 4, md: 8 }}
				marginTop={4}
				marginBottom={8}
				borderRadius={16}
				bgGradient="linear(to-tr, #0c191a, #2e2912)"
				alignItems="flex-start"
				justifyContent="space-between"
				gap={6}
			>
				<Flex
					gap={{ base: 4, md: 8 }}
					flexDirection={{ base: "column", md: "row" }}
				>
					<Box
						display={{ base: "block", md: "none" }}
						textAlign="center"
					>
						<Title h2 color="white" marginBottom="0">
							{user.fname} {user.lname}
						</Title>
						{user.class && (
							<Text
								fontSize="xl"
								fontWeight="bold"
								fontStyle="italic"
								textTransform="uppercase"
								color="brand.primary.default"
							>
								Class of {user.class}
							</Text>
						)}
					</Box>
					<Box>
						<Image
							width={{ base: "100%", md: 300 }}
							borderRadius={16}
							marginBottom={8}
							src="/christopher-jones-headshot.jpg"
							objectFit="cover"
						/>
						<Flex
							gap={2}
							marginY={4}
							justifyContent="space-around"
							alignItems="center"
							className="icons"
							textAlign="center"
						>
							<Image src="/icons/share_icon.svg" boxSize="32px" />
							<Image
								src="/icons/add_athlete_icon.svg"
								boxSize="32px"
							/>
							<Image src="/icons/fire_icon.svg" boxSize="32px" />
							<Image src="/icons/fund_icon.svg" boxSize="32px" />
							<Image src="/icons/more_icon.svg" boxSize="32px" />
						</Flex>
					</Box>
					<Box width="100%" marginLeft={{ base: 0, md: 8 }}>
						<Box display={{ base: "none", md: "block" }}>
							<Title
								display={{ base: "none", md: "block" }}
								h2
								color="white"
								marginBottom="0"
							>
								{user.fname} {user.lname}
							</Title>
							{user.class && (
								<Text
									fontSize="xl"
									fontWeight="bold"
									fontStyle="italic"
									textTransform="uppercase"
									color="brand.primary.default"
								>
									Class of {user.class}
								</Text>
							)}
						</Box>
						<Flex
							marginTop={4}
							gap={8}
							flexDirection={{ base: "column", md: "row" }}
						>
							<Box
								width={{ base: "100%", md: "30%" }}
								// maxWidth={300}
								borderColor="brand.primary.default !important"
								borderRight={{
									base: "none",
									md: "2px solid",
								}}
							>
								<DataPoint label="Hometown">
									{user.location}
								</DataPoint>
								{user.height && (
									<DataPoint label="Height">
										{user.height}
									</DataPoint>
								)}
								{user.weight && (
									<DataPoint label="Weight">
										{`${user.weight} lbs.`}
									</DataPoint>
								)}
								{user.sports.length >= 1 && (
									<DataPoint label="Sport(s)">
										{user.sports.join(", ")}
									</DataPoint>
								)}
							</Box>
							<Box
								width={{ base: "100%", md: "30%" }}
								// maxWidth={300}
								borderColor="brand.primary.default !important"
								borderRight={{
									base: "none",
									md: "2px solid",
								}}
							>
								{(user.gpa || user.act || user.sat) && (
									<DataPoint label="Academics">
										{`GPA: ${user.gpa} | SAT: ${user.sat} | ACT: ${user.act}`}
									</DataPoint>
								)}
								{user.studying && (
									<DataPoint label="Studying">
										{user.studying}
									</DataPoint>
								)}
								{user.apClasses > 0 && (
									<DataPoint label="AP Classes">
										{user.apClasses}
									</DataPoint>
								)}
								{user.honorsClasses > 0 && (
									<DataPoint label="Honors Classes">
										{user.honorsClasses}
									</DataPoint>
								)}
							</Box>
							<Box
								width={{ base: "100%", md: "30%" }}
								// maxWidth={300}
							>
								{user.about && (
									<DataPoint label="About Me">
										{user.about}
									</DataPoint>
								)}
							</Box>
						</Flex>
					</Box>
				</Flex>
			</Flex>
			<Flex flexDirection="column" alignItems="center">
				<Flex gap="8" flexDirection={{ base: "column", md: "row" }}>
					<Image
						src="/christopher_jones_action_1.png"
						objectFit="cover"
						borderRadius={16}
						maxHeight={400}
						width={{ base: "100%", md: "25%" }}
					/>
					<Image
						src="/christopher_jones_action_3.png"
						objectFit="cover"
						borderRadius={16}
						width={{ base: "100%", md: "50%" }}
						maxHeight={400}
					/>
					{/* <Box
						as={ReactPlayer}
						marginTop={-8}
						borderRadius={16}
						url="/IMG_3597.MOV"
						className={styles.Profile__highlight}
						controls
					/> */}
					<Image
						src="/christopher_jones_action_2.png"
						objectFit="cover"
						borderRadius={16}
						maxHeight={400}
						width={{ base: "100%", md: "25%" }}
					/>
				</Flex>
			</Flex>
			<Box>Utility Bar</Box>
			<Box>Quotes Grid</Box>
		</PageTemplate>
	);
};

export default Profile;
