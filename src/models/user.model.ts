import { Schema, model } from "mongoose";
import { IUser, IUserAddress, IUserName } from "../interfaces/user.interface";
import bcrypt from 'bcrypt';
import config from "../config";

/**
 * user name schema
 */
const UserNameSchema = new Schema<IUserName>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
});

/**
 * user address schema
 */
const UserAddressSchema = new Schema<IUserAddress>({
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true }
});

/**
 * user schema
 */
const UserSchema = new Schema<IUser>({
    userId: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: UserNameSchema, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    isActive: { type: Boolean, required: true, default: true },
    hobbies: { type: [String], required: true },
    address: { type: UserAddressSchema, required: true },
    isDelete: { type: Boolean, default: false }
});

/**
 * response json object
 * @returns response json
 */
UserSchema.methods.toJSON = function () {
    const userData = this.toObject()
    delete userData.password;
    delete userData._id;
    delete userData.fullName._id;
    delete userData.address._id;
    delete userData.__v;
    delete userData.isDelete;
    return userData;
};

/**
 * find all user but not deleted user
 */
UserSchema.pre('find', function (next) {
    this.find({ isDelete: { $ne: true } });
    next();
});

/**
 * find single user but not deleted user
 */
UserSchema.pre('findOne', function (next) {
    this.find({ isDelete: { $ne: true } });
    next();
});

/**
 * update single user but not deleted user
 */
UserSchema.pre('findOneAndUpdate', function (next) {
    this.find({ isDelete: { $ne: true } });
    next();
});

/**
 * hash password before save in DB
 */
UserSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt))
    next();
});

/**
 * user model
 */
export const UserModel = model<IUser>('user', UserSchema);