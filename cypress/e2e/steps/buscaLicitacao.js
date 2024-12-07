import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que o usuário está no portal da transparência", () => {
  cy.visit('https://transparencia.pb.gov.br/');
});

When("o usuário clica no ícone de compras", () => {
  cy.get(':nth-child(4) > .btn-menu-transparencia').click();
});

When("o usuário clica na opção de {string}", (opcao) => {
  cy.get('.open > .dropdown-menu > :nth-child(1) > a').click(); 
});

When("o usuário digita {string} no campo de processo", (processo) => {
  cy.get('#iframe_a') 
    .its('0.contentDocument')
    .then((doc) => {
      cy.wrap(doc).find('#RPTRender_ctl08_ctl17_txtValue').clear().type(processo);
    });
});

When("o usuário clica no botão exibir relatorio", () => {
  cy.get('#iframe_a')
    .its('0.contentDocument')
    .then((doc) => {
      cy.wrap(doc).find('#RPTRender_ctl08_ctl00').click();
    });
});

Then("a licitação é encontrada", () => {
  cy.get('#iframe_a') 
    .should('be.visible')  
    .its('0.contentDocument')  
    .then((doc) => {
      expect(doc).to.exist;
    });
});