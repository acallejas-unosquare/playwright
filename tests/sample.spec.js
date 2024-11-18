const {test, expect} = require('@playwright/test')

test("My first test", async function({ page }) {
    expect(100).toBe(100);
})

test("My second test", async function({ page }) {
    expect(2.0).toBe(2.0);
})

test("My third test", async function({ page }) {
    expect("hello").toBe("hello");
})

test.skip("My fourth test", async function({ page }) {
    expect("Hello word").toContain("Hello");
})

test("My fifth test", async function({ page }) {
    expect(true).toBeTruthy()
    expect(false).toBeFalsy()
})