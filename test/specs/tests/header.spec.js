const assert = require('assert');
const LoginPage = require('../pages/login.page')
const HeaderPage = require('../pages/header.page');

describe('Header Test suite', async() =>{
    it('should redirect to new site', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();
        
        await browser.setWindowSize(1040, 969);
        await HeaderPage.linkLink.click();
        assert.equal(await browser.getUrl(), 'https://glitchitsystem.com/')

        await browser.pause(3000);
    })
})