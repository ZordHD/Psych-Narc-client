import { makeAutoObservable } from "mobx"

export default class DepartmentsStore{
    constructor() {
        this._deps = []
        this._totalCount = 0
        makeAutoObservable(this)
    }

setDeps(deps) {
    this._deps = deps
}
setTotalCount(count) {
    this._totalCount = count;
  }

get deps(){
    return this._deps
}
get totalCount() {
    return this._totalCount;
  }
}