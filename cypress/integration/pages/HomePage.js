class HomePage {
    constructor() {
        this.pagetitle = '.page-title';
        this.Homelink = '#menu-item-62 > a';
        this.dropdown = '#dropdown-class-example'
    }

     pageTitle() {
        return cy.get(this.pagetitle);
    }
     homeLink() {
        return cy.get(this.Homelink);
    }
     dropDown() {
        return cy.get(this.dropdown);

    }
}

const homepageo = new HomePage();

export default homepageo;