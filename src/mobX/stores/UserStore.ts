import { action, computed, makeObservable, observable } from 'mobx';
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import jazzicon from "@metamask/jazzicon"
// eslint-disable-next-line import/no-extraneous-dependencies
import Web3 from "web3";
import {useRef} from "react";
import { ILocalStore } from '../interfaces';


type PrivateFields = '_isConnectedWallet' | '_walletAddress' | '_web3Client';

export default class UserStore {
    constructor() {
        makeObservable<UserStore, PrivateFields>(this, {
            _isConnectedWallet: observable,
            isConnectedWallet: computed,

            _walletAddress: observable,
            walletAddress: computed,

            _web3Client: observable,

            connectWallet: action.bound,
            disconnectWallet: action.bound,
        });
    }

    private _isConnectedWallet: boolean = false;

    private _web3Client: Web3 | null = null;

    private _walletAddress: string = '0x';

    connectWallet(walletAddress: string, web3: Web3) {
        this._isConnectedWallet = true;
        this._walletAddress = walletAddress;
        this._web3Client = web3;

    }

    disconnectWallet() {
        this._isConnectedWallet = false;
        this._walletAddress = '0x';
    }

    get isConnectedWallet() {
        return this._isConnectedWallet;
    }

    get walletAddress() {
        return this._walletAddress;
    }

    get shortAddress() {
        return `${this._walletAddress.substring(0, 4)  }....${  this._walletAddress.substring(this._walletAddress.length - 4, this._walletAddress.length)}`
    }
}

