import { User, Profile } from "@models/UserModel";

const users: Array<User> = [
    {
        name: 'John',
        email: 'john@test.com',
        password: '123',
        profile: Profile.ADMIN
    },
    {
        name: 'Maria',
        email: 'maria@test.com',
        password: '123',
        profile: Profile.USER
    },
    {
        name: 'Robert',
        email: 'robert@test.com',
        password: '123',
        profile: Profile.REVIEWER
    }
];

export default class UserController {
    
    static list() : Array<User> {
        return users;
    }

    static insert(user: User) : boolean {
        users.push(user);
        return true;
    }
}