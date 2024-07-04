class PasteBinPage{
    
    get newPasteInput() { return $('#postform-text'); }
    get syntax(){ return $('#select2-postform-format-container');}
    get expiration(){ return $('#select2-postform-expiration-container'); }
    get nameInput(){ return $('#postform-name'); }
    get button(){ return $('button[type="submit"]'); }

    open(){
        browser.url('https://pastebin.com/');
    }

    setValuesforDropDown(value){
        const option = $(`//li[text()="${value}"]`)
        option.waitForDisplayed()
        option.click()
    }    
}

module.exports = PasteBinPage;