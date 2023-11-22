/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { CerateUserIntoBD, GetAllUserFromBD, GetSingleUserFromBD, updateSingleUserIntoBD } from '../services/user.services';

/**
 * create a user in DB
 * @param req request obj
 * @param res api response
 */
export const CreateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData = req.body;
        const result = await CerateUserIntoBD(userData);
        res.status(200).json({
            success: true,
            message: 'User created successfully 👍',
            data: result
        })
    } catch (error: any) {
        console.log(`error=====================>${error}<=====================error`);
        res.status(400).json({
            success: false,
            message: 'User is not created ✖️',
            error: {
                code: 400,
                description: error.message
            }
        });
    }
}

/**
 * get all user form DB
 * @param req request obj
 * @param res api response
 */
export const GetAllUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await GetAllUserFromBD();
        res.status(200).json({
            success: true,
            message: 'Users fetched successfully 👍',
            data: result
        })
    } catch (error: any) {
        console.log(`error=====================>${error}<=====================error`);
        res.status(404).json({
            success: false,
            message: 'No user found ✖️',
            error: {
                code: 404,
                description: error.message
            }
        });
    }
}

/**
 * get single user form DB by userId
 * @param req request obj
 * @param res api response
 */
export const GetSingleUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.userId);
        const result = await GetSingleUserFromBD(id);
        if (result === null) {
            res.status(404).json({
                success: false,
                message: 'No user found ✖️',
                data: result
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Users fetched successfully 👍',
                data: result
            });
        }
    } catch (error: any) {
        console.log(`error=====================>${error}<=====================error`);
        res.status(404).json({
            success: false,
            message: 'No user found ✖️',
            error: {
                code: 404,
                description: error.message
            }
        });
    }
}

/**
 * update single user in DB
 * @param req request obj
 * @param res api response
 */
export const UpdateSingleUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = parseInt(req.params.userId);
        const data = req.body;
        const result = await updateSingleUserIntoBD(id, data);
        if (result === null) {
            res.status(404).json({
                success: false,
                message: 'No user found for update ✖️',
                data: result
            });
        } else {
            res.status(200).json({
                success: true,
                message: 'Users update successfully 👍',
                data: result
            });
        }
    } catch (error: any) {
        console.log(`error=====================>${error}<=====================error`);
        res.status(404).json({
            success: false,
            message: 'User not update ✖️',
            error: {
                code: 404,
                description: error.message
            }
        });
    }
}