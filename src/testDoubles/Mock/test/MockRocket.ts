import type {Rocket} from "../Types.js";

export class MockRocket implements Rocket {
    private fire_wasCalled = false
    fire(): void {
        // リファクタリング後のテストが通るように実装してください
    }

    private abort_wasCalled = false
    abort(): void {
        // リファクタリング後のテストが通るように実装してください
    }

    verifyTrigger() {
        // リファクタリング後のテストが通るように実装してください
    }

    verifyAbort() {
        // リファクタリング後のテストが通るように実装してください
    }
}