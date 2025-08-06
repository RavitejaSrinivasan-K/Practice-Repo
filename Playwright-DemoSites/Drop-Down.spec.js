//DROP DOWNS

import {test , expect} from '@playwright/test'

test("Drop-Down" , async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/#')

    //TEXT
    await page.locator('[id="country"]').selectOption("India")

    await page.waitForTimeout(3000)

    //LABEL
     await page.locator('[id="country"]').selectOption({label : "Japan"})

     await page.waitForTimeout(3000)

    //VALUE ATTRIBUTE
    await page.locator('[id="country"]').selectOption({value : 'france'})

      await page.waitForTimeout(3000)
 
    //INDEX
    await page.locator('[id="country"]').selectOption({index : 2})

    await page.waitForTimeout(3000)

    //ASSERTION
    //APPROACH - 1
    const multiDD1 =  await page.locator('[id="country"] option')
    await expect.soft(multiDD1).toHaveCount(10)

    //APPROACH - 2
   const multiDD2 = await page.$$('#country option')
    await expect(multiDD2.length).toBe(10)


    //APPROACH - 3

 const allTexts = await page.locator('[id="country"] option').allTextContents()
    await expect(allTexts.includes("India")).toBeTruthy()

})

test("Multiple Drop-Down" , async({page})=>{
 await page.goto('https://testautomationpractice.blogspot.com/#')

await page.locator('#colors').selectOption(['Blue' , 'Yellow' , 'White'])

await page.waitForTimeout(5000)

})

