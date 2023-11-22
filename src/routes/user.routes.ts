import { Router } from "express";
import { CreateUser, GetAllUser } from "../controllers/user.controllers";

// user route created
export const UserRoute = Router();

// cerate route for user
UserRoute.post('/', CreateUser);

// gat all user route
UserRoute.get('/', GetAllUser);