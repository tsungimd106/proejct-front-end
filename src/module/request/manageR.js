import { FetchUtil } from "../util/fetchUtil";

export class ManageR {
    static root = "manage"
    static politician(data) {
        return FetchUtil.postAPI(`${this.root}/politician`, data)
    }
    static proposal(data) {
        return FetchUtil.postAPI(`${this.root}/proposal`, data)
    }

    static report(data){
        return FetchUtil.getAPI(`${this.root}/report`, data)
    }
    static check(data){
        return FetchUtil.postAPI(`${this.root}/report`, data)
    }

}