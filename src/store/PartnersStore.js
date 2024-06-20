import { makeAutoObservable } from "mobx"

export default class PopularServicesStore{
    constructor() {
        this._partner = []
        this._page = 1
        this._totalCount = 0
        this._limit = 5
        makeAutoObservable(this)
    }

setServ(partner) {
    this._partner = partner
}
setPage(page) {
    this._page = page
}
setTotalCount(count) {
    this._totalCount = count
}

get partner(){
    return this._partner
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