import { Router } from "express";
import { CreateUser, DeleteSingleUser, GetAllUser, GetSingleUser, UpdateSingleUser } from "../controllers/user.controllers";
import { CreateOrder, GetOrder, GetTotalPrice } from "../controllers/order.controllers";

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

// cerate order route for user
UserRoute.put('/:userId/orders', CreateOrder);

// get order route for user
UserRoute.get('/:userId/orders', GetOrder);

// get order route for user
UserRoute.get('/:userId/orders/total-price', GetTotalPrice);