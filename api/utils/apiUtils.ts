import {request} from "@playwright/test";
import ENV from "../envUtils/env.ts";
import RequestBodyBuilder from "./RequestBodyBuilder.ts";

class apiUtils {

    async getBookingDetails(){
        const req = await request.newContext();

        const response =  await req.get(`${ENV.URI}booking`, {
            ignoreHTTPSErrors: true,
            headers:{
                'Accept': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data);
        return response;
    }

    async postBookingDetails(){
        const req = await request.newContext();
        const requestBody = RequestBodyBuilder.getPostBody();
        const response =  await req.post(`${ENV.URI}booking`, {
            ignoreHTTPSErrors: true,
            headers:{
                'Accept': 'application/json'
            },
            data: JSON.stringify(requestBody),
        })
        console.log("Response here",response);
        return response;
    }

    async putBookingDetails(){
        const req = await request.newContext();
        const requestBody = RequestBodyBuilder.getPostBody();
        const response =  await req.put(`${ENV.URI}booking/1`, {
            ignoreHTTPSErrors: true,
            headers:{
                'Authorization': "Basic YWRtaW46cGFzc3dvcmQxMjM="
            },
            data: JSON.stringify(requestBody),
        })
        console.log("Response here",response);
        return response;
    }


}
export default new apiUtils;