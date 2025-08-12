//SCREEN SHOT 

import {test , expect} from "@playwright/test"

test('ScreenShot - Normal', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.screenshot({path : 'images/' + 'normalScreenshot.png'})

    //     images/normal.png

    await page.waitForTimeout(4000)

})


test('ScreenShot - FullPage', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.screenshot({path : 'images/' + 'fullPageScreenshot.png' , fullPage:true})

    //     images/fullPageScreenshot.jpeg

    await page.waitForTimeout(4000)

})

test('ScreenShot - ParticularPortion', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

  await page.locator('[name="BookTable"]').screenshot({path : 'images/' + 'staticTable.jpg'})

    //    images/staticTable.jpg

    await page.waitForTimeout(4000)

})
