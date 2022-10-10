const assert = require('assert');
const LoginPage = require('../pages/login.page');
const VotePage = require('../pages/vote.page');

describe('Smoke Test Suite 2', ()=>{
    it('should verify static elements are present for vote section', async() => {
        await browser.url('http://localhost:8080/index.html');

        //Login to app
        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();

        // Verify Vote
        assert.equal(await VotePage.voteTitle.isDisplayed(), true, 'VotePage.voteTitle');
        assert.equal(await VotePage.voteItemXmen.isDisplayed(), true, 'VotePage.voteItemXmen');
        assert.equal(await VotePage.voteItemAvengers.isDisplayed(), true, 'VotePage.voteItemAvengers');
        assert.equal(await VotePage.voteItemDeadpool.isDisplayed(), true, 'VotePage.voteItemDeadpool');
        assert.equal(await VotePage.voteItemSpiderman.isDisplayed(), true, 'VotePage.voteItemSpiderman');
        assert.equal(await VotePage.voteItemIronman.isDisplayed(), true, 'VotePage.voteItemIronman');
        assert.equal(await VotePage.voteItemLabelXmen.isDisplayed(), true, 'VotePage.voteItemLabelXmen');
        assert.equal(await VotePage.voteItemLabelAvengers.isDisplayed(), true, 'VotePage.voteItemLabelAvengers');
        assert.equal(await VotePage.voteItemLabelDeadpool.isDisplayed(), true, 'VotePage.voteItemLabelDeadpool');
        assert.equal(await VotePage.voteItemLabelSpiderman.isDisplayed(), true, 'VotePage.voteItemLabelSpiderman');
        assert.equal(await VotePage.voteItemIronman.isDisplayed(), true, 'VotePage.voteItemIronman');
        assert.equal(await VotePage.submitButton.isDisplayed(), true, 'VotePage.submitButton');
        assert.equal(await VotePage.voteItemTextXmen.isDisplayed(), true, 'VotePage.voteItemTextXmen');
        assert.equal(await VotePage.voteItemValXmen.isDisplayed(), true, 'VotePage.voteItemValXmen');
        assert.equal(await VotePage.voteItemTextAvengers.isDisplayed(), true, 'VotePage.voteItemTextAvengers');
        assert.equal(await VotePage.voteItemValAvengers.isDisplayed(), true, 'VotePage.voteItemValAvengers');
        assert.equal(await VotePage.voteItemTextDeadpool.isDisplayed(), true, 'VotePage.voteItemTextDeadpool');
        assert.equal(await VotePage.voteItemValDeadpool.isDisplayed(), true, 'VotePage.voteItemValDeadpool');
        assert.equal(await VotePage.voteItemTextSpiderman.isDisplayed(), true, 'VotePage.voteItemTextSpiderman');
        assert.equal(await VotePage.voteItemValSpiderman.isDisplayed(), true, 'VotePage.voteItemValSpiderman');
        assert.equal(await VotePage.voteItemTextIronman.isDisplayed(), true, 'VotePage.voteItemTextIronman');
        assert.equal(await VotePage.voteItemValIronman.isDisplayed(), true, 'VotePage.voteItemValIronman');
    })
})