import { Request, Response } from "express";

export const createAthlete = (req: Request, res: Response) => {
	try {
		res.status(200).send({ status: 'Creating a Kikstarterz Athlete' });
	} catch (err) {
		res.status(500).send({ status: 'Failed creating a Kikstarterz Athlete' });
	}
};
export const getAthlete = (req: Request, res: Response) => {
	try {
		res.status(200).send({ status: 'Getting a Kikstarterz Athlete' });
	} catch (err) {
		res.status(500).send({ status: 'Failed getting a Kikstarterz Athlete' });
	}
};
export const updateAthlete = (req: Request, res: Response) => {
	try {
		res.status(200).send({ status: 'Updating a Kikstarterz Athlete' });
	} catch (err) {
		res.status(500).send({ status: 'Failed updating a Kikstarterz Athlete' });
	}
};
export const deleteAthlete = (req: Request, res: Response) => {
	try {
		res.status(200).send({ status: 'Deleting a Kikstarterz Athlete' });
	} catch (err) {
		res.status(500).send({ status: 'Failed deleting a Kikstarterz Athlete' });
	}
};