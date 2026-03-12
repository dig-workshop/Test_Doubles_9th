import type {AuthServer, User} from "../Types.js";

export default class FakeAuthServer implements AuthServer {
    private authedUsers: string[] = []

    login(userId: string): void {
        this.authedUsers.push(userId)
    }

    getUser(userId: string): Promise<User | undefined> {
        // テストが通るように修正してください
        return Promise.resolve(undefined)
    }
}