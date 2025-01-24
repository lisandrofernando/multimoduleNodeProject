import {test, request, expect} from "@playwright/test";
import apiData from "../dataUtils/apiData.json";

test("Practice test1", async({request})=>{
    // This test uses request fixture which is API requestContext
   const response =    await request.get("https://restful-booker.herokuapp.com/booking", {
    headers:{
        Accept: "application/json"
    }
   });
   console.log(await response.json());
})

test("Practice test2", async()=>{
    const req =  await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com", 
        extraHTTPHeaders: {
            Accept: "application/json"
        }
    });
    const response =    await req.get("/booking");
    console.log(await response.json());
 })

 test("Practice test3", async({request})=>{
    // This test uses the baseURL from the playwright.config.json
   const response =    await request.get("/booking");
   console.log(await response.json());
   expect(response.status()).toBe(200);
})

test("Practice test4", async({request})=>{
    // This test uses the baseURL from the playwright.config.json
   const response =    await request.get("/booking/2402");
   const data = await response.json();
   console.log(data);
  // expect(data.status()).toBe(200);
   expect(data).toHaveProperty("firstname");
   expect(data).toHaveProperty("lastname");
   expect(data).toHaveProperty("totalprice");
})

test("Practice test5", async({request})=>{
    // This test uses the baseURL from the playwright.config.json, but this test fails out of nowwhere
    const response =    await request.get("/booking/2402");
    console.log(await response.json());
    expect(await response.status()).toBe(200);
    expect(await response.json()).toMatchObject(apiData.getCallData)
})

test("Practice test6", async({request})=>{
    // This test uses the baseURL from the playwright.config.json
   const response =    await request.post("/booking", {
    data: apiData.postCallData
   });
   console.log(await response.json());
   expect(response.status()).toBe(200);
})

test("Practice test7", async({request})=>{
    // This test uses the baseURL from the playwright.config.json
   const response =    await request.put("/booking/1",{
        headers:{
            Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM="
        },
    data: apiData.putCallData
})
   console.log(await response.json());
   expect(response.status()).toBe(200);
})