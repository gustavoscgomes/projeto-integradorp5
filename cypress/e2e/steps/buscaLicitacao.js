import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que o usuário está no portal da transparência", () => {
  cy.visit('https://transparencia.pb.gov.br/');
});

When("o usuário clica no ícone de compras", () => {
  cy.get(':nth-child(4) > .btn-menu-transparencia').click();
});

When("o usuário clica na opção de {string}", (opcao) => {
  cy.get('.open > .dropdown-menu > :nth-child(1) > a').click(); // Clica na opção de Licitações
});

When("o usuário digita {string} no campo de processo", (processo) => {
  cy.get('#iframe_a') 
    .its('0.contentDocument')
    .then((doc) => {
      cy.wrap(doc).find('#RPTRender_ctl08_ctl17_txtValue').clear().type(processo); // Digita o valor no campo de processo
    });
});

When("o usuário clica no botão exibir relatorio", () => {
  cy.get('#iframe_a')
    .its('0.contentDocument')
    .then((doc) => {
      cy.wrap(doc).find('#RPTRender_ctl08_ctl00').click(); // Clica no botão de exibir relatório
    });
});

Then("a licitação é encontrada", () => {
  cy.get('#iframe_a')  // Localiza o iframe
    .should('be.visible')  // Verifica se o iframe está visível
    .its('0.contentDocument')  // Acessa o conteúdo do iframe
    .then((doc) => {
      expect(doc).to.exist;  // Verifica se o documento dentro do iframe existe
    });
});