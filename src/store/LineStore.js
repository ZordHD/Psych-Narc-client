import { makeAutoObservable } from "mobx"

export default class LineStore{
    constructor() {
        this._lin = []
        this._totalCount = 0
        this._limit = 5
        makeAutoObservable(this)
    }

setLine(lin) {
    this._lin = lin
}
setTotalCount(count) {
    this._totalCount = count
}

get lin(){
    return this._lin
}

get totalCount() {
    return this._totalCount
}

get limit() {
    return this._limit
}
}