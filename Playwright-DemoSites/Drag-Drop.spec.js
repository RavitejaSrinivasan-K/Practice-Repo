//DRAG AND DROP

import {test, expect} from "@playwright/test"

test('Drang-and-Drop' , async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/#')

   const dropHere =  await page.locator('div#droppable')

   const dragMe = await page.locator('div#draggable')

  //APPROACH -1
  await dragMe.hover()
  await page.mouse.down()

    await page.waitForTimeout(5000)

  await dropHere.hover()
  await page.mouse.up()

  await page.waitForTimeout(5000)

  //APPROACH - 2
//   await dragMe.dragTo(dropHere)
//   await page.waitForTimeout(5000)


})



