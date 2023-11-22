import { Schema, model } from "mongoose";
import { IUser, IUserAddress, IUserName } from "../interfaces/user.interface";

/**
 * user name schema
 */
const userNameSchema = new Schema<IUserName>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
});

/**
 * user address schema
 */
const userAddressSchema = new Schema<IUserAddress>({
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true }
});

/**
 * user schema
 */
const userSchema = new Schema<IUser>({
    userId: { type: Number, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: userNameSchema, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    hobbies: { type: [String], required: true },
    address: { type: userAddressSchema, required: true },
});

/**
 * user model
 */
export const UserModel = model<IUser>('user', userSchema);