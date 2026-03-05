import {Rocket} from "../Types";

export class SpyRocket implements Rocket {
    fire_wasCalled = false
    fire() {
        // Spy の役割を果たすように実装してください
    }
}