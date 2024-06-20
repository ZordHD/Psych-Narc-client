import { makeAutoObservable } from "mobx"

export default class VacanciesStore{
    constructor() {
        this._vacs = []
        this._totalCount = 0
        makeAutoObservable(this)
    }

setVacs(vacs) {
    this._vacs = vacs
}
setTotalCount(count) {
    this._totalCount = count;
  }

get vacs(){
    return this._vacs
}
get totalCount() {
    return this._totalCount;
  }
}