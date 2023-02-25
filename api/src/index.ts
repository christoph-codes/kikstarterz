import express from "express";
import routes from "./routes";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 5555;

app.use((req, res, next) => {
	// Set headers for localhost
	if (process.env.NODE_ENV === "development") {
		res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
		res.setHeader(
			"Access-Control-Allow-Methods",
			"GET, POST, PUT, DELETE, OPTIONS"
		);
		res.setHeader(
			"Access-Control-Allow-Headers",
			"Content-Type, Authorization"
		);
	}
	// Set headers for production domain
	else {
		res.setHeader("Access-Control-Allow-Origin", "https://kikstarterz.com");
		res.setHeader(
			"Access-Control-Allow-Methods",
			"GET, POST, PUT, DELETE, OPTIONS"
		);
		res.setHeader(
			"Access-Control-Allow-Headers",
			"Content-Type, Authorization"
		);
	}
	next();
});

// Middleware (Body parser no longer needed)
app.use(express.json());

app.use("/api", routes);

app.get("*", (req, res) => {
	// res.sendFile(path.join(`${__dirname}/build/index.html`));
	// Catch all route that just throws a 404 error.
	res.status(404).send("This is not a valid url you are trying to reach");
});

app.listen(port, () => {
	console.log(`App running on port ${port}`);
});
