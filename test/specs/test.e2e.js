const { expect, browser, $ } = require('@wdio/globals');
// const { expect } = require('chai');

const pastebinPage = require('../../src/po/pasteBinPage');
const pastePage = require('../../src/po/pastePage');

const pasteBin = new pastebinPage();
const pastePageObj = new pastePage();


describe('Test Suite1 - PasteBin', () => {

    const name = 'how to gain dominance among developers'
    const syntaxValue = 'Bash'
    const expirationValue = '10 Minutes'
    const input = 'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force';
    
    function randomDelay(min = 100, max = 500) {
        return new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * (max - min + 1)) + min));
    }

    before( async() => {
        await pasteBin.open()
        await randomDelay();
        await pasteBin.newPasteInput.setValue(input);
        await randomDelay();
        await pasteBin.syntax.click();
        await pasteBin.setValuesforDropDown(syntaxValue)
        await randomDelay();
        await pasteBin.expiration.click();
        await pasteBin.setValuesforDropDown(expirationValue);
        await pasteBin.nameInput.setValue(name);
        await randomDelay();
        await pasteBin.button.click();
    });

    it('should verify the browser page title matches the paste name/title', async() => {
        await randomDelay();
        const titleofPage = await pastePageObj.getTitle();
        expect(titleofPage).to.equal(name);
    });

    it('should verify that syntax Hilighting  is equal to Bash', async ()=> {
        await randomDelay();
        const syntaxInput = await pastePageObj.getSyntax();
        expect(syntaxInput).to.equal(syntaxValue);

    })

    it('should verify that New Paste code  is equal to input', async ()=> {
        await randomDelay();
        const code = await pastePageObj.getCode();
        expect(code).to.equal(input);
    })
});

