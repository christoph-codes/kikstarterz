import axios from "axios";

export const kikapi = axios.create({
	baseURL:
		process.env.NODE_ENV === "development"
			? "http://localhost:5555"
			: "https://kikstarterz-api.onrender.com",
	timeout: 1000,
});

export const fetcher = (url: string) => {
	return kikapi
		.get(url)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			return err.response.data;
		});
};

export const convertTimestamp = (timestamp: any) => {
	const newDate = new Date(timestamp._seconds * 1000);
	return newDate.toLocaleString("en").split(",")[0];
};
