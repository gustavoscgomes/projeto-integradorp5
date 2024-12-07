import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que o usuário acessa o portal da transparência", () => {
  cy.visit('https://transparencia.pb.gov.br/');
});

When("o usuário clica no menu despesas", () => {
  cy.get(':nth-child(2) > .btn-menu-transparencia').click();
});

When('o usuário clica na opção de "TRANSPORTES"', () => {
  cy.get(':nth-child(15) > .internal-link').click();
});

When("o usuário clica no ícone de diárias", () => {
  cy.get('#b784edb5-fca7-4aee-bf98-dbbeb0983da8 > .tile-thumbnail-card-icon-text').click();
});

Then("os resultados de diárias são exibidos", () => {
  cy.contains("Diárias").should("be.visible");
});