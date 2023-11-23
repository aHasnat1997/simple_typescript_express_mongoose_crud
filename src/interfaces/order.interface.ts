/**
 * orders object interface
 */
export interface IOrderObj {
    userId: number
    order: {
        productName: string,
        price: number,
        quantity: number
    }
}