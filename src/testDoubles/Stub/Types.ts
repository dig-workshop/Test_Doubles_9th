// ※このデータ型は変更しないでください
export type Weather = "SUNNY" | "RAINY"

export type WeatherRepository = {
    getWeather: () => Promise<Weather>
}

export type LaunchRocketSystem = {
    launch: () => Promise<boolean>
}
