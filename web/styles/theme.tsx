import { extendTheme } from "@chakra-ui/react";

const colors = {
	brand: {
		primary: {
			default: "#F8C400",
			hover: "#ffd334",
			light: "#fffae7",
			dark: "#433400",
		},
		black: {
			default: "#000000",
			light: "#1E1E1E",
		},
		white: {
			default: "#FFFFFF",
			light: "#F1F1F1",
		},
	},
};
const fonts = {
	body: "'Kanit', sans-serif",
	heading: `'Kanit', sans-serif`,
};

const theme = extendTheme({ colors, fonts });

export default theme;
