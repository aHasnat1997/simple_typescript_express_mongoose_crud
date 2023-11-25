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
 * @param id user id
 * @returns promise user order
 */
export const GetOrderFromDB = async (id: number): Promise<IOrderObj[]> => {
    const order = await OrderModel.find({ userId: id });
    return order;
};

/**
 * get user order total price from DB
 * @param id user id
 * @returns promise order total price
 */
export const GetTotalPriceFromDB = async (id: number): Promise<IOrderObj[]> => {
    const order = await OrderModel.aggregate([
        { $match: { userId: id } },
        {
            $group: {
                _id: '$userId',
                totalPrice: { $sum: '$order.price' }
            }
        },
        { $project: { totalPrice: 1, _id: 0 } }
    ]);
    return order[0];
};