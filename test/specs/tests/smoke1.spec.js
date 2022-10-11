const assert = require('assert');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');
const IntroPage = require('../pages/intro.page');
const RosterPage = require('../pages/roster.page');
const VotePage = require('../pages/vote.page');

describe('Smoke Test Suite 1', () => {
    it('should verify static elements are present', async () => {
        await browser.url('http://localhost:8080/index.html');
        await browser.setWindowSize(1040, 969);

        // Verify the Login
        assert.equal(await LoginPage.headingText.isDisplayed(), true, 'LoginPage.headingText');
        assert.equal(await LoginPage.emailLabel.isDisplayed(), true, 'LoginPage.emailLabel');
        assert.equal(await LoginPage.emailField.isDisplayed(), true, 'LoginPage.emailField');
        assert.equal(await LoginPage.passwordLabel.isDisplayed(), true, 'LoginPage.passwordLabel');
        assert.equal(await LoginPage.passwordField.isDisplayed(), true, 'LoginPage.passwordField');
        assert.equal(await LoginPage.rememberLoginCheckbox.isDisplayed(), true, 'LoginPage.rememberLoginCheckbox');
        assert.equal(await LoginPage.rememberLoginLabel.isDisplayed(), true, 'LoginPage.rememberLoginLabel');
        assert.equal(await LoginPage.submitButton.isDisplayed(), true, 'LoginPage.submitButton');

        //Login to app
        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();

        // Verify the Header
        assert.equal(await HeaderPage.logoutLink.isDisplayed(), true, 'HeaderPage.logoutLink');
        assert.equal(await HeaderPage.linkLink.isDisplayed(), true, 'HeaderPage.linkLink');
        assert.equal(await HeaderPage.heroFactsLink.isDisplayed(), true, 'HeaderPage.heroFactsLink');

        await HeaderPage.heroFactsLink.click();

        assert.equal(await HeaderPage.wolverineOption.isDisplayed(), true, 'HeaderPage.wolverineOption');
        assert.equal(await HeaderPage.spidermanOption.isDisplayed(), true, 'HeaderPage.spidermanOption');
        assert.equal(await HeaderPage.searchField.isDisplayed(), true, 'HeaderPage.searchField');
        assert.equal(await HeaderPage.searchButton.isDisplayed(), true, 'HeaderPage.searchButton');

        // Verifi Intro
        assert.equal(await IntroPage.titleText.isDisplayed(), true, 'IntroPage.titleText');
        assert.equal(await IntroPage.mainImage.isDisplayed(), true, 'IntroPage.mainImage');

        // Verify Roster
        assert.equal(await RosterPage.instructionText.isDisplayed(), true, 'RoosterPage.instructionText');
        assert.equal(await RosterPage.listTitle.isDisplayed(), true, 'RoosterPage.listTitle');
        assert.equal(await RosterPage.wolverineItem.isDisplayed(), true, 'RoosterPage.wolverineItem');
        assert.equal(await RosterPage.ironmanItem.isDisplayed(), true, 'RoosterPage.ironmanItem');
        assert.equal(await RosterPage.deadpoolItem.isDisplayed(), true, 'RoosterPage.deadpoolItem');
        assert.equal(await RosterPage.thorItem.isDisplayed(), true, 'RoosterPage.thorItem');
        assert.equal(await RosterPage.spidermanItem.isDisplayed(), true, 'RoosterPage.spidermanItem');
        assert.equal(await RosterPage.addHeroLabel.isDisplayed(), true, 'RoosterPage.addHeroLabel');
        assert.equal(await RosterPage.addHeroField.isDisplayed(), true, 'RoosterPage.addHeroField');
        assert.equal(await RosterPage.submitButton.isDisplayed(), true, 'RoosterPage.submitButton');
    })
})