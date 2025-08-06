//MOUSE RIGHT CLICK

import {test , expect} from "@playwright/test"

test("Right Click" , async({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    const rightClickBtn = await page.locator('//span[text()="right click me"]')

    await rightClickBtn.click({button : 'right'})
    await page.waitForTimeout(2000)

    await page.click('//span[text()="Quit"]')

})
