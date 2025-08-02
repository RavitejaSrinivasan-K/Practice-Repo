//HOME PAGE LAUNCH

import {test , expect} from "@playwright/test";

test("Home-Page" , async({page})=>{

  //Launching URL
  await page.goto('https://www.demoblaze.com/index.html');

  //pageTitle
  console.log(await page.title());
  //pageURL
  console.log(await page.url());
  
  //Assertion
  await expect(page).toHaveTitle("STORE");
  await expect(page).toHaveURL("https://www.demoblaze.com/index.html");

  //Login link text
  await page.locator('#login2').click();  //ID - CSS SELECTOR

  //userName input box
  await page.locator('#loginusername').fill('pavanol');

  //password
  await page.locator('#loginpassword').fill('test@123');

  //Login button
  await page.click('//button[text() = "Log in"]');  //Xpath

  //page LoadTime
  await page.waitForTimeout(2000);

  //Assertion for Logout visiblity
  const logOut = await page.locator('#logout2');

  await expect(logOut).toBeVisible();

//wait for selector
await page.waitForSelector('xpath=//div[@id="tbodyid"]//div//h4/a');

  //to check how many products are availble
 const allProducts = await page.$$('xpath=//div[@id="tbodyid"]//div//h4/a');
  for (const element of allProducts) {
   const productsText =  await element.textContent();
   console.log(await productsText.trim());
  }
});

