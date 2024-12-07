import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que o usuário está no portal da transparência", () => {
  cy.visit('https://transparencia.pb.gov.br');
});

When("o usuário digita {string} no campo de busca", (termoBusca) => {
  cy.get('#nolivesearchGadget').type(termoBusca);
});


When("o usuário clica no botão de busca", () => {
  cy.get('.tile-search-site-bt-submit').click();
});

Then("os resultados da busca contêm {string}", (termoEsperado) => {
  cy.get('.searchResults')
    .should('be.visible')
    .then(($results) => {
      const resultsText = $results.text().toLowerCase();
      const expectedTerm = termoEsperado.toLowerCase();
      if (resultsText.includes(expectedTerm)) {
        cy.log(`O termo "${termoEsperado}" foi encontrado nos resultados.`);
      } else {
        throw new Error(`O termo "${termoEsperado}" não foi encontrado nos resultados.`);
      }
    });
});
