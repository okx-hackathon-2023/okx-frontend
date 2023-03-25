import UserStore from "./UserStore";

export default class RootStore {
    readonly userStore = new UserStore();
    // init(): {
    //     // todo load user
    // }
}

