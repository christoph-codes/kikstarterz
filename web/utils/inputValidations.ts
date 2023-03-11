import { kikapi } from "./helpers";
export const EErrorMessages = {
	REQUIRED: "This field is required",
	OVERFIVE: "Value must be over five characters",
	EMAIL: "Please enter a valid email",
	CHECK_USERNAME: "This username has already been taken",
} as const;

export type EErrorMessages = typeof EErrorMessages;

// All functions must either return true or the error message in which failed.
const inputValidations = {
	REQUIRED(value: any) {
		if (value === "") {
			return EErrorMessages.REQUIRED;
		}
		return "";
	},
	OVERFIVE(value: any) {
		if (value?.length < 5) {
			return EErrorMessages.OVERFIVE;
		}
		return "";
	},
	EMAIL(value: any) {
		const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
		if (!pattern.test(value)) {
			return EErrorMessages.EMAIL;
		}
		return "";
	},
	CHECK_USERNAME: async (value: any): Promise<string> => {
		return kikapi
			.post("/api/athletes/verify-username", { username: value })
			.then((res) => {
				if (res.status === 200) {
					return "";
				}
			})
			.catch((err) => {
				return err.response.data.error;
			});
	},
};

export default inputValidations;
