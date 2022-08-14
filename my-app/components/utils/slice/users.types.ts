export interface IUsers {
    address: {
        geolocation: {
            lat: string,
            long: string,
        },
        city: string,
        street: string,
        number: number,
        zipcode: number,
    },
    id: number,
    email: string,
    username: string,
    password: string,
    name: {
        firstname: string,
        lastname: string,
    },
    phone: string,
    __v: number,
}