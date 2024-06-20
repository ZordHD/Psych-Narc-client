import { makeAutoObservable } from "mobx"

export default class ForeignServicesStore{
    constructor() {
        this._foreignserv = []
        this._page = 1
        this._totalCount = 0
        this._limit = 8
        makeAutoObservable(this)
    }

setForeignServices(foreignserv) {
    this._foreignserv = foreignserv
}
setPage(page) {
    this._page = page
}
setTotalCount(count) {
    this._totalCount = count
}

get foreignserv(){
    return this._foreignserv
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