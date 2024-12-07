import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Passo Given: Acessando o portal
Given("que o usuário está no portal da transparência", () => {
  cy.visit('https://transparencia.pb.gov.br');  // URL principal do portal da transparência
});

// Passo When: Digitar "saúde" no campo de busca
When("o usuário digita {string} no campo de busca", (termoBusca) => {
  cy.get('#nolivesearchGadget').type(termoBusca);  // Inserindo o termo "saúde" no campo de busca
});

// Passo And: Clicar no botão de busca
And("o usuário clica no botão de busca", () => {
  cy.get('.tile-search-site-bt-submit').click();  // Selecionando e clicando no botão de busca
});

// Passo Then: Verificar se os resultados contêm a palavra "saúde"
Then("os resultados da busca contêm {string}", (termoEsperado) => {
  cy.get('.searchResults')  // Seletor dos resultados da busca
    .should('be.visible')  // Verifica se os resultados estão visíveis
    .contains(termoEsperado);  // Verifica se os resultados contêm o termo "saúde"
});