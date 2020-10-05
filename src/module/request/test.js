import { FetchUtil } from "../util/fetchUtil";

export default class TestRequest {
    static sign(data) {
        return FetchUtil.postAPI("/sign", data)
    }

    static forTest() {
        return FetchUtil.getAPI("/area")
    }
}