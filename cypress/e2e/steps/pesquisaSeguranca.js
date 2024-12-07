import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que o usuário está no portal da transparência", () => {
  cy.visit('https://transparencia.pb.gov.br'); 
});

When("o usuário digita {string} no campo de busca", (termoBusca) => {
  cy.get('#nolivesearchGadget').type(termoBusca); 
});

And("o usuário clica no botão de busca", () => {
  cy.get('.tile-search-site-bt-submit').click();
});

Then("os resultados da busca contêm {string}", (termoEsperado) => {
  cy.get('.searchResults')
    .should('be.visible')
    .then(($results) => {
      if ($results.text().toLowerCase().includes(termoEsperado.toLowerCase())) {
        cy.log(`O termo "${termoEsperado}" foi encontrado nos resultados.`);
      } else {
        throw new Error(`O termo "${termoEsperado}" não foi encontrado nos resultados.`);
      }
    });
});
