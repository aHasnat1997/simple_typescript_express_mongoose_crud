/**
 * user name interface
 */
export interface IUserName {
    firstName: string,
    lastName: string
}

/**
 * user address interface
 */
export interface IUserAddress {
    street: string,
    city: string,
    country: string
}

/**
 * user interface
 */
export interface IUser {
    userId: number,
    username: string,
    password: string,
    fullName: IUserName,
    age: number,
    email: string,
    isActive: boolean,
    hobbies: string[],
    address: IUserAddress,
    isDelete?: boolean
}