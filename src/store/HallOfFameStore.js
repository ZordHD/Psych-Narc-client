import { makeAutoObservable } from "mobx"

export default class HallOfFameStore{
    constructor() {
        this._hof = []
        this._page = 1
        this._totalCount = 0
        this._limit = 8
        makeAutoObservable(this)
    }

setHallOfFame(hof) {
    this._hof = hof
}
setPage(page) {
    this._page = page
}
setTotalCount(count) {
    this._totalCount = count
}

get hof(){
    return this._hof
}

get totalCount() {
    return this._totalCount
}
get page() {
    return this._page
}
get limit() {
    return this._limit
}
}