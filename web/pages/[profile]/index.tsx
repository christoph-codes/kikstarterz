import { useRouter } from "next/router";
import useSWR from "swr";
import PageTemplate from "@/templates/Page";
import { convertTimestamp, fetcher } from "@/utils/helpers";
import {
	Box,
	Flex,
	Image,
	Text,
	TableContainer,
	Td,
	Tr,
	TableCaption,
	Thead,
	Tbody,
	Table,
	Th,
} from "@chakra-ui/react";
import Title from "@/components/Title";
import DataPoint from "@/components/DataPoint";
import styles from "./Profile.module.scss";
import FourOhFour from "../404";
import QuoteCard from "@/components/QuoteCard";
import Section from "@/components/Section";
// import ReactPlayer from "react-player";

const Profile = () => {
	const { query } = useRouter();

	const {
		data: athleteData,
		error: athleteError,
		isLoading: athleteIsLoading,
	} = useSWR(
		query.profile !== undefined ? `/api/athletes/${query.profile}` : null,
		fetcher,
		{
			refreshInterval: 0,
			revalidateOnFocus: false,
		}
	);

	const {
		data: quotesData,
		error: quotesError,
		isLoading: quotesIsLoading,
	} = useSWR(
		query.profile !== undefined ? `/api/quotes/${query.profile}` : null,
		fetcher,
		{
			refreshInterval: 0,
			revalidateOnFocus: false,
		}
	);

	if (athleteIsLoading || !athleteData || quotesIsLoading) {
		return null;
	}

	if (athleteError || athleteData.error || quotesError) {
		return <FourOhFour />;
		// push("/404");
		// return;
	}

	const user = athleteData.data;
	const quotes = quotesData?.data || [];

	console.log("quotes", quotes);

	return (
		<PageTemplate>
			<Flex
				className={styles.ProfileHero}
				as="section"
				p={{ base: 4, md: 8 }}
				marginTop={4}
				marginBottom={{ base: 4, md: 8 }}
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
										{user.sports
											.map((sport: any) => sport.name)
											.join(", ")}
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
				<Flex
					gap={{ base: 4, md: 8 }}
					flexDirection={{ base: "column", md: "row" }}
				>
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
			<Section hideContainer>
				<Flex gap={{ base: 4, md: 8 }}>
					<Box width="50%">
						<Title color="brand.black.light" h3 marginBottom={4}>
							Stats
						</Title>
						{user?.sports?.length > 0 ? (
							user.sports.map((sport: any) => {
								return (
									<>
										{sport.stats
											.slice(0, 1)
											.map((stat: any, idx: number) => {
												return (
													<>
														<Box
															key={idx}
															className={
																styles.Profile__bestStat
															}
															alignItems="center"
															justifyContent="center"
															marginBottom={{
																base: 4,
																md: 8,
															}}
															p={{
																base: 4,
																md: 8,
															}}
															bgGradient="linear(to-tr, #0c191a, #2e2912)"
															borderRadius={16}
															flexDirection="column"
															data-lastName={
																sport.name
															}
															width="100%"
														>
															<Box
																key={idx}
																textAlign="center"
																marginBottom={4}
															>
																<Title h4>
																	{
																		stat.amount
																	}{" "}
																	{stat.type}
																</Title>
																<Text>
																	at{" "}
																	{stat.name}{" "}
																	{stat.event}
																</Text>
																<Text>
																	{convertTimestamp(
																		stat.date
																	)}
																</Text>
															</Box>
														</Box>
														{sport.stats.slice(1)
															.length >= 1 && (
															<TableContainer>
																<Table variant="simple">
																	<TableCaption>
																		Stats
																		are
																		regularly
																		updated
																		and
																		uploaded
																		by
																		athlete
																		manually.
																	</TableCaption>
																	<Thead>
																		<Tr>
																			<Th>
																				Date
																			</Th>
																			<Th>
																				Event
																			</Th>
																			<Th
																				isNumeric
																			>
																				Amount
																			</Th>
																			<Th>
																				Type
																			</Th>
																		</Tr>
																	</Thead>
																	<Tbody>
																		{sport.stats
																			.slice(
																				1
																			)
																			.map(
																				(
																					stat: any,
																					idex: number
																				) => {
																					return (
																						<Tr
																							key={
																								idex
																							}
																							color="brand.white.default"
																						>
																							<Td>
																								{convertTimestamp(
																									stat?.date
																								)}
																							</Td>
																							<Td>
																								{
																									stat.event
																								}
																							</Td>
																							<Td
																								isNumeric
																							>
																								{
																									stat.amount
																								}
																							</Td>
																							<Td>
																								{
																									stat.type
																								}
																							</Td>
																						</Tr>
																					);
																				}
																			)}
																	</Tbody>
																</Table>
															</TableContainer>
														)}
													</>
												);
											})}
									</>
								);
							})
						) : (
							<Text>No Stats Found</Text>
						)}
					</Box>
					<Box width="50%">
						<Title color="brand.black.light" h3 marginBottom={4}>
							Quotes
						</Title>
						<Flex flexDirection="column" gap={2}>
							{quotes.map((quote: any, quotesIndex: any) => {
								return (
									<QuoteCard
										key={quotesIndex}
										quote={quote}
									/>
								);
							})}
						</Flex>
					</Box>
				</Flex>
			</Section>
		</PageTemplate>
	);
};

export default Profile;
