class PastePage{

    get pageTitle(){ return $('//div[@class="info-top"]/h1'); }
    get syntaxInput() { return $('//a[@class="btn -small h_800"]'); }
    get codeInput() {return $('//span[@class="kw2"]'); }

    async getTitle(){
        return await this.pageTitle.getText();
    }

    async getSyntax(){
        return await this.syntaxInput.getText();
    }

    async getCode(){
        return await this.codeInput.getText();
    }


}

module.exports = PastePage;