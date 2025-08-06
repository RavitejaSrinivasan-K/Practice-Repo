//KEY BOARD ACTIONS

const {test , expect} = require("@playwright/test")

test("Handling KeyBoard-Actions" , async({page})=>{

    await page.goto('https://gotranscript.com/text-compare')

    //Type text area
    await page.locator('[name="text1"]').fill('Hi Welcome to the JavaScript World!')

    //Select all text using Ctrl+A
    await page.keyboard.press("Control+A")
    await page.waitForTimeout(3000)

    //Copy all text using Ctrl+C
    await page.keyboard.press("Control+C")
    await page.waitForTimeout(3000)

    //Press Tab to move next Text Area
    await page.keyboard.down("Tab")
    await page.keyboard.up("Tab")

    //Paste the selected Text
    await page.keyboard.press("Control+KeyV")
    await page.waitForTimeout(3000)

})
