import { Box, Text } from "@chakra-ui/react";
import { IDataPoint } from "./typings";

const DataPoint = ({ label, children }: IDataPoint) => {
	return (
		<Box marginBottom={2}>
			<Text
				textTransform="uppercase"
				fontWeight="bold"
				fontStyle="italic"
				color="brand.black.light"
				marginBottom="0"
			>
				{label}
			</Text>
			<Text
				textTransform="uppercase"
				fontWeight="bold"
				color="brand.white.default"
			>
				{children || "N/A"}
			</Text>
		</Box>
	);
};

export default DataPoint;
