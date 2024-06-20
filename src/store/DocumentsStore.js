import { makeAutoObservable } from "mobx"

export default class DocumentsStore{
    constructor() {
        this._docs = []
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

setDocs(docs) {
    this._docs = docs
}
setPage(page) {
    this._page = page
}
setTotalCount(count) {
    this._totalCount = count
}

get docs(){
    return this._docs
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