export enum Profile {
    ADMIN = 1,
    USER = 2,
    REVIEWER = 3
}

export class User {
    name: string;
    email: string;
    password: string;
    profile: Profile
}