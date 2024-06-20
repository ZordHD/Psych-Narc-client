import { makeAutoObservable } from "mobx"

export default class GalleryStore{
    constructor() {
        this._gallr = []
        this._page = 1
        this._totalCount = 0
        this._limit = 4
        makeAutoObservable(this)
    }

setServ(gallr) {
    this._gallr = gallr
}
setPage(page) {
    this._page = page
}
setTotalCount(count) {
    this._totalCount = count
}

get gallr(){
    return this._gallr
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