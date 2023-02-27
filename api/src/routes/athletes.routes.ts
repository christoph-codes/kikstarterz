import { Request, Response } from "express";
import {auth, db} from '../config/firebase';

/**
 * We're creating a new user in the Firebase Authentication database, and then creating a new athlete
 * in the Firebase Firestore database
 * @param {Request} req - Request - this is the request object that contains all the information about
 * the request that was made to the server.
 * @param {Response} res - Response - This is the response object that we will use to send back data to
 * the client.
 * @returns A success object with `status`, string of success, and `data`, which is a timestamp
 */
export const createAthlete = (req: Request, res: Response) => {
	console.log('Creating an athlete...');
	const {uid, fname, lname, email, username, sports, password} = req.body.user;
	if(!uid || !fname || !lname || !email || !username || !sports || !password) {
		res.status(400).send({ status: 'You must provide all necessary data to create an account' });
		return;
	}
	try {
		auth.createUser({
			email,
			password,
			displayName: `${fname} ${lname}`,

		}).then(userRecord => {
			db.collection('athletes').doc(username).set({
				uid: userRecord.uid,
				username,
				email,
				fname,
				lname,
				sports,
				height: '',
				weight: '',
				class: '',
				profilePhoto: '',
				hometown: '',
				studying: '',
				currentTeams: [''],
				gpa: 0,
				sat: 0,
				act: 0,
				honorsClasses: 0,
				apClasses: 0,
				highlightVideoUrl: '',
				actionPhotoUrl: '',
				subscriptionType: 'free',
			}).then(athleteRecord => {
				res.status(200).send({ status: `success`, data: athleteRecord });
				return;
			}).catch(err => {
				res.status(400).send({ error: err.message });
				return;
			})
		}).catch(err => {
			res.status(400).send({ error: err.message });
			return;
		});
	} catch (err) {
		res.status(500).send({ status: 'Failed connecting to the database' });
		return;
	}
};
export const getAthlete = async (req: Request, res: Response) => {
	console.log('Getting athlete...');
	const { username } = req.params;
	try {
		const athlete = db.collection('athletes').where('username', '==', username);
		const chosenAthlete = await athlete.get();
		if(chosenAthlete.empty) {
			res.status(400).send({ error: 'This athlete does not exist in our database' });
			return;
		}
		chosenAthlete.forEach(ath => {
			res.status(200).send({ status: 'success', data: ath.data() });
			return;
		})
		return;
	} catch (err) {
		res.status(500).send({ status: 'Failed getting a Kikstarterz Athlete' });
		return;
	}
};
export const updateAthlete = async (req: Request, res: Response) => {
	console.log('Updating athlete...');
	const { updatedAthleteValues, loggedInUid } = req.body;
	console.log('loggedInUid:', loggedInUid);
	console.log('updatedAthleteValues:', updatedAthleteValues);
	if(!loggedInUid) {
		res.status(400).send({ error: 'You are not authorized to handle this transaction' });
		return;
	}
	if(!updatedAthleteValues) {
		res.status(400).send({ error: 'You changes will be updated without new values' });
		return;
	}
	try {
		const athleteRef = db.collection('athletes').doc(loggedInUid);
		await athleteRef.update({
			...updatedAthleteValues,
			lastUpdated: Date.now(),
		}).then(newAthleteRecord => {
			res.status(200).send({ status: `success`, data: newAthleteRecord });
		}).catch(err => {
			res.status(400).send({ error: err})
		})
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