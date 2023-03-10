import { FC } from "react";
import { useRouter } from "next/router";
import { CloseIcon, Icon } from "@chakra-ui/icons";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";
import { facebookLink, instagramLink, navigationLinks } from "@/utils/navLinks";
import NavLink from "@/components/NavLink";
import styles from "./Sidenav.module.scss";

export type TSideNav = {
	isOpen?: boolean;
	className?: string;
	toggleSideNav: () => void;
	rest?: any[];
};

const SideNav: FC<TSideNav> = ({
	isOpen,
	toggleSideNav,
	className,
	...rest
}) => {
	const { pathname } = useRouter();
	return (
		<aside
			className={`${styles.SideNav} ${className} ${
				isOpen ? styles.SideNav__isOpen : ""
			}`}
			{...rest}
		>
			<button
				className={styles.SideNav__close}
				type="button"
				onClick={() => toggleSideNav()}
			>
				<CloseIcon boxSize={8} color="currentColor" />
			</button>
			{navigationLinks?.map((item, index) => {
				const isLinkActive = pathname === item.href;
				return (
					<NavLink
						key={index}
						href={item.href}
						onClick={() => toggleSideNav()}
						cta={item.cta}
						target={item.cta ? "_blank" : "_self"}
						className={`${
							!item.cta
								? styles[
										`SideNav__link${
											isLinkActive ? "--active" : ""
										}`
								  ]
								: ""
						} ${styles.SideNav__link} ${
							item.cta && styles.SideNav__CTA
						}`}
					>
						{item.children}
					</NavLink>
				);
			})}
			<Flex justifyContent="center">
				<NavLink href={facebookLink}>
					<Icon
						_hover={{ color: "brand.secondary.hover" }}
						boxSize={8}
						as={FaFacebook}
					/>
				</NavLink>
				<NavLink href={instagramLink}>
					<Icon
						_hover={{ color: "brand.secondary.hover" }}
						boxSize={8}
						as={FaInstagram}
					/>
				</NavLink>
			</Flex>
		</aside>
	);
};

export default SideNav;
