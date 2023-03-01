import Button from "@/components/Button";
import Title from "@/components/Title";
import PageTemplate from "@/templates/Page";
import { Box, Flex, Text, Icon, Image } from "@chakra-ui/react";

const FourOhFour = () => {
	return (
		<PageTemplate container>
			<Flex justifyContent="center" alignItems="center" height="80vh">
				<Flex
					justifyContent="center"
					alignItems="center"
					flexDirection="column"
					textAlign="center"
				>
					<Title>Whoops!</Title>
					<Image
						src="/icons/attention_icon.svg"
						alt="Attention Icon"
						marginY="8"
					/>
					<Text fontSize="2xl" marginBottom={4}>
						It looks like you might be a little lost since this page
						doesn't exist.
					</Text>
					<Button variant="primary-outline" href="/">
						Home
					</Button>
				</Flex>
			</Flex>
		</PageTemplate>
	);
};

export default FourOhFour;
