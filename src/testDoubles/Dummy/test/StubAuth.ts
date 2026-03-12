import type {Auth} from "../Types.js";

export class StubFailureAuth implements Auth{
    authenticate(): boolean {
        return false
    }
}