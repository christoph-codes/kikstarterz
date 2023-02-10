import { Request, Response } from "express";

export const createQuote = (req: Request, res: Response) => {
	try {
		res.status(200).send({ status: 'Creating a Kikstarterz Quote' });
	} catch (err) {
		res.status(500).send({ status: 'Failed creating a Kikstarterz Quote' });
	}
};
export const getQuote = (req: Request, res: Response) => {
	try {
		res.status(200).send({ status: 'Getting a Kikstarterz Quote' });
	} catch (err) {
		res.status(500).send({ status: 'Failed getting a Kikstarterz Quote' });
	}
};
export const updateQuote = (req: Request, res: Response) => {
	try {
		res.status(200).send({ status: 'Updating a Kikstarterz Quote' });
	} catch (err) {
		res.status(500).send({ status: 'Failed updating a Kikstarterz Quote' });
	}
};
export const deleteQuote = (req: Request, res: Response) => {
	try {
		res.status(200).send({ status: 'Deleting a Kikstarterz Quote' });
	} catch (err) {
		res.status(500).send({ status: 'Failed deleting a Kikstarterz Quote' });
	}
};