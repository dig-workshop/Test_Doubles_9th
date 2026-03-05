import {DummyRocket} from './DummyRocket'
import {RocketLauncherImpl} from '../RocketLauncher'
import {StubFailureAuth} from "./StubAuth";
import { describe, it } from "vitest";


describe('RocketLauncherImpl（ロケット発射装置）の認証機能のテスト', () => {

    // まずは Dummy として正しく機能するよう、DummyRocket を実装しましょう。
    // 正しく実装できたら、RocketLauncherImpl の実装前はエラーでこのテストが落ちるはずです。
    it('認証が通らなかった場合、ロケットは発射されない', () => {

        const dummyRocket = new DummyRocket()
        const stubFailureAuth = new StubFailureAuth()
        const rocketLauncher = new RocketLauncherImpl()

        // アサーションはありませんが、ダミーロケットが発射されなければエラーは出ずテストが通ります
        rocketLauncher.launch(dummyRocket, stubFailureAuth)
    })
})
