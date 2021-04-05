import { FetchUtil } from "../util/fetchUtil";

export class PoliticianR {
    static list(data) {
        return FetchUtil.getAPI("politician/")
    }

    static getList(data) {
        return FetchUtil.getAPI("politician/list", data)
    }

    static detail(id) {
        return FetchUtil.getAPI(`politician/${id}`)
    }

    static area() {
        return FetchUtil.getAPI(`politician/area`)
    }
    static name() {
        return FetchUtil.getAPI(`politician/name`)
    }
    static term() {
        return FetchUtil.getAPI(`politician/term`)
    }

}