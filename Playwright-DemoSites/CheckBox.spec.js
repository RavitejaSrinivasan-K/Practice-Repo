//CHECK BOX

const {test, expect} = require('@playwright/test')

test.only("Single-CheckBox" , async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('//input[@value="sunday"]').check()

    await expect( await page.locator('//input[@value="sunday"]').isChecked()).toBeFalsy()
})


test("Multiple-checkboxes" , async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/')

  let multiCheckboxes = [  await page.locator('//input[@value="sunday"]'),
    await page.locator('[id="tuesday"]'),
    await page.locator('#thursday'),
    await page.locator('//label[text()="Saturday"]')
  ]

  for (const element of multiCheckboxes) {
    await element.check()
    await expect(await element).toBeChecked()
  }
await page.waitForTimeout(5000)



for (const element of multiCheckboxes) {
    if(await expect(await element).toBeChecked()){
        await element.uncheck()
        // await expect((element).isChecked()).toBeTruthy()
    }
}

await page.waitForTimeout(5000)

})


