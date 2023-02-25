import { useRouter } from "next/router";
import useSWR from "swr";
import PageTemplate from "@/templates/Page";
import { fetcher } from "@/utils/helpers";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Title from "@/components/Title";
import DataPoint from "@/components/DataPoint";
import styles from "./Profile.module.scss";
import FourOhFour from "../404";

const Profile = () => {
	const { query, push } = useRouter();

	const { data, error, isLoading } = useSWR(
		query.profile !== undefined ? `/api/athletes/${query.profile}` : null,
		fetcher,
		{
			revalidateOnReconnect: false,
			revalidateIfStale: false,
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
			<Box
				className={styles.ProfileHero}
				as="section"
				p="8"
				marginTop={4}
				marginBottom={8}
				borderRadius={16}
				bgGradient="linear(to-tr, #0c191a, #2e2912)"
			>
				<Flex
					gap={{ base: 4, md: 8 }}
					flexDirection={{ base: "column", md: "row" }}
				>
					<Box display={{ base: "block", md: "none" }}>
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

					<Image
						width={{ base: "100%", md: 300 }}
						borderRadius={16}
						src="/christopher-jones-headshot.jpg"
						objectFit="cover"
					/>
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
								width={{ base: "100%", md: "50%" }}
								maxWidth={300}
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
								width={{ base: "100%", md: "50%" }}
								maxWidth={300}
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
						</Flex>
					</Box>
				</Flex>
			</Box>
		</PageTemplate>
	);
};

export default Profile;
