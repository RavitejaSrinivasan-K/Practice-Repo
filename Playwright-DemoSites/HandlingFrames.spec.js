//HANDLING FRAMES

const {test , expect} = require('@playwright/test')

test("Frame-1" , async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')

   console.log( "Total Frames:" , await page.frames().length)


   //HANDLE FRAME -1 
  const frame1 = await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_1.html"})
    await frame1.locator('[name="mytext1"]').fill('JavaScript')

    await page.waitForTimeout(4000)


  //HANDLE FRAME -2
  const frame2 = await page.frameLocator('[src="frame_2.html"]').locator('[name="mytext2"]')  
    await frame2.fill('Playwright')
     await page.waitForTimeout(4000)


     //HANDLE FRAME -3
    const frame3 =  await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_3.html'})
    const childFrame3 = await frame3.childFrames()

    await childFrame3[0].click('(//div[@class="vd3tt"])[2]')
    await childFrame3[0].click('(//div[@class="uHMk6b fsHoPb"])[3]')
     await page.waitForTimeout(4000)
})

