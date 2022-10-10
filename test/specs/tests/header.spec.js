const assert = require('assert');
const LoginPage = require('../pages/login.page')
const HeaderPage = require('../pages/header.page');

describe('Header Test Suite', () =>{
    it('should redirect to new site', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();
        
        await browser.setWindowSize(1040, 969);
        await HeaderPage.linkLink.click();
        assert.equal(await browser.getUrl(), 'https://glitchitsystem.com/');
    })

    it('should open wolverine modal', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();
        await browser.setWindowSize(1040, 969);

        await HeaderPage.heroFactsLink.click();
        await HeaderPage.wolverineOption.click();
        await browser.pause(1000);

        assert.equal(await HeaderPage.wolverineModalWindow.isDisplayed(), true, 'Modal is not open');
        assert.equal(await HeaderPage.wolverineModalTitleText.getText(), 'Wolverine Fact', 'Title is not the same');
        assert.equal(await HeaderPage.wolverineModalContentText.getText(), 'Wolverine made his first comic book appearance in 1974.', 'Constent is not the same');
    })

    it('should close wolvering modal', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();
        await browser.setWindowSize(1040, 969);

        await HeaderPage.heroFactsLink.click();
        await HeaderPage.wolverineOption.click();
        await browser.pause(1000);

        assert.equal(await HeaderPage.wolverineModalWindow.isDisplayed(), true, 'Modal is not open');

        await HeaderPage.wolverineModalCloseButton.click();
        await browser.pause(1000);

        assert.equal(await HeaderPage.wolverineModalWindow.isDisplayed(), false, 'Model is still open');
    })

    it('should open spiderman modal', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();
        await browser.setWindowSize(1040, 969);

        await HeaderPage.heroFactsLink.click();
        await HeaderPage.spidermanOption.click();
        await browser.pause(1000);
        
        assert.equal(await HeaderPage.spidermanModalWindow.isDisplayed(), true, 'Modal is not open');
        assert.equal(await HeaderPage.spidermanModalTitleText.getText(), 'Spider-Man Fact', 'Title is not the same');
        assert.equal(await HeaderPage.spidermanModalContentText.getText(), 'Spider-man was created by Stan Lee and Steve Ditko and first appeared in 1962.', 'Content is not the same');
    })

    it('should close spiderman modal', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();
        await browser.setWindowSize(1040, 969);

        await HeaderPage.heroFactsLink.click();
        await HeaderPage.spidermanOption.click();
        await browser.pause(1000);

        assert.equal(await HeaderPage.spidermanModalWindow.isDisplayed(), true, 'Modal is not open');
        await HeaderPage.spidermanModalCloseButton.click();
        await browser.pause(1000);
        
        assert.equal(await HeaderPage.spidermanModalWindow.isDisplayed(), false, 'Modal is still open');
    })

    it('should search for wolverine', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();
        await browser.setWindowSize(1040, 969);

        await HeaderPage.searchField.setValue('wolverine');
        await HeaderPage.searchButton.click();

        assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(await browser.getAlertText(), 'Wolverine is awesome!', 'Text is not the same');
    })

    it('should error because you did not search for wolverine', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();
        await browser.setWindowSize(1040, 969);

        await HeaderPage.searchField.setValue('something');
        await HeaderPage.searchButton.click();

        assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(await browser.getAlertText(), 'Your search for something returned 0 reults. Try something else.' ,'Text is not the same');

    })

    it('should close the error', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();
        await browser.setWindowSize(1040, 969);

        await HeaderPage.searchField.setValue('Something');
        await HeaderPage.searchButton.click();

        assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');

        await browser.acceptAlert();
        
        assert.equal(await browser.isAlertOpen(), false, 'Alert is still open');
    })
})