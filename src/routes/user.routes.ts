import { Router } from "express";
import { CreateUser, GetAllUser, GetSingleUser } from "../controllers/user.controllers";

// user route created
export const UserRoute = Router();

// cerate route for user
UserRoute.post('/', CreateUser);

// get all user route
UserRoute.get('/', GetAllUser);

// get single user route
UserRoute.get('/:userId', GetSingleUser);