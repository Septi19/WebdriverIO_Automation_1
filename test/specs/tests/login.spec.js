const assert = require ('assert');
const LoginPage = require('../pages/login.page');
const HeaderPage = require('../pages/header.page');


describe('Login Test Suite', ()=>{
    // Valid Email: 1@2.com
    // Valid Password : password

    it('should display error when password is missing', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('test@test.com');
        await LoginPage.submitButton.click()
        assert.equal(await browser.isAlertOpen(), true, 'Alert is not oppen');
        assert.equal(await browser.getAlertText(),'Please enter an email and password', 'Alert text is not the same');
        await browser.pause(3000);
        
        await browser.acceptAlert();
        assert.equal(await browser.isAlertOpen(), false, 'The alert is still open');

        await browser.pause(3000);
    });
    
    it('should display error when email is missing', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.passwordField.setValue('blah');
        await LoginPage.submitButton.click();
        assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(await browser.getAlertText(), 'Please enter an email and password', 'Alert text is not the same');
        await browser.pause(3000);
        
        await browser.acceptAlert();
        assert.equal(await browser.isAlertOpen(), false, 'The alert is still open');

        await browser.pause(3000);
    });
    it('should display error when email and password are missing', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.submitButton.click();
        assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(await browser.getAlertText(), 'Please enter an email and password', 'Alert text is not the same');
        await browser.pause(3000);
       
        await browser.acceptAlert();
        assert.equal(await browser.isAlertOpen(), false, 'The alert is still open');
        
        await browser.pause(3000);
    });

    it('should display error when email is incorrect', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('fake@fake.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();
        assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(await browser.getAlertText(), 'Invalid email and password', 'Alert text is not the same');
        
        await browser.pause(3000);
        await browser.acceptAlert();
        assert.equal(await browser.isAlertOpen(), false, 'The alert is still open');


        await browser.pause(3000);
    });

    it('should display error when password is incorrect', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('blah');
        await LoginPage.submitButton.click();
        assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(await browser.getAlertText(), 'Invalid email and password', 'Alert text is not the same');
        
        await browser.pause(3000);
        await browser.acceptAlert();
        assert.equal(await browser.isAlertOpen(), false, 'The alert is still open');


        await browser.pause(3000);
    });
    it('should display error when password case is incorrect', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('PASSWORD');
        await LoginPage.submitButton.click();
        assert.equal(await browser.isAlertOpen(), true, 'Alert is not open');
        assert.equal(await browser.getAlertText(), 'Invalid email and password', 'Alert text is not the same');
        
        await browser.pause(3000);
        await browser.acceptAlert();
        assert.equal(await browser.isAlertOpen(), false, 'The alert is still open');


        await browser.pause(3000);
    });

    it('should login with valid email and password', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();
       
        assert.equal(await LoginPage.overlay.isDisplayed(), false, 'Overlay is still displayed');
    
        await browser.pause(3000);
    });

    it('should remember login creds', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.rememberLoginCheckbox.click();
        await LoginPage.submitButton.click();

        assert.equal(await LoginPage.overlay.isDisplayed(), false, 'Overlay is still displayed');
        await browser.setWindowSize(1040, 969);
        await browser.pause(3000);

        await HeaderPage.logoutLink.click();
        assert.equal(await LoginPage.overlay.isDisplayed(), true, 'Overlay is still displayed');

        assert.equal(await LoginPage.emailField.getValue(),'1@2.com','Values are not the same');
        assert.equal(await LoginPage.passwordField.getValue(), 'password', 'Password is too short');
        assert.equal(await LoginPage.rememberLoginCheckbox.isSelected(), true, 'Checkbox is not selected');

        await browser.pause(3000);
    })

})