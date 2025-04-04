import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { createPost,deletePost,commentOnPost,likeUnlikePost,getAllPosts,getLikedPosts,getFollowingPosts,getUserPosts,deleteComment} from "../controllers/post.controller.js";
 

const router = express.Router();
router.get("/user/:username",protectRoute,getUserPosts);
router.get("/following", protectRoute, getFollowingPosts);
router.get("/all",protectRoute,getAllPosts)
router.get("/likes/:id",protectRoute,getLikedPosts)
router.post("/create",protectRoute,createPost)

router.post("/like/:id",protectRoute,likeUnlikePost)
router.post("/comment/:id",protectRoute,commentOnPost)
router.delete("/:postId/comments/:commentId", protectRoute, deleteComment);

router.delete("/:id",protectRoute,deletePost)
export default router