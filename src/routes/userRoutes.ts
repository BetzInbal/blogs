import { Router } from "express";
import { createUser, getUserByName, getUsers } from "../controllers/userController";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/", getUsers);
userRouter.get("/:username", getUserByName);

export default userRouter;
