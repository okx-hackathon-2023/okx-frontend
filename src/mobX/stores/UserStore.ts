import { action, computed, makeObservable, observable } from 'mobx';

import { ILocalStore } from '../interfaces';


type PrivateFields = '_isConnectedWallet';

export default class UserStore {
    constructor() {
        makeObservable<UserStore, PrivateFields>(this, {
            _isConnectedWallet: observable,
            isConnectedWallet: computed,

            connectWallet: action.bound,
            disconnectWallet: action.bound,
        });
    }

    private _isConnectedWallet: boolean = false;

    connectWallet() {
        this._isConnectedWallet = true;
    }

    disconnectWallet() {
        this._isConnectedWallet = false;
    }

    get isConnectedWallet() {
        return this._isConnectedWallet;
    }
}

