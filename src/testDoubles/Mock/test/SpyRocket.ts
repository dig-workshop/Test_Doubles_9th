import {Rocket} from '../Types'
export default class SpyRocket implements Rocket {
    fire_wasCalled: boolean = false
    fire(): void {
        // Spy の役割を果たすように実装してください
    }

    abort_wasCalled: boolean = false
    abort(): void {
        // Spy の役割を果たすように実装してください
    }
}