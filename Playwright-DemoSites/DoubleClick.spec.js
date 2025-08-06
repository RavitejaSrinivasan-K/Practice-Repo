//DOUBLE CLICK 

import {test , expect} from "@playwright/test"

test("Double-Click" , async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/#')

    await page.locator('//button[text() ="Copy Text"]').dblclick()

    //ASSERTION 
    const field2 = await page.locator('[id="field2"]')

    await expect(field2).toHaveValue("Hello World!")



})


