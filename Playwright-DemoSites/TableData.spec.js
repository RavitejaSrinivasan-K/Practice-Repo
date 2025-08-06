//TABLE DATA

import {test , expect} from "@playwright/test";

test("Table-Data" , async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const paginationTable = await page.locator('[id="productTable"]');

    //CHECK COLUMNS
  const tableColumns =  await paginationTable.locator('thead tr th');
    console.log("Number of Columns :" , await tableColumns.count());

    //CHECK ROWS
  const tableRows =  await paginationTable.locator('tbody tr');
    console.log("Number of Rows :" ,await tableRows.count());

    //2 Get data from table and click the checkbox
   const productData =  await tableRows.filter({
        has: await page.locator('td'),
        hasText : "Tablet" 
    });
   await productData.locator('input').check();


  //3 using reusable function, Select multiple data
    await multiple(page, tableRows, "Smartphone");
    await multiple(page , tableRows, "Wireless Earbuds");

   //4 Retrieving 1st page datas
   for(let i=0; i < await tableRows.count(); i++){
  const tds =  await tableRows.nth(i).locator('td');

    for(let j=0; j < await tds.count()-1 ; j++){
        console.log(await tds.nth(j).textContent());
    }
   }
   
  //5 Print all page datas
 const navigatePages =  await page.locator('.pagination li a')
console.log("Number of pages :" , await navigatePages.count())

for(let k=0 ; k < await navigatePages.count(); k++){
    if(k > 0){
        await navigatePages.nth(k).click();
    }
     for(let i=0; i < await tableRows.count(); i++){
  const tds =  await tableRows.nth(i).locator('td');

    for(let j=0; j < await tds.count()-1 ; j++){
        console.log(await tds.nth(j).textContent());
    }
   }
   
}

await page.waitForTimeout(5000);

})
//Reusable function
async function multiple(page, tableRows, name){
    const productData =  await tableRows.filter({
        has: await page.locator('td'),
        hasText : name
    });
   await productData.locator('input').check();
}


