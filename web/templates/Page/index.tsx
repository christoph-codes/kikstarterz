import { ReactNode, FC } from "react";
import { useRouter } from "next/router";
import { StaticImageData } from "next/image";
import Head from "next/head";
import styles from "./Page.module.scss";
// import AnnouncementBar from "../../components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import PoweredBy from "@/components/PoweredBy";
import Container from "@/components/Container";
import { Box } from "@chakra-ui/react";

export type PageProps = {
	className?: string;
	metaTitle?: string;
	metaDescription?: string;
	metaImage?: string | StaticImageData | any;
	children: ReactNode;
	container?: boolean;
};
/**
 * 'Page Template: Use this template to establish the Green Iguana layout and structure of all `pages`.'
 */
const PageTemplate: FC<PageProps> = ({
	className,
	metaTitle = "Kikstarterz » Athletes Elevated",
	metaImage = "/kikstarterz_seo.png",
	metaDescription = "The dopest platform made for young athletes to showcase their achievements and talents.",
	children,
	container,
}) => {
	const router = useRouter();
	const domain = "https://kikstarterz.com";
	const url = router && router.asPath ? router.asPath : undefined;
	const canonical = url && url === "/" ? domain : domain + url;
	return (
		<>
			<Head>
				<title>{metaTitle}</title>
				<meta charSet="utf-8" />
				<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
				<meta
					content="width=device-width, initial-scale=1"
					name="viewport"
				/>
				{metaDescription && (
					<meta content={metaDescription} name="description" />
				)}
				<meta content="follow, index" name="robots" />
				<meta content="brand.primary.default" name="theme-color" />
				<meta
					content="brand.primary.default"
					name="msapplication-TileColor"
				/>
				<link
					href="/favicon@3x.png"
					rel="apple-touch-icon"
					sizes="180x180"
				/>
				<link
					href="/favicon@2x.png"
					rel="icon"
					sizes="32x32"
					type="image/png"
				/>
				<link
					href="/favicon.png"
					rel="icon"
					sizes="16x16"
					type="image/png"
				/>
				<link href="/favicon.ico" rel="shortcut icon" />

				{url && <link href={canonical} rel="canonical" />}
				<meta content="en_US" property="og:locale" />
				<meta content={metaTitle} property="og:title" />
				<meta content={metaDescription} property="og:description" />
				<meta content={canonical} property="og:url" />
				<meta content={metaImage} property="og:image" />
				<meta content="summary_large_image" name="twitter:card" />
				<meta content={metaDescription} property="og:image:alt" />
			</Head>
			{/* <AnnouncementBar>
				<strong>OPENING SOON!</strong>
				<br /> 7575 Norman Rockwell Ln, Suite 120 | 702.395.3349
			</AnnouncementBar> */}
			{/* <Navigation links={navigationLinks} /> */}
			<Header />
			<Box
				padding={{ base: "0 16px", md: "0 32px" }}
				as="main"
				className={`${styles.PageTemplate} ${className}`}
			>
				{container ? <Container>{children}</Container> : children}
			</Box>
			<Footer />
			{/* <PoweredBy /> */}
		</>
	);
};

export default PageTemplate;
