import { Request, Response } from "express";
import { auth, db } from "../config/firebase";

export const createAthlete = (req: Request, res: Response) => {
	console.log("Creating an athlete...");
	const {
		fname,
		lname,
		email,
		username,
		sports,
		location,
		password,
		birthday,
	} = req.body.user;
	if (
		!fname ||
		!lname ||
		!email ||
		!username ||
		!sports ||
		!password ||
		!location ||
		!birthday
	) {
		res.status(400).send({
			error: "You must provide all necessary data to create an account",
		});
		return;
	}
	try {
		auth.createUser({
			email,
			password,
			displayName: `${fname} ${lname}`,
		})
			.then((userRecord) => {
				db.collection("athletes")
					.doc(username)
					.set({
						uid: userRecord.uid,
						username,
						email,
						fname,
						lname,
						sports: sports.map((sport: any) => {
							return {
								name: sport,
								stats: [],
							};
						}),
						location,
						birthday,
						about: "",
						height: "",
						weight: "",
						class: "",
						profilePhoto: "",
						studying: "",
						currentTeams: [""],
						gpa: 0,
						sat: 0,
						act: 0,
						honorsClasses: 0,
						apClasses: 0,
						highlightVideoUrl: "",
						actionPhotoUrl: "",
						subscriptionType: "free",
						topStat: "",
					})
					.then((athleteRecord) => {
						res.status(200).send({
							status: `success`,
							data: athleteRecord,
						});
						return;
					})
					.catch((err) => {
						res.status(400).send({ error: err.message });
						return;
					});
			})
			.catch((err) => {
				res.status(400).send({ error: err.message });
				return;
			});
	} catch (err) {
		res.status(500).send({ status: "Failed connecting to the database" });
		return;
	}
};

export const getAthlete = async (req: Request, res: Response) => {
	console.log("Getting athlete...");
	const { username } = req.params;
	try {
		const athlete = db
			.collection("athletes")
			.where("username", "==", username);
		const chosenAthlete = await athlete.get();
		if (chosenAthlete.empty) {
			res.status(400).send({
				error: "This athlete does not exist in our database",
			});
			return;
		}
		chosenAthlete.forEach((ath) => {
			res.status(200).send({ status: "success", data: ath.data() });
			return;
		});
		return;
	} catch (err) {
		res.status(500).send({
			error: "Failed getting a Kikstarterz Athlete",
		});
		return;
	}
};

export const updateAthlete = (req: Request, res: Response) => {
	try {
		res.status(200).send({ status: "Updating a Kikstarterz Athlete" });
	} catch (err) {
		res.status(500).send({
			status: "Failed updating a Kikstarterz Athlete",
		});
	}
};

export const deleteAthlete = (req: Request, res: Response) => {
	try {
		res.status(200).send({ status: "Deleting a Kikstarterz Athlete" });
	} catch (err) {
		res.status(500).send({
			status: "Failed deleting a Kikstarterz Athlete",
		});
	}
};
