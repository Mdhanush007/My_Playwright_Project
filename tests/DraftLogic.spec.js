import{test,expect} from '@playwright/test'
let page1;
test.beforeAll("launch_browser",async({browser})=>{
    const context=await browser.newContext();
     page1=await context.newPage();
});

test.beforeEach("Navigate_URL",async()=>
{
    await page1.goto("https://www.demoblaze.com/");
});



/*test("TC_001_user_Sign_up",async()=>
{
   // const context=await browser.newContext();
    //const page=await context.newPage();
    //await page1.goto("https://www.demoblaze.com/");
    expect(page1).toHaveTitle("STORE");//Assertion
    await page1.getByRole("link",{name:"Sign up"}).click();
    await page1.locator("#sign-username").fill("Dhanushkumar");
    await page1.locator("#sign-password").fill("venom@17");
    await page1.getByRole("button",{name:"Sign up"}).click();
    await  page1.once("dialog",dialog=>{
            console.log(dialog.message());
            console.log("dialog box closed");
            dialog.accept();
     }); //Sign up successful.
});



test("TC_002_user_Login",async()=>
{
    //await page1.goto("https://www.demoblaze.com/");
    await page1.getByRole("link",{name:"Log in"}).click();
    await page1.locator("#loginusername").fill("Dhanushkumar");
    await page1.locator('#loginpassword').fill("venom@17");
    await page1.getByRole("button",{name:"Log in"}).click();
    await page1.locator("#nameofuser")
    await expect(page1.locator("#nameofuser")).toHaveText("Welcome Dhanushkumar");

});*/


test("TC_003_Select_Product",async()=>
{
    await page1.goto("https://www.demoblaze.com/");
     await page1.locator("a#itemc").filter({hasText:"Phones"}).click();//select categories
     const products= page1.locator("#tbodyid div.card-block h4");
     const item_link=products.filter({has:page1.getByRole("link",{name:"Samsung galaxy s6"})});
     await item_link.waitFor();
     await item_link.click();

     await page1.getByRole("link",{name:"Add to cart"}).click();
     
     page1.on("dialog",dialog=>{
        console.log(dialog.message());
        dialog.accept();
    });

    await page1.getByRole("link",{name:"Cart",exact:true}).click();
    const recent_item=page1.getByRole('row').filter({has:page1.getByRole("cell")}).first();
    const Text=await recent_item.textContent();
    console.log(Text);

    await page1.getByRole("button",{name:"Place Order"}).click();
    await page1.locator("#name").fill("Dhanush");
    await page1.getByLabel("Country:").fill("India");
    await page1.getByLabel("City:").fill("Nellore");
    await page1.getByLabel("Credit card:").fill("123456789123");
    await page1.getByLabel("Month:").fill("Feb");
    await page1.getByLabel("Year:").fill("2026");
    await page1.getByRole("button",{name:"Purchase"}).click();

    page1.on("dialog",dialog=>
        {
            dialog.accept;
            dialog.message;
        }
    );

    const popUp=page1.locator(".sweet-alert");
    const para=await popUp.getByRole("paragraph").allTextContents();
    console.log(para);
    await page1.getByRole("button",{name:"OK"}).click();
    console.log("Order Placed");
    

     //console.log(await item.textContent());

    

});
