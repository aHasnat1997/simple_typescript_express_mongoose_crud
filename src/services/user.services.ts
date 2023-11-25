import { IUser } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model";

/**
 * create user into DB
 * @param data user json data
 * @returns promise user created data
 */
export const CerateUserIntoDB = async (data: IUser): Promise<IUser> => {
    const result = await UserModel.create(data);
    return result;
};

/**
 * get all user from DB
 * @returns promise all user data
 */
export const GetAllUserFromDB = async (): Promise<IUser[]> => {
    const result = await UserModel.find().select('-userId -isActive -hobbies');
    return result;
};

/**
 * get single user from DB using userId
 * @param id userId
 * @returns promise all user data
 */
export const GetSingleUserFromDB = async (id: number): Promise<IUser | null> => {
    const result = await UserModel.findOne({ userId: id });
    return result;
};

/**
 * update single user in DB using userId
 * @param id userId
 * @param data user update data
 * @returns promise all user data
 */
export const UpdateSingleUserIntoDB = async (id: number, data: IUser): Promise<IUser | null> => {
    const result = await UserModel.findOneAndUpdate({ userId: id }, data, { runValidators: true, new: true });
    return result;
};

/**
 * delete single user in DB using userId
 * @param id userId
 * @returns promise all user data
 */
export const DeleteSingleUserIntoDB = async (id: number): Promise<IUser | null> => {
    await UserModel.findOneAndUpdate({ userId: id }, { isDelete: true }, { new: true });
    return null;
};