const {test, expect} = require( '@playwright/test')
test("Keyboad Events In Playwright", async ({page})=>{

    await page.goto("https://www.google.com/") 

    //await page. locator ("textarea [name='q']"). type("Mukesh Otwani")

    await page.locator("textarea[name='q']").focus()

    await page.keyboard.fill("Mukesh Otwani!")

    await page.keyboard.press("ArrowLeft")

    await page.keyboard.down("Shift")

    for(let i = 0; i<6; i++){
        await page.keyboard.press("ArrowLeft")
    }
    await page.keyboard.up("Shift")
    await page.keyboard.press("Backspace")

    

});