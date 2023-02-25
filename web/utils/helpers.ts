import axios from "axios";

const kikapi = axios.create({
	baseURL:
		process.env.NODE_ENV === "development"
			? "http://localhost:5555"
			: "https://kikstarterz-api.onrender.com",
	timeout: 1000,
});

export const fetcher = (url: string) =>
	kikapi
		.get(url)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err.response.data;
		});
