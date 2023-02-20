import { NextFunction, Request, Response } from "express";
import admin from "../config/firebase";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
	try {
        if(req.headers.authtoken && typeof req.headers.authtoken === 'string') {
            admin.auth.verifyIdToken(req.headers.authtoken)
            .then(() => {
                console.log('Got in!');
                next();
            })
            .catch(() => {
                res.status(403).send('Unauthorized');
            })
        } else {
            console.log('Not in!');
            res.status(403).send({ status: 'Unauthorized Kikstarterz Auth' });
        }
	} catch (err) {
		res.status(500).send({ status: 'Failed checking a Kikstarterz Auth' });
	}
};

export const issueToken = (req: Request, res: Response) => {
    try {
        const {uid} = req.body.user;
        admin.auth.createCustomToken(uid).then(token => {
            res.status(200).send({ status: 'success', token});
            // TODO: Issue token to headers for verifying
        }).catch(err => {
            res.status(400).send({ error: err});
        })
    } catch(err) { 
        res.status(500).send({ error:  err})
    }
}
