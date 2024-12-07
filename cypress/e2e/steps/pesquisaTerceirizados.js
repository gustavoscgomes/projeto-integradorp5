import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// Passo Given: Acessando o portal
Given("que o usuário está no portal da transparência", () => {
  cy.visit('https://transparencia.pb.gov.br');  // URL principal do portal da transparência
});

// Passo When: Digitar "terceirizados" no campo de busca
When("o usuário digita {string} no campo de busca", (termoBusca) => {
  cy.get('#nolivesearchGadget').type(termoBusca);  // Inserindo o termo "terceirizados" no campo de busca
});

// Passo And: Clicar no botão de busca
When("o usuário clica no botão de busca", () => {
  cy.get('.tile-search-site-bt-submit').click();  // Selecionando e clicando no botão de busca
});

// Passo Then: Verificar se os resultados contêm a palavra "terceirizados"
Then("os resultados da busca contêm {string}", (termoEsperado) => {
  cy.get('.searchResults') // Seletor dos resultados da busca
    .should('be.visible') // Verifica se os resultados estão visíveis
    .then(($results) => {
      const resultsText = $results.text().toLowerCase(); // Transforma o texto em minúsculas
      const expectedTerm = termoEsperado.toLowerCase(); // Transforma o termo esperado em minúsculas
      if (resultsText.includes(expectedTerm)) {
        cy.log(`O termo "${termoEsperado}" foi encontrado nos resultados.`);
      } else {
        throw new Error(`O termo "${termoEsperado}" não foi encontrado nos resultados.`);
      }
    });
});
