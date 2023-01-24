import PageTemplate from "@/templates/Page";
import styles from "@/styles/Home.module.scss";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Title from "@/components/Title";
import { Box, Text } from "@chakra-ui/react";
import MailchimpSubscribeForm from "@/components/MailchimpSubscriberForm";

export default function Home() {
	return (
		<PageTemplate className={styles.Waitlist}>
			<Hero
				bgImg="/football_hero_bg.png"
				title="Athletes Elevated."
				description="The ultimate platform for made for young athletes to
							showcase their talents in a dope and modern way. Our
							goal is to highlight athletes abilities and give
							them a place to connect for the sake of growth and
							improvement."
				btnLabel="Join Waitlist"
				btnLink="#waitlist"
			/>
			<Hero
				bgImg="/swim_hero_bg.png"
				title="Connect & Showcase"
				align="left"
				theme="light"
				description="At Kikstarterz, we believe that athletes should hold
        the keys to their future versus a coach. This
        platform is made for the athletes and it will stay
        that way."
				btnLabel="Join Waitlist"
				btnLink="#waitlist"
			/>
			<Hero
				bgImg="/basketball_hero_bg.png"
				title="Any Achievement"
				description="Most sports platforms focus on a single sport or
        club but Kikstarterz will focus on you the person.
        Whether its the 8 score game you had or the Student
        Council feature, it should all live on your profile
        for those you choose to see.."
				btnLabel="Join Waitlist"
				btnLink="#waitlist"
				theme="light"
			/>
			<Section>
				<Box maxWidth={{ base: "100%", md: "50%" }} marginX="auto">
					<Title color="brand.primary.default" textAlign="center">
						Join The Waitlist
					</Title>
					<Text fontSize="xl">
						{`We're thrilled to announce that Kikstarterz is currently in
					development. To ensure the best possible experience for you,
					we're inviting a select group of individuals to join our
					early access waitlist. Give us your email to be apart of
					this select group.`}
					</Text>
					<MailchimpSubscribeForm />
				</Box>
			</Section>
		</PageTemplate>
	);
}
