import { FetchUtil } from "../util/fetchUtil";

export class MemberR {
    static root = "user"
    static sign(data) {
        return FetchUtil.postAPI("/sign", data)
    }

    static login(data) {
        return FetchUtil.postAPI(`${this.root}/login`, data)
    }

    static msg(u_id) {
        return FetchUtil.getAPI(`${this.root}/msg/${u_id}`)
    }

    static vote(u_id) {
        return FetchUtil.getAPI(`${this.root}/vote/${u_id}`)
    }

}