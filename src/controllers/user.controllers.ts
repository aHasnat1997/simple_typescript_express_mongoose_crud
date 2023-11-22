/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { CerateUserIntoBD } from '../services/user.services';

/**
 * create a user in DB
 * @param req request obj
 * @param res api response
 */
export const createUser = async (req: Request, res: Response): Promise<void> => {
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