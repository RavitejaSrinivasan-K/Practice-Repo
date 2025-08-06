//HOOK 1 

const {test , expect} = require('@playwright/test')

test("Hook-1" , async({page})=>{
    await page.goto('https://www.demoblaze.com/')

    //LINK-TEXT
    await page.locator('#login2').click()

    //USERNAME & PASSWORD
    await page.fill('[id="loginusername"]' , "pavanol")
    await page.fill('[id="loginpassword"]' , "test@123")

    //LOGIN BUTTON
    await page.click('//button[text() = "Log in"]')

    await page.waitForTimeout(3500)

    //PRINT ALL PRODUCTS
    const products = await page.$$('.hrefch')

    //CLICK A PRODUCT
    for (const element of products) {
       const productText = await element.textContent()
       console.log(await productText.trim())
      
    //    if(await productText.includes("Nokia lumia 1520") || await productText.includes("Samsung galaxy s6"))
    //    {
    //     await element.click()
    //    }
    }

    //CLICK ANY PRODUCT
    await page.click('//a[text()="Sony xperia z5"]')


    //ADD TRO CART
    await page.click('//a[text()="Add to cart"]')

    //HANDLE ALERT
    await page.on("dialog" , async Dialog =>{
        await expect(Dialog.message()).toContain('Product added.')
        await Dialog.accept()
    })

    //CLICK CART OPTION
    await page.click('[id="cartur"]')

    //CHECK WHETHER PRODUCT ADDED OR NOT
  const cartProduct =  await page.locator('//div[@class="table-responsive"]//tbody[@id="tbodyid"]//tr//td[2]')
    console.log("ADDED PRODUCT IS :" , await cartProduct.textContent())
//   await expect(await cartProduct.textContent()).toContain("Sony xperia z5")

 //LOGOUT
 await page.click('#logout2')

})
