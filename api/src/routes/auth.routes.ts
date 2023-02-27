import { NextFunction, Request, Response } from "express";
import { auth } from "firebase-admin";

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
	try {
        if(req.headers.authtoken && typeof req.headers.authtoken === 'string') {
            auth().verifyIdToken(req.headers.authtoken)
            .then((decodedToken) => {
                console.log('Got in!', req.body.loggedInUid);
                req.body.loggedInUid = decodedToken.uid;
                next();
            })
            .catch((err) => {
                res.status(403).send({ error: err});
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
        auth().createCustomToken(uid).then(token => {
            res.status(200).send({ status: 'success', token});
            // TODO: Issue token to headers for verifying
        }).catch(err => {
            res.status(400).send({ error: err});
        })
    } catch(err) { 
        res.status(500).send({ error:  err})
    }
}
