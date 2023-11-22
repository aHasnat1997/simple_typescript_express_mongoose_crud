import { Router } from "express";
import { CreateUser } from "../controllers/user.controllers";

// user route created
export const UserRoute = Router();

// cerate route for user
UserRoute.post('/', CreateUser);