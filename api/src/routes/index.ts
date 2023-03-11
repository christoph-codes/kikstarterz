import express from "express";
import healthcheck from "./healthcheck.routes";
import {
	createAthlete,
	getAthlete,
	updateAthlete,
	deleteAthlete,
	getAthleteByUID,
	verifyAthleteUsername,
} from "./athletes.routes";
import {
	createQuote,
	getQuote,
	updateQuote,
	deleteQuote,
} from "./quotes.routes";
import { checkAuth, issueToken } from "./auth.routes";

const router = express.Router();

router.get("/healthcheck", healthcheck);

router.get("/auth", checkAuth);
router.get("/auth/serve", issueToken);

// Athletes
router.post("/athletes/create", createAthlete);
router.get("/athletes/:username", getAthlete);
router.post("/athletes/single", getAthleteByUID);
router.post("/athletes/verify-username", verifyAthleteUsername);
router.post("/athletes/update", checkAuth, updateAthlete);
router.post("/athletes/delete", checkAuth, deleteAthlete);

// Quotes
router.post("/quotes/create", checkAuth, createQuote);
router.get("/quotes/:username", getQuote);
router.post("/quotes/update", checkAuth, updateQuote);
router.post("/quotes/delete", checkAuth, deleteQuote);

export default router;
