import { makeAutoObservable } from "mobx"

export default class OtherServicesStore{
    constructor() {
        this._otherserv = []
        this._page = 1
        this._totalCount = 0
        this._limit = 8
        makeAutoObservable(this)
    }

setOtherServices(otherserv) {
    this._otherserv = otherserv
}
setPage(page) {
    this._page = page
}
setTotalCount(count) {
    this._totalCount = count
}

get otherserv(){
    return this._otherserv
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