import {RocketLauncherImpl, WeatherRepositoryImpl} from '../RocketLauncher'
import {StubRainyWeatherRepository, StubSunnyWeatherRepository} from "./StubWeatherRepository";

describe('RocketLauncherImpl（ロケット発射装置）のテスト', () => {


    // 今の実装は WeatherRepositoryImpl を使っていますが、これはランダムに「晴れ」か「雨」を返すため、テストが安定しません。
    // まずはこの「晴れ」の時のテストが通るように、stubSunnyWeatherRepository を実装し、「晴れ」の状態を Stubしよう
    // 正しく Stub ができたら、rocketLauncher の実装を修正しましょう。
    it('天気が「晴れ」の場合、打ち上げを実行すること', async () => {
        const weatherRepository = new WeatherRepositoryImpl()
        const rocketLauncher = new RocketLauncherImpl(weatherRepository)

        const result = await rocketLauncher.launch()

        expect(result).toBeTruthy()
    })

    // 今度は「雨」の時のテストをするために、stubRainyWeatherRepository を実装し、
    // 正しく Stub ができたら、どちらのテストも通るように、rocketLauncher を再度修正しましょう。
    it('天気が「雨」の場合、打ち上げを中止すること', async () => {
        const weatherRepository = new WeatherRepositoryImpl()
        const rocketLauncher = new RocketLauncherImpl(weatherRepository)

        const result = await rocketLauncher.launch()

        expect(result).toBeFalsy()
    })
})