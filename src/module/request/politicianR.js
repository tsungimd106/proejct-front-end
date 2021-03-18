import { FetchUtil } from "../util/fetchUtil";

export class PoliticianR {
    static list(data) {
        return FetchUtil.getAPI("politician/")
    }

    static getList(data) {
        return FetchUtil.getAPI("politician/list")
    }

    static detail(id) {
        return FetchUtil.getAPI(`politician/${id}`)
    }

}