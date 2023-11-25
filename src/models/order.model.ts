import { Schema, model } from "mongoose";
import { IOrderObj } from "../interfaces/order.interface";

/**
 * orders object schema
 */
const OrdersObjSchema = new Schema<IOrderObj>({
    userId: {
        type: Number,
        required: [true, 'product is required'],
        trim: true
    },
    order: {
        productName: {
            type: String,
            required: [true, 'product is required'],
            trim: true
        },
        price: {
            type: Number,
            required: [true, 'product is required'],
            trim: true
        },
        quantity: {
            type: Number,
            required: [true, 'product is required'],
            default: 0,
            trim: true
        }
    }
});

/**
 * response json object
 * @returns response json
 */
OrdersObjSchema.methods.toJSON = function () {
    const orderData = this.toObject()
    delete orderData.userId
    delete orderData._id;
    delete orderData.__v;
    return orderData;
};

/**
 * order model
 */
export const OrderModel = model<IOrderObj>('order', OrdersObjSchema);