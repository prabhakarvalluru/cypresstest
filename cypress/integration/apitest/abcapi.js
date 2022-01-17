import { expect } from 'chai';
import homepageo from '../pages/HomePage.js';
import {Given, When} from 'cypress-cucumber-preprocessor/steps'
import { includes } from 'lodash';
import 'cypress-xpath';

// Important Block- data reading from Fixtures
let userDetails;
let exampledata;
beforeEach (()=> {
    cy.fixture('testData.json').then(user =>{
        userDetails=user;
    })
    cy.fixture('example.json').then(example =>{
        exampledata=example;
    })
});

Given('I launch website',()=>{
    cy.visit(userDetails.URL);
    cy.injectAxe();

    cy.url().should('include', 'practice');
//    cy.checkA11y();
//cy.customCheckAlly();
    cy.xpath('//*[@id="name"]').type(userDetails.email);
    
})


When('I check the title of webpage contains {string}', pageTitle=>{

    homepageo.pageTitle().invoke('text').then((text1) =>{
        expect(text1.trim()).to.equal(pageTitle)
    })
});

Given('I need to validate if {string} link is present',hometext=>{

    homepageo.homeLink().invoke('text').then((text1) =>{
    expect(text1.trim()).to.equal(hometext)
})
});

When('I select "Appium" value from dropdown',appium=>{
    homepageo.dropDown().select('Appium').should('have.value','option2');
   // cy.get('select').select('apples').should('have.value', '456')

})

When ('I write the data into file',()=>{
cy.writeFile('TestFile_Write.txt', 'First line\n ');
cy.writeFile('TestFile_Write.txt', 'Second line',{flag:'a+'});

})

Then ('I Read the data into file',()=>{
    cy.readFile('TestFile_Write').should('include','First line\nSecond line');
    
    })

    When('I read data using Fixtures',()=>{
        cy.visit(userDetails.URL);
        cy.url().should('include','practice')
        cy.xpath('//*[@id="name"]').type(exampledata.body);
    
    }

    
    




// Given ('I logs to api', ()=>{
// const re=cy.request('https://reqres.in/api/users') 
//     .its('status').should('eq',200)
//     //expect(re.status).equal(200);
//  //   let name='ab';
//  // name.should.equal('ab')

//    // expect(re.body).to.have.length(10);
// //Cypress.config('baseUrl','https://reqres.in')
//    //2 way of asserting
// //    cy.request('https://reqres.in/api/users').then((response)=>{
// //     expect(response.status).equal(200);

// //     expect(response.body.data[0]).to.have.property('email','george.bluth@reqres.in');  
// //     expect(response.body.data[1]).to.have.property('first_name','Janet');
// //     expect(response).to.have.property('body.page','1');
// // })
//     //3 way

//     //  var respone=cy.request('GET','https://reqres.in/api/users') 

//     //  respone.its('body.0').then((data)=>{
//     //     expect(data).to.have.property('email','george.bluth@reqres.in');  
//     //     expect(data).to.have.property('first_name','George');
//     //     expect(data).to.have.property('last_name','Bluth');
//     //     expect(data).to.have.property('first_name','George');


// ///////// POST //////////////////////////////
// cy.request({
//     method: 'POST',
//     url: 'https://reqres.in/api/users',
//     body: {
//         "name": "morpheus",
//         "job": "leader"
//     }
// }).then((response)=>{

//     expect(response).property('status').to.equal(201);
//     expect(response.body.name).to.equal('morpheus');
//     expect(response.body.job).to.equal('leader');

// })
    ) 
