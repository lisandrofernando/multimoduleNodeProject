import { expect, test } from "@playwright/test";
import apiUtils from "../utils/apiUtils.ts";

test("Get Booking Details", async ()=>{
    const bookingDetails = await apiUtils.getBookingDetails();
    expect(bookingDetails.status()).toBe(200);
})