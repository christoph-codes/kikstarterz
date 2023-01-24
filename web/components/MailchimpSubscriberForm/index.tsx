import Mailchimp from "react-mailchimp-subscribe";
import Form from "../Form";
import Title from "../Title";

const MailchimpSubscribeForm = () => {
	return (
		<>
			<Mailchimp
				url={`https://kikstarterz.us10.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&amp;id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}&amp;f_id=0038c9e5f0`}
				render={({ subscribe, status, message }: any) => {
					return (
						<>
							{status === "success" ? (
								message && (
									<Title h2 textAlign="center">
										{message}
									</Title>
								)
							) : (
								<Form
									formName="waitlist-subscribe"
									submitButton={{ children: "Join Waitlist" }}
									onSubmit={subscribe}
									inputs={[
										{
											name: "FNAME",
											placeholder: "Johnathan",
											type: "text",
											required: true,
											label: "First Name", //@ts-ignore
											validation: ["REQUIRED"],
										},
										{
											name: "LNAME",
											placeholder: "Jones",
											type: "text",
											required: true,
											label: "Last Name", //@ts-ignore
											validation: ["REQUIRED"],
										},
										{
											name: "EMAIL",
											placeholder: "john@jones.com",
											type: "email",
											required: true,
											label: "Email", //@ts-ignore
											validation: ["REQUIRED", "EMAIL"],
										},
									]}
								/>
							)}
						</>
					);
				}}
			/>
		</>
	);
};

export default MailchimpSubscribeForm;
