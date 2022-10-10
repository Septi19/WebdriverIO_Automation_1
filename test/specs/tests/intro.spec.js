const assert = require('assert');
const LoginPage = require('../pages/login.page');
const IntroPage = require('../pages/intro.page');

describe('Intro Test Suite', () =>{
    it('should display correct title', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();

        assert.equal(await IntroPage.titleText.getText(), 'Superhero Roster', 'Text is not the same');
    })  

    it('should display correct image', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();

        assert.equal(await IntroPage.mainImage.getAttribute('src'), './images/superhero.png', 'src is not the same');
        assert.equal(await IntroPage.mainImage.getAttribute('alt'), 'Superhero Image', 'Alt is not the same');
    })
})