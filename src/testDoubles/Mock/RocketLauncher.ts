import type {Auth, LaunchRocketSystem, Rocket} from "./Types.js";

export class RocketLauncherImpl implements LaunchRocketSystem {

    launch(rocket: Rocket, auth: Auth): void {
        // テストが通るように修正してください
        rocket.fire()
    }
}
