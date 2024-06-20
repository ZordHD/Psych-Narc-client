import { makeAutoObservable } from "mobx"

export default class NewsStore{
    constructor() {
        this._novelty = []
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

setNovelty(novelty) {
    this._novelty = novelty
}
setPage(page) {
    this._page = page
}
setTotalCount(count) {
    this._totalCount = count
}

get novelty(){
    return this._novelty
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