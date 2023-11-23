import { Router } from "express";
import { CreateUser, DeleteSingleUser, GetAllUser, GetSingleUser, UpdateSingleUser } from "../controllers/user.controllers";

// user route created
export const UserRoute = Router();

// cerate route for user
UserRoute.post('/', CreateUser);

// get all user route
UserRoute.get('/', GetAllUser);

// get single user route
UserRoute.get('/:userId', GetSingleUser);

// update user route
UserRoute.put('/:userId', UpdateSingleUser);

// delete user route
UserRoute.delete('/:userId', DeleteSingleUser);