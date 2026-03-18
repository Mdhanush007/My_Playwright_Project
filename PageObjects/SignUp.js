export class SignUp{

    constructor(page){
        this.page=page;
        this.Login=this.page.getByRole("link",{name:"Log in"});
        this.username=this.page.locator("#loginusername");
        this.password=this.page.locator('#loginpassword');
        this.login=this.page.getByRole("button",{name:"Log in"});
        this.head=this.page.locator("#nameofuser");


            

    }


     


    async signNewUser(name,password){
        await this.page.getByRole("link",{name:"Sign up"}).click();
        await this.page.locator("#sign-username").fill(name);//"Dhanushkumar"
        await this.page.locator("#sign-password").fill(password);//"venom@17"

        const dialogPromise = this.page.waitForEvent("dialog");


         /* this.page.once("dialog",async dialog=>{
            console.log(await dialog.message());
            console.log("dialog box closed");
            await dialog.accept();
     });*/
        await this.page.getByRole("button",{name:"Sign up"}).click();
        const dialog = await dialogPromise;
       console.log(dialog.message()); 
       await dialog.accept(); 
       console.log("dialog box closed");
        
    };


    async loginUser(name,password){
            await this.Login.click();
            await this.username.fill(name);
            await this.password.fill(password);
            await this.login.click();
            await this.head.waitFor();
            
            
            console.log("method executed");
    }

}