import {MockRocket} from './MockRocket'
import {RocketLauncherImpl} from '../RocketLauncher'
import SpyRocket from './SpyRocket'
import {StubFailureAuth, StubSuccessAuth} from "./StubAuth"

describe('ロケット発射システム（RocketLauncherImpl）のテスト', () => {

    // まずは SpyRocket を正しく実装しましょう。
    // 次に、認証成功の状態を Stub する StubSuccessAuth も実装して、このテストが通るようにしましょう。
    describe('リファクタリング前', () => {
        it('認証が通った場合、ロケットが発射されて、中止されない', () => {
            const spyRocket = new SpyRocket()
            const stubSuccessAuth = new StubSuccessAuth()
            const rocketLauncher = new RocketLauncherImpl()

            rocketLauncher.launch(spyRocket, stubSuccessAuth)

            expect(spyRocket.fire_wasCalled).toBeTruthy()
            expect(spyRocket.abort_wasCalled).toBeFalsy()
        })

        // 上のテストが通ったら、認証失敗の状態を Stub する StubFailureAuth も実装しましょう。
        it('認証が通らなかった場合、ロケットが発射れず、中止される', () => {
            const spyRocket = new SpyRocket()
            const stubFailureAuth = new StubFailureAuth()
            const rocketLauncher = new RocketLauncherImpl()

            rocketLauncher.launch(spyRocket, stubFailureAuth)

            expect(spyRocket.fire_wasCalled).toBeFalsy()
            expect(spyRocket.abort_wasCalled).toBeTruthy()
        })
    })


    // 今度は MockRocket を使って上のテストのリファクタリングをしたいのですが、
    // MockRocket が何も実装されていないので、そのままでテストが通ってしまいます。
    // テストしたい内容に沿った Mock となるように正しく実装してください。
    describe('リファクタリング後', () => {
        it('認証が通った場合、ロケットが発射されて、中止されない', () => {
            const mockRocket = new MockRocket()
            const stubSuccessAuth = new StubSuccessAuth()
            const rocketLauncher = new RocketLauncherImpl()

            rocketLauncher.launch(mockRocket, stubSuccessAuth)

            mockRocket.verifyTrigger()
        })

        it('認証が通らなかった場合、ロケットが発射さず、中止される', () => {
            const mockRocket = new MockRocket()
            const stubFailureAuth = new StubFailureAuth()
            const rocketLauncher = new RocketLauncherImpl()

            rocketLauncher.launch(mockRocket, stubFailureAuth)

            mockRocket.verifyAbort()
        })
    })
})

