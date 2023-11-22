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
export interface IUserAddress {
    userId: number,
    username: string,
    password: string,
    fullName: IUserName,
    age: number,
    isActive: boolean,
    hobbies: string[],
    address: IUserAddress
}