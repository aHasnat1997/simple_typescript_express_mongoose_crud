import { IOrderObj } from "../interfaces/order.interface";
import { OrderModel } from "../models/order.model";


/**
 * create order into DB
 * @param data order json data
 * @returns promise order created data
 */
export const CerateOrderIntoDB = async (data: IOrderObj): Promise<IOrderObj> => {
    const result = await OrderModel.create(data);
    return result;
};

/**
 * get user order from DB
 * @param data order json data
 * @returns promise order created data
 */
export const GetOrderFromDB = async (id: number): Promise<IOrderObj[] | null> => {
    const order = await OrderModel.find({ userId: id });
    return order;
};