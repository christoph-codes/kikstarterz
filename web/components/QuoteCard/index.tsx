import { convertTimestamp } from "@/utils/helpers";
import { Box, Text } from "@chakra-ui/react";

export interface IQuote {
	quote: {
		date: Date;
		message: string;
		fireCount: number;
		type: string;
		user: string;
	};
}

const QuoteCard = ({ quote }: IQuote) => {
	return (
		<Box
			marginBottom={{ base: 4, md: 8 }}
			p={{ base: 4, md: 8 }}
			bgGradient="linear(to-tr, #0c191a, #2e2912)"
			borderRadius={16}
			width="100%"
		>
			<Text>{convertTimestamp(quote.date)}</Text>
			<Text size="xl" fontWeight="bold" fontStyle="italic">
				{quote.message}
			</Text>
			<Text>- {quote.user}</Text>
		</Box>
	);
};

export default QuoteCard;
