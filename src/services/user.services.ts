import { IUser } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model";

/**
 * create user into DB
 * @param data user json data
 * @returns promise user created data
 */
export const CerateUserIntoBD = async (data: IUser): Promise<IUser> => {
    const result = await UserModel.create(data);
    return result;
}

/**
 * get all user from DB
 * @returns promise all user data
 */
export const GetAllUserFromBD = async (): Promise<IUser[]> => {
    const result = await UserModel.find();
    return result;
}

