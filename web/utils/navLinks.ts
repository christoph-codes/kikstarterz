import { INavLinkProps, ISubNavLink } from "@/components/NavLink";

export const ctaLink = "/signup";
export const facebookLink =
	"https://www.facebook.com/kikstarterz";
export const instagramLink = "https://www.instagram.com/kikstarterz/";
export const youtubeLink = "https://www.youtube.com/@kikstarterz/";

export const homepagePath: "/home" | "/" = "/";

export const navigationLinks: INavLinkProps[] = [
	{
		children: "Home",
			href: homepagePath,
	},
	{
			children: "Pricing",
			href: "/pricing",
	},
	{
			children: "Careers",
			href: "/careers",
	},
	{
			children: "Contact",
			href: "/contact",
	},
	{
			children: "Sign up",
			href: "/signup",
        cta: true,
	},
];

export const utilityLinks: ISubNavLink[] = [
	{
			label: "Privacy Policy",
			path: "/privacy-policy",
	},
	{
			label: "Terms of Service",
			path: "/terms",
	},
];