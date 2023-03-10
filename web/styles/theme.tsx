import { extendTheme } from "@chakra-ui/react";
import "@fontsource/kanit/700.css";
import "@fontsource/kanit/400.css";

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
			light: "#646464",
			hover: "#1E1E1E",
		},
		white: {
			default: "#FFFFFF",
			hover: "#F1F1F1",
		},
	},
};
const fonts = {
	body: "'Kanit', sans-serif",
	heading: `'Kanit', sans-serif`,
};
const styles = {
	global: {
		p: {
			color: "brand.white.default",
			fontSize: "16px",
		},
		li: {
			color: "brand.white.default",
			fontSize: "16px",
		},
	},
};

const theme = extendTheme({ colors, fonts, styles });

export default theme;
