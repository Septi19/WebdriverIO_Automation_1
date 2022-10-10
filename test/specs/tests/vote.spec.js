const assert = require('assert');
const LoginPage = require('../pages/login.page');
const VotePage = require('../pages/vote.page');

describe('Vote Section Test Suite', ()=>{
    it('should increment vote', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();

        const originalValue = Number(await VotePage.voteItemValXmen.getText());

        // Using the default x-men selection
        await VotePage.submitButton.click();

        assert.equal(await VotePage.voteItemValXmen.getText(), originalValue + 1, 'Values are not the same');
        assert.equal(await VotePage.thanksAlert.isDisplayed(), true, 'Alert is not displayed');
        assert.equal(await VotePage.thanksAlert.getText(), 'Thanks for voting!', 'Text is not the same for alert');
    })
})