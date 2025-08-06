//RADIO BUTTON

const {test, expect} = require('@playwright/test')

test("Radio-Button" , async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Radio-Button
    await page.locator('[id="male"]').check()

    await page.waitForTimeout(5000)
})


