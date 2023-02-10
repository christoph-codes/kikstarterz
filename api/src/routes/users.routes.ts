import { Request, Response } from "express";

export const createUser = (req: Request, res: Response) => {
	try {
		res.status(200).send({ status: 'Creating a Kikstarterz user' });
	} catch (err) {
		res.status(500).send({ status: 'Failed creating a Kikstarterz user' });
	}
};
export const getUser = (req: Request, res: Response) => {
	try {
		res.status(200).send({ status: 'Getting a Kikstarterz user' });
	} catch (err) {
		res.status(500).send({ status: 'Failed getting a Kikstarterz user' });
	}
};
export const updateUser = (req: Request, res: Response) => {
	try {
		res.status(200).send({ status: 'Updating a Kikstarterz user' });
	} catch (err) {
		res.status(500).send({ status: 'Failed updating a Kikstarterz user' });
	}
};
export const deleteUser = (req: Request, res: Response) => {
	try {
		res.status(200).send({ status: 'Deleting a Kikstarterz user' });
	} catch (err) {
		res.status(500).send({ status: 'Failed deleting a Kikstarterz user' });
	}
};