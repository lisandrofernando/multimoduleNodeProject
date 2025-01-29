import { expect, test } from "@playwright/test";
import apiUtils from "../utils/apiUtils.ts";

test("Get Booking Details", async ()=>{
    const bookingDetails = await apiUtils.getBookingDetails();
    expect(bookingDetails.status()).toBe(200);
});

test("Post Booking Details", async ()=>{
    const postbookingDetails = await apiUtils.postBookingDetails();
    const bookingData = await postbookingDetails.json();
    expect(postbookingDetails.status()).toBe(200);
    //expect(bookingData.status()).toBeOK;
   // expect(bookingData).toHaveProperty("Report-To")
});

test("Put Booking Details", async ()=>{
    const putbookingDetails = await apiUtils.putBookingDetails();
    const bookingData = await putbookingDetails.json();
    expect(putbookingDetails.status()).toBe(200);
    //expect(bookingData.status()).toBeOK;
   // expect(bookingData).toHaveProperty("Report-To")
});