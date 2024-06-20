import { makeAutoObservable } from "mobx"

export default class AdministratorsStore{
    constructor() {
        this._admins = []
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

setAdmins(admins) {
    this._admins = admins
}

setPage(page) {
    this._page = page
}

setTotalCount(count) {
    this._totalCount = count
}

get admins(){
    return this._admins
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