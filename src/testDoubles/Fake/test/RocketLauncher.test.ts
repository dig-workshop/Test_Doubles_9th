import { describe, it, expect } from "vitest";
import FakeAuthServer from "./FakeAuthServer.js";
import {SpyRocket} from "./SpyRocket.js";
import {RocketLauncherImpl} from "../RocketLauncher.js";


describe('ロケット発射システムのテスト', ()=>{

    // まずは FakeAuthServer を実装して、このテストが通るようにしましょう。
    describe('フェイク認証サーバーのテスト', () => {
        it('ユーザーがログイン済みの場合、ユーザー情報を返す', async () => {

            const fakeAuthServer = new FakeAuthServer()
            fakeAuthServer.login("user001")

            const user = await fakeAuthServer.getUser("user001")

            expect(user).toEqual({name: "user name", email: "example@mail.com"})
        })

        it('ユーザーがログイン済みでない場合、undefinedを返す', async () => {

            const fakeAuthServer = new FakeAuthServer()

            const user = await fakeAuthServer.getUser("user001")

            expect(user).toBeUndefined()
        })
    })

    // FakeAuthServer を正しく実装できたら、 RocketLauncherImpl を実装して、このテストが通るようにしましょう。
    describe('RocketLauncherImpl のテスト', () => {
        it('ログイン済ユーザがロケット発射すると、ロケットが発射される', async () => {

            const fakeAuthServer = new FakeAuthServer()
            const spyRocket = new SpyRocket()
            const rocketLauncher = new RocketLauncherImpl(spyRocket, fakeAuthServer)
            rocketLauncher.login("user001")

            await rocketLauncher.launchByAuthenticatedUser("user001")

            expect(spyRocket.fire_wasCalled).toBeTruthy()
        })

        it('未ログインユーザがロケット発射すると、ロケットが発射されない', async () => {

            const fakeAuthServer = new FakeAuthServer()
            const spyRocket = new SpyRocket()
            const rocketLauncher = new RocketLauncherImpl(spyRocket, fakeAuthServer)
            rocketLauncher.login("user001")

            await rocketLauncher.launchByAuthenticatedUser("userXXX")

            expect(spyRocket.fire_wasCalled).not.toBeTruthy()
        })
    })
})