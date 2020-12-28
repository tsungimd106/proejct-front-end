import { FetchUtil } from "../util/fetchUtil";

export  class TestRequest {
    static sign(data) {
        return FetchUtil.postAPI("/sign", data)
    }

    static login(data){
        return FetchUtil.postAPI("user/login",data)
    }

}