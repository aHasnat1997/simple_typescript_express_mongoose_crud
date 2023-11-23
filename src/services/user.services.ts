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
    const result = await UserModel.aggregate([
        {
            $project: {
                _id: 0,
                password: 0,
                "fullName._id": 0,
                "__v": 0
            }
        }
    ]);
    return result;
}

/**
 * get single user from DB using userId
 * @param id userId
 * @returns promise all user data
 */
export const GetSingleUserFromBD = async (id: number): Promise<IUser | null> => {
    const result = await UserModel.aggregate([
        { $match: { userId: id } },
        {
            $project: {
                _id: 0,
                password: 0,
                "fullName._id": 0,
                "__v": 0
            }
        }
    ]);
    return result[0];
}

/**
 * update single user in DB using userId
 * @param id userId
 * @returns promise all user data
 */
export const updateSingleUserIntoBD = async (id: number, data: IUser): Promise<IUser | null> => {
    const result = await UserModel.findOneAndUpdate({ userId: id }, data, { runValidators: true, new: true });
    return result;
}