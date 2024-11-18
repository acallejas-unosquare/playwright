const {test, expect} = require('@playwright/test');

test("Valid login", async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder('Username').fill('Admin', {delay: 200}) // time between each type
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('//button[@type="submit"]').click()

    await expect( page ).toHaveURL(/dashboard/)

    await page.getByAltText('profile picture').first().click();

    await page.getByText('Logout').click();

    //await page.waitForTimeout(3000)

    await expect( page ).toHaveURL(/login/)

})

test.only("Invalid login", async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.viewportSize().width()

    await page.getByPlaceholder('Username').fill('Admin', {delay: 200}) // time between each type
    await page.locator('input[name="password"]').fill('hello')
    await page.locator('//button[@type="submit"]').click()

    const errorMsg = await page.locator("//p[contains(@class, 'alert-content-text')]").textContent();
    console.log('The error message is ' + errorMsg);

    expect(errorMsg.includes('Invalid')).toBeTruthy();

    expect(errorMsg==='Invalid credentials').toBeTruthy();

})