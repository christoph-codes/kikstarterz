import { useRouter } from "next/router";
import useSWR from "swr";
import PageTemplate from "@/templates/Page";
import { fetcher } from "@/utils/helpers";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Title from "@/components/Title";
import DataPoint from "@/components/DataPoint";
import Loader from "@/components/Loader";

const Profile = () => {
	const { query } = useRouter();
	const { data, error, isLoading } = useSWR(
		`/api/athletes/${query.profile}`,
		fetcher
	);

	const user = data?.data;

	if (error) return <div>failed to load</div>;
	if (isLoading) return <Loader />;

	return (
		<PageTemplate>
			<Box
				as="section"
				p="8"
				marginTop={4}
				marginBottom={8}
				borderRadius={16}
				bgGradient="linear(to-tr, #0c191a, #2e2912)"
			>
				<Flex gap={8} flexDirection={{ base: "column", md: "row" }}>
					<Image
						width={{ base: "100%", md: 300 }}
						borderRadius={16}
						src="/christopher-jones-headshot.jpg"
						objectFit="cover"
					/>
					<Box width="100%">
						<Title h2 color="white" marginBottom="0">
							{user.fname} {user.lname}
						</Title>
						<Text
							fontSize="xl"
							fontWeight="bold"
							fontStyle="italic"
							textTransform="uppercase"
							color="brand.primary.default"
						>
							Class of 2023 {user.class}
						</Text>
						<Flex
							marginTop={4}
							gap={8}
							justifyContent="center"
							flexDirection={{ base: "column", md: "row" }}
						>
							<Box
								width={{ base: "100%", md: "50%" }}
								borderColor="brand.primary.default !important"
								borderRight={{ base: "none", md: "2px solid" }}
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
							<Box width="50%">
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
