import { makeAutoObservable } from "mobx"

export default class MassMediaStore{
    constructor() {
        this._massMedia = []
        this._totalCount = 0
        makeAutoObservable(this)
    }

setMassMedia(massMedia) {
    this._massMedia = massMedia
}
setTotalCount(count) {
    this._totalCount = count;
  }

get massMedia(){
    return this._massMedia
}
get totalCount() {
    return this._totalCount;
  }
}