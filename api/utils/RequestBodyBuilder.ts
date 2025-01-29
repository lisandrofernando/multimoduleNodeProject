import requestBodies from "../dataUtils/apiData.json";

class RequestBodyBuilder {

    static getPostBody(){
        return {...requestBodies.postCallData};
    }

    static getPutBody(){
        return {...requestBodies.putCallData};
    }


}
export default RequestBodyBuilder;