//DATE PICKER

import {test , expect} from "@playwright/test"

test("Handling a Date-Picker", async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //APPROACH - 1
    // await page.locator('[id="datepicker"]').fill("16/09/2025")
    // await page.waitForTimeout(5000)

    //APPROACH - 2
    let selectedDate = "16"
    let selectedMonth = "September"
    let selectedYear = "2026"

    await page.locator('[id="datepicker"]').click()

    while(true){
       const currentMonth =  await page.locator('.ui-datepicker-month').textContent()
       const currentYear =  await page.locator('.ui-datepicker-year').textContent()

        if(selectedMonth === currentMonth && selectedYear === currentYear)
        {
            break
        }
        await page.click('//span[text() = "Next"]')
        // await page.click('//span[text() = "Prev"]')

    }

    //With loop date selection
//    const dates =  await page.$$('[class="ui-state-default"]')

//     for (const element of dates) {
//         if(await element.textContent() === selectedDate){
//             await element.click()
//             break
//         }
//     }


//Without loop date selection
await page.click(`//a[@class="ui-state-default"  and text()="${selectedDate}"]`)

    await page.waitForTimeout(5000)

} )

