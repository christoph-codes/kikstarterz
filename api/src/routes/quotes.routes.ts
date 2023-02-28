import { Request, Response } from "express";
import { db } from "../config/firebase";

export const createQuote = (req: Request, res: Response) => {
	try {
		res.status(200).send({ status: "Creating a Kikstarterz Quote" });
	} catch (err) {
		res.status(500).send({ status: "Failed creating a Kikstarterz Quote" });
	}
};
export const getQuote = async (req: Request, res: Response) => {
	console.log("Getting Quotes!");
	const { username } = req.params;
	try {
		const athlete = db.collection("quotes").where("user", "==", username);
		const allQuotes: any[] = [];
		await athlete.get().then((snapshot) => {
			snapshot.forEach((doc) => doc.data());
		});
		res.status(200).send({ status: "success", data: allQuotes });
	} catch (err) {
		res.status(500).send({
			error: "Failed getting a Kikstarterz Athlete Quotes",
		});
		return;
	}
};
export const updateQuote = (req: Request, res: Response) => {
	try {
		res.status(200).send({ status: "Updating a Kikstarterz Quote" });
	} catch (err) {
		res.status(500).send({ status: "Failed updating a Kikstarterz Quote" });
	}
};
export const deleteQuote = (req: Request, res: Response) => {
	try {
		res.status(200).send({ status: "Deleting a Kikstarterz Quote" });
	} catch (err) {
		res.status(500).send({ status: "Failed deleting a Kikstarterz Quote" });
	}
};
