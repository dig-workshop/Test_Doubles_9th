import {SpyRocket} from './SpyRocket'
import {RocketLauncherImpl} from '../RocketLauncher'
import {StubFailureAuth, StubSuccessAuth} from "./StubAuth";
import { describe, it, expect, vi } from "vitest";


describe('ロケット発射システム（RocketLauncherImpl）の認証機能のテスト', () => {

    // まずはこのテストが通るように、SpyRocket を実装しましょう。
    // 認証成功の状態を Stub できるよう、StubSuccessAuth も実装しましょう。
    it('認証が通った場合、ロケットが発射される', () => {
        const spyRocket = new SpyRocket()
        const stubSuccessAuth = new StubSuccessAuth()
        const rocketLauncher = new RocketLauncherImpl()

        rocketLauncher.launch(spyRocket, stubSuccessAuth)

        expect(spyRocket.fire_wasCalled).toBeTruthy()
    })

    // 上のテストで SpyRocket を正しく実装できていれば、
    // 認証失敗の状態を Stub するStubFailureAuth を実装すると、
    // このテストが通らなくなるはずです。
    // 今度はどちらのテストも通るように、rocketLauncher を修正しましょう。
    it('認証が通らなかった場合、ロケットが発射されない', () => {
        const rocketLauncher = new RocketLauncherImpl()
        const spyRocket = new SpyRocket()
        const stubFailureAuth = new StubFailureAuth()

        rocketLauncher.launch(spyRocket, stubFailureAuth)

        expect(spyRocket.fire_wasCalled).toBeFalsy()
    })

    it(`認証が通らなかった場合、ロケットが発射されない（Jestのモック関数を使った場合）。`, () => {
        const rocketLauncher = new RocketLauncherImpl()
        const spyroket = { fire: vi.fn()}
        const stubauth = { authenticate: vi.fn().mockReturnValue(false) }
        rocketLauncher.launch(spyroket, stubauth)
        expect(spyroket.fire).not.toHaveBeenCalled()
    })
})
