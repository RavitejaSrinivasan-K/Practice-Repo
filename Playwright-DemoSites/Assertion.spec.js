//HARD ASSERTIONS

import {test , expect} from '@playwright/test'

test.skip("Hard-Assertion" , async({page})=>{

    //Browser Launch
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Get title & URL
    console.log(await page.title())
    await expect(page).toHaveTitle("BlueHRM")

    console.log(await page.url())
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //check Logo
    const orangeLogo = await page.getByAltText('company-branding')
    await expect(orangeLogo).toBeVisible()

    //Input box
    // await expect(userName).toBeEmpty()
    const userName = await page.getByPlaceholder('Username')
    await userName.fill("Admin")

    //ASSERTION -HARD
    await expect(userName).toBeEnabled()
    await expect(userName).toBeEditable()
    

    await page.getByPlaceholder('Password').fill('admin123')

    //Login Button
    await page.getByRole("button" , {type: "submit"})

})




test("SOFT-Assertion" , async({page})=>{

    //Browser Launch
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Get title & URL
    console.log(await page.title())
    await expect.soft(page).toHaveTitle("BlueHRM")

    console.log(await page.url())
    await expect.soft(page).toHaveURL("https://opensource-demo.orangehrm/index.php/auth/login")

    //check Logo
    const orangeLogo = await page.getByAltText('company-branding')
    await expect(orangeLogo).toBeVisible()

    //Input box
    
    const userName = await page.getByPlaceholder('Username')
    await userName.fill("Admin")

    //ASSERTION - HARD
    await expect(userName).toBeEnabled()
    await expect(userName).toBeEditable()
    await expect.soft(userName).toBeEmpty()

    await page.getByPlaceholder('Password').fill('admin123')

    //Login Button
    await page.getByRole("button" , {type: "submit"})


})



