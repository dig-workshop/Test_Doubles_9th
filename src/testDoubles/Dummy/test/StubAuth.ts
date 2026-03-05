import {Auth} from "../Types";

export class StubFailureAuth implements Auth{
    authenticate(): boolean {
        return false
    }
}