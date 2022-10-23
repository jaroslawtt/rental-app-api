import {Apartment} from "./apartments.entity";

export class User {
    readonly username: string;
    readonly password: string;
    readonly apartments?: Array<Apartment>
}

