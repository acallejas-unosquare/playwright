const {test, expect} = require('@playwright/test');
const testData = JSON.parse(JSON.stringify("../testData,json"));


test("Login to Application", async ({page}) => {

    await page.goto("https://freelance-learn-automation.vercel-app/login")
    
    await page.locator("//input[@id='email1']").fill(testData.username)
    await page.locator('input[name="password"]').fill(test.pass)


})