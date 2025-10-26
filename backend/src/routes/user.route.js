import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMyFriends,getRecommendedUser,getOutgoingFriendReqs,sendFriendRequest,getFriendRequests ,acceptFriendRequest} from "../controllers/users.controller.js";

const router=express.Router();


router.use(protectRoute);


router.get("/",getRecommendedUser);
router.get("/friends",getMyFriends);

router.post("/friend-request/:id",sendFriendRequest);
router.put("/friend-request/:id/accept",acceptFriendRequest);

router.get("/friend-requests",getFriendRequests);
router.get("/outgoing-friend-requests",getOutgoingFriendReqs);
export default router;