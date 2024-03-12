import express, { Router } from "express";
import createTweet_controller from "../../controllers/createTweet_controller";
import suggestTweets_contreoller from "../../controllers/suggestTweets_contreoller";

const router:Router=express.Router();

router.post("/createTweet",createTweet_controller);
router.post("/suggestion",suggestTweets_contreoller);
export default router;

