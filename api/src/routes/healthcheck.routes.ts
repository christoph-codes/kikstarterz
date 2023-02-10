import { Request, Response } from "express";

const healthcheck = (req: Request, res: Response) => {
	try {
		res.status(200).send({ status: 'Welcome to Kikstarterz' });
	} catch (err) {
		res.status(500).send({ status: 'Everything is NOT healthy' });
	}
};
export default healthcheck;