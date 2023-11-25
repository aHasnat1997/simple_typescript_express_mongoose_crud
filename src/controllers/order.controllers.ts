/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { CerateOrderIntoDB, GetOrderFromDB, GetTotalPriceFromDB } from "../services/order.services";


/**
 * create a order in DB
 * @param req request obj
 * @param res api response
 */
export const CreateOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = Number(req.params.userId)
        const data = req.body;
        const orderData = { userId, order: data }
        await CerateOrderIntoDB(orderData);
        res.status(200).json({
            success: true,
            message: 'Order created successfully 👍',
            data: null
        })
    } catch (error: any) {
        console.log(`error=====================>${error}<=====================error`);
        res.status(400).json({
            success: false,
            message: 'Order is not created ✖️',
            error: {
                code: 400,
                description: error.message
            }
        });
    }
};

/**
 * get user order from DB
 * @param req request obj
 * @param res api response
 */
export const GetOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = Number(req.params.userId)
        const result = await GetOrderFromDB(userId);
        if (result.length === 0) {
            res.status(200).json({
                success: true,
                message: 'Order fetched successfully 👍',
                data: 'No order found'
            })
        }
        else {
            res.status(200).json({
                success: true,
                message: 'Order fetched successfully 👍',
                data: result.map(data => data.order)
            })
        }
    } catch (error: any) {
        console.log(`error=====================>${error}<=====================error`);
        res.status(400).json({
            success: false,
            message: 'Order not fetched ✖️',
            error: {
                code: 400,
                description: error.message
            }
        });
    }
};

/**
 * get user order total price from DB
 * @param req request obj
 * @param res api response
 */
export const GetTotalPrice = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = Number(req.params.userId)
        const result = await GetTotalPriceFromDB(userId);
        if (result) {
            res.status(200).json({
                success: true,
                message: 'Total price calculated successfully 👍',
                data: result
            })
        }
        else {
            res.status(200).json({
                success: true,
                message: 'Total price calculated successfully 👍',
                data: {
                    totalPrice: 0
                }
            })
        }
    } catch (error: any) {
        console.log(`error=====================>${error}<=====================error`);
        res.status(400).json({
            success: false,
            message: 'Total price calculated not ✖️',
            error: {
                code: 400,
                description: error.message
            }
        });
    }
};