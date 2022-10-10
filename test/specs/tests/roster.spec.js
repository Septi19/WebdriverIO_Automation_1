const assert = require('assert');
const LoginPage = require('../pages/login.page');
const RosterPage = require('../pages/roster.page');

describe('Roster Suite', ()=> {
    it('should have default values', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();

        const instruction = "Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.";
        const title = "Build Your Superhero Roster:";

        assert.equal(await RosterPage.instructionText.getText(), instruction, 'Instruction text is not the same');
        assert.equal(await RosterPage.listTitle.getText(), title, 'Title is not the same');
        assert.equal(await RosterPage.wolverineItem.getText(), 'Wolverine', 'Wolverine text is not the same');
        assert.equal(await RosterPage.ironmanItem.getText(), 'Iron Man', 'Iron-Man text is not the same');
        assert.equal(await RosterPage.deadpoolItem.getText(), 'Deadpool', 'Deadpool text is not the same');
        assert.equal(await RosterPage.thorItem.getText(), 'Thor', 'Thor text is not the same');
        assert.equal(await RosterPage.spidermanItem.getText(), 'Spider-Man', 'Spider-Man text is not the same');
        assert.equal(await RosterPage.addHeroLabel.getText(), 'ADD A SUPERHERO', 'Ad hero label is not the same');
        assert.equal(await RosterPage.addHeroField.getAttribute('placeholder'), 'Enter Hero', 'Placeholder is not the same');
    })

    it('should add a new default value', async() =>{
        await browser.url('http://localhost:8080/index.html');

        await LoginPage.emailField.setValue('1@2.com');
        await LoginPage.passwordField.setValue('password');
        await LoginPage.submitButton.click();

        const newItem = 'Septi';

        await RosterPage.addHeroField.setValue(newItem);
        await RosterPage.submitButton.click();

        assert.equal(await RosterPage.newItem.getText(),newItem, 'New Item text is not the same');
    })
})