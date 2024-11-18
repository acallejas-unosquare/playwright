const { expect } = require("allure-playwright")

class HomePage {

    constructor(page){
        this.page=page
        this.menu = "//img [@alt='menu']"
        this.logoutoption = "//button[normalize-space()='Sign out']"
        this.manageOption  = "//span[normalize-space()='Manage']"

    }

    async logoutFromApplication(){
        await this.page.click(this.menu)
        await this.page.click(this.logoutoption)
    }

    async verifyMangeOption() {
        await   expect(this.page.locate(this.manageOption)).toBeVisible()
    }
}
module.exports=HomePage