import { makeAutoObservable } from "mobx"

export default class ServicesRBStore{
    constructor() {
        this._servRB = []
        this._page = 1
        this._totalCount = 0
        this._limit = 8
        makeAutoObservable(this)
    }

setServRB(servRB) {
    this._servRB = servRB
}
setPage(page) {
    this._page = page
}
setTotalCount(count) {
    this._totalCount = count
}

get servRB(){
    return this._servRB
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