import {request} from "@playwright/test";
import ENV from "../envUtils/env.ts";

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


}
export default new apiUtils;