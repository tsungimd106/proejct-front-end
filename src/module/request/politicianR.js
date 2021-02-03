import { FetchUtil } from "../util/fetchUtil";

export class PoliticianR {
    static list(data) {
        return FetchUtil.getAPI("politician/ ")
    }

}