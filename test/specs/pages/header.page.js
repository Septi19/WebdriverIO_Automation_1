class HeaderPage {
    get logoutLink(){
        return $('#navbarSupportedContent > ul > li:nth-child(4) > a')
    }

    get linkLink(){
        return $('#navbarSupportedContent > ul > li:nth-child(2) > a');
    }

    get heroFactsLink(){
        return $('#navbarDropdown');
    }

    get wolverineOption(){
        return $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(1)');
    }

    get spidermanOption(){
        return $('#navbarSupportedContent > ul > li.nav-item.dropdown.show > div > a:nth-child(2)')
    }

    get searchField(){
        return $('#search-box')
    }

    get searchButton(){
        return $('#search-form > button')
    }
}

module.exports = new HeaderPage();