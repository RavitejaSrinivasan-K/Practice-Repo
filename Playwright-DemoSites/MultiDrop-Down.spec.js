//MULTIPLE DROP DOWNS
import {test , expect} from "@playwright/test"

test("Multiple-Drop Down" , async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

   const colorsDD = await page.$$('//select[@id="colors"]//option')

    for(let options of colorsDD){
       const option = await options.textContent()
       const element = await option.trim()
    //    console.log(await option.trim())

       if(await element.includes("Blue") || await element.includes("Yellow") ){
            await options.click()
       }
    }
await page.waitForTimeout(5000)


})





